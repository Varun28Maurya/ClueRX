document.addEventListener('DOMContentLoaded', function () {
    // Get the archive grid container
    const archiveGrid = document.getElementById('archive-grid');

    // Start date: 2025-07-16 (Doctordle #1)
    const startDate = new Date('2025-07-16T00:00:00-05:00'); // CDT

    // Get current date in CDT
    const now = new Date();
    const currentCDT = new Date(now.toLocaleString("en-US", { timeZone: "America/Chicago" }));

    // Calculate days since start
    const daysSinceStart = Math.floor((currentCDT - startDate) / (1000 * 60 * 60 * 24));

    // Only show archives for past days (not today)
    const maxArchiveId = Math.max(0, daysSinceStart - 1);

    // Generate archive tiles
    generateArchiveTiles(archiveGrid, maxArchiveId);

    // Add click handlers to tiles
    addTileClickHandlers();
});

function generateArchiveTiles(container, maxId) {
    // Clear existing content
    container.innerHTML = '';

    if (maxId === 0) {
        container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #666; margin: 2rem 0;">No archived Doctordles available yet. Come back tomorrow!</p>';
        return;
    }

    // Generate tiles from most recent to oldest
    for (let id = maxId; id >= 1; id--) {
        const tile = createArchiveTile(id);
        container.appendChild(tile);
    }
}

function createArchiveTile(id) {
    const tile = document.createElement('div');
    tile.className = 'archive-tile';
    tile.dataset.archiveId = id;

    // Check the archive status (null, 'won', or 'lost')
    const status = getArchiveStatus(id);
    if (status === 'won') {
        tile.classList.add('completed');
    } else if (status === 'lost') {
        tile.classList.add('failed');
    }

    // Calculate the date for this archive using UTC to avoid timezone shifts
    const MS_PER_DAY = 24 * 60 * 60 * 1000;
    const startMs = Date.UTC(2025, 6, 16); // July 16, 2025 (months are 0-indexed)
    const archiveDate = new Date(startMs + id * MS_PER_DAY);

    const formattedDate = archiveDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC'
    });

    // Show checkmark (won) or X (lost) on same line as number
    if (status === 'won') {
        tile.innerHTML = `
            <div class="tile-header">
                <span class="tile-number">#${id}</span>
                <div class="checkmark-circle"><span class="checkmark">âœ“</span></div>
            </div>
            <div class="tile-date">${formattedDate}</div>
        `;
    } else if (status === 'lost') {
        tile.innerHTML = `
            <div class="tile-header">
                <span class="tile-number">#${id}</span>
                <div class="x-circle"><span class="x-mark">âœ•</span></div>
            </div>
            <div class="tile-date">${formattedDate}</div>
        `;
    } else {
        tile.innerHTML = `
            <div class="tile-number">#${id}</div>
            <div class="tile-date">${formattedDate}</div>
        `;
    }

    return tile;
}

function addTileClickHandlers() {
    const tiles = document.querySelectorAll('.archive-tile');

    tiles.forEach(tile => {
        tile.addEventListener('click', function () {
            const archiveId = this.dataset.archiveId;
            if (archiveId) {
                // Navigate to the archive game
                window.location.href = `/index.html?archive=${archiveId}`;
            }
        });

        // Add keyboard support
        tile.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });

        // Make tiles focusable
        tile.setAttribute('tabindex', '0');
        tile.setAttribute('role', 'button');
        tile.setAttribute('aria-label', `Play Doctordle #${tile.dataset.archiveId}`);
    });
}

function getArchiveStatus(archiveId) {
    // Check localStorage for archive completion status
    // Returns: null (not played), 'won', or 'lost'
    try {
        // Check if completed as archive
        const archiveStatus = localStorage.getItem(`doctordle_archive_${archiveId}_completed`);
        // console.log(`[DEBUG] Archive ${archiveId} - localStorage check:`, archiveStatus);

        // Handle new format: 'won' or 'lost'
        if (archiveStatus === 'won' || archiveStatus === 'lost') {
            return archiveStatus;
        }

        // Handle legacy format: 'true' (treat as won for backwards compatibility)
        if (archiveStatus === 'true') {
            return 'won';
        }

        // Check if completed as daily game (search for any key matching this disease ID)
        // This handles timezone edge cases and testing scenarios
        const keyPrefix = `doctordle_${archiveId}_`;
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(keyPrefix) && !key.includes('_completed')) {
                try {
                    const gameState = localStorage.getItem(key);
                    if (gameState) {
                        const parsed = JSON.parse(gameState);
                        // Check if game was completed
                        if (parsed.gameCompleted && parsed.gameResult) {
                            return parsed.gameResult.won ? 'won' : 'lost';
                        }
                    }
                } catch (parseError) {
                    // Ignore parse errors
                }
            }
        }

        // console.log(`[DEBUG] Archive ${archiveId} not completed`);
        return null;
    } catch (e) {
        // console.error(`[ERROR] checking archive ${archiveId}:`, e);
        // If localStorage is not available, return null
        return null;
    }
}

// Legacy function for backwards compatibility
function isArchiveCompleted(archiveId) {
    return getArchiveStatus(archiveId) !== null;
}

// Function to mark an archive as completed (called from the main game)
// won: true = victory (green checkmark), false = loss (red X)
// Defaults to true for backwards compatibility with cached JS
function markArchiveCompleted(archiveId, won = true) {
    try {
        const status = won === false ? 'lost' : 'won';
        // console.log(`[DEBUG] Marking archive ${archiveId} as ${status}`);
        localStorage.setItem(`doctordle_archive_${archiveId}_completed`, status);
        // console.log(`[DEBUG] Archive ${archiveId} marked ${status} in localStorage`);
    } catch (e) {
        // If localStorage is not available, silently fail
        // console.warn('Could not save archive completion status', e);
    }
}

// Export function for use in other scripts
window.markArchiveCompleted = markArchiveCompleted;
