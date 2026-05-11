
document.addEventListener('DOMContentLoaded', () => {
  const records = window.cluerxRecords || [];
  const params = new URLSearchParams(window.location.search);
  const requestedTestId = params.get('test');
  const activeRecord = records.length
    ? records.find(record => record.id === requestedTestId) || records[Math.floor(Math.random() * records.length)]
    : null;

  if (activeRecord) {
    const symptomData = document.getElementById('symptom-data');
    const descriptionData = document.getElementById('description-data');
    const doctordleData = document.getElementById('doctordle-data');
    const firstSymptom = document.querySelector('.symptom-list .symptom');

    if (symptomData) symptomData.textContent = JSON.stringify(activeRecord.clues);
    if (descriptionData) {
      descriptionData.textContent = JSON.stringify(
        activeRecord.summary || `${activeRecord.answer}: ${activeRecord.clues.join(' ')}`
      );
    }
    if (doctordleData) {
      doctordleData.dataset.id = activeRecord.id;
      doctordleData.dataset.archive = requestedTestId ? 'true' : 'false';
    }
    if (firstSymptom) firstSymptom.textContent = activeRecord.question;
  }

  const diseases = JSON.parse(document.getElementById('disease-data').textContent);
  records.forEach(record => {
    if (!diseases.some(disease => disease.id === record.id)) {
      diseases.push({ id: record.id, name: record.answer });
    }
  });
  const doctordle = document.getElementById('doctordle-data').dataset.id;
  const symptoms = JSON.parse(document.getElementById('symptom-data').textContent);
  const modal = document.getElementById("result-modal");
  const modalMessage = document.getElementById("modal-message");
  const modalShareBtn = document.getElementById("modal-share-btn");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalCopyMsg = document.getElementById("modal-copy-message");

  // Check if this is an archive game
  const isArchiveMode = document.getElementById('doctordle-data').dataset.archive === 'true';

  let guessNumber = 0;
  let selectedDiseaseId = null;
  let gameCompleted = false;
  let cookiesAccepted = false;
  let guessedDiseases = []; // Track diseases that have been guessed
  let guessHistory = []; // Track { name, result } for each guess (daily game only)

  // Updated statistics object with guess distribution
  let gameStats = {
    gamesPlayed: 0,
    totalGuesses: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastPlayedDate: null,
    wins: 0,
    guessDistribution: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0
    }
  };

  // Function to calculate today's disease number
  function getTodaysDiseaseNumber() {
    // Start date: July 16, 2025 in CDT
    const startDate = new Date('2025-07-16T00:00:00-05:00'); // CDT is UTC-5
    const now = new Date();

    // Calculate days since start date
    const daysSinceStart = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));

    return daysSinceStart;
  }

  function getLastGameResult() {
    // If current game is completed, use current game data
    if (gameCompleted) {
      const resultEl = document.getElementById('result_class');
      const won = resultEl && resultEl.classList.contains('correct');
      return { won, guessCount: guessNumber };
    }

    // Otherwise, assume last game was a win if current streak > 0, loss if streak = 0
    const won = gameStats.currentStreak > 0;
    // For guess count, use average or default to 3 for wins, 6 for losses
    const avgGuesses = gameStats.totalGuesses > 0 ? Math.round(gameStats.totalGuesses / gameStats.gamesPlayed) : (won ? 3 : 6);
    return { won, guessCount: Math.min(avgGuesses, 6) };
  }

  // Function to generate share text with new format
  function generateShareText(won, guessCount) {
    const diseaseNumber = getTodaysDiseaseNumber();
    let shareString = `Doctordle #${diseaseNumber}\nðŸ¥ `;

    // Create array of 6 positions for guesses
    const guessEmojis = [];

    for (let i = 1; i <= 6; i++) {
      if (i < guessCount) {
        // Previous guesses were wrong
        guessEmojis.push('ðŸŸ¥');
      } else if (i === guessCount) {
        // Current guess - correct if won, wrong if lost
        guessEmojis.push(won ? 'ðŸŸ©' : 'ðŸŸ¥');
      } else {
        // Unused guesses (black boxes)
        guessEmojis.push('â¬›');
      }
    }

    // Join with spaces
    shareString += guessEmojis.join(' ');
    shareString += '\n\nhttps://doctordle.org';

    return shareString;
  }

  // Cookie utility functions
  function setCookie(name, value, days) {
    try {
      const expires = new Date();
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
      const cookieString = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
      document.cookie = cookieString;
      // console.log(`[DEBUG] Cookie set: ${name} = ${value.substring(0, 50)}... (${value.length} chars)`);

      // Verify the cookie was actually set
      const verification = getCookie(name);
      if (verification) {
        // console.log(`[DEBUG] Cookie verification successful: ${name}`);
      } else {
        // console.error(`[ERROR] Cookie verification failed: ${name}`);
      }
    } catch (error) {
      // console.error(`[ERROR] Failed to set cookie:`, error);
    }
  }

  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  // Google Analytics tracking function
  function sendGuessToAnalytics(guessCount, won) {
    // console.log(`[DEBUG] sendGuessToAnalytics called: guesses=${guessCount}, won=${won}`);
    // console.log(`[DEBUG] gtag available: ${typeof gtag !== 'undefined'}`);

    if (typeof gtag !== 'undefined') {
      // Get today's disease number for the event
      const todaysDiseaseNumber = getTodaysDiseaseNumber();

      // For losses, use guess count 7 to separate from 6-guess wins
      const analyticsGuessCount = won ? guessCount : 7;

      // console.log(`[DEBUG] Sending analytics: disease=${todaysDiseaseNumber}, guesses=${analyticsGuessCount}, result=${won ? 'win' : 'loss'}`);

      // Send custom event to Google Analytics
      gtag('event', 'game_complete', {
        'custom_parameter_1': analyticsGuessCount,
        'custom_parameter_2': won ? 'win' : 'loss',
        'custom_parameter_3': todaysDiseaseNumber,
        'event_category': 'game',
        'event_label': `${analyticsGuessCount}_guesses_${won ? 'win' : 'loss'}`
      });

      // console.log(`[DEBUG] Analytics event sent successfully`);
    } else {
      // console.log(`[DEBUG] gtag not available - analytics not sent`);
    }
  }

  // Fetch percentile ranking from backend
  async function fetchPercentileRanking(guessCount, won = true) {
    try {
      const response = await fetch(`/doctordle/api/percentile/?guesses=${guessCount}&won=${won}`);
      if (!response.ok) return null;
      const data = await response.json();
      return data.percentile !== null ? data : null;
    } catch (error) {
      // console.error('Error fetching percentile data:', error);
      return null;
    }
  }

  // Statistics functions
  function loadStats() {
    if (!cookiesAccepted) return;

    const savedStats = getCookie('doctordle_stats');
    if (savedStats) {
      try {
        const parsed = JSON.parse(savedStats);
        gameStats = { ...gameStats, ...parsed };

        // Ensure guess distribution exists (for backward compatibility)
        if (!gameStats.guessDistribution) {
          gameStats.guessDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
        }
      } catch (e) {
        // console.error('Error loading stats:', e);
        resetStats();
      }
    }
  }

  function saveStats() {
    if (!cookiesAccepted) return;
    setCookie('doctordle_stats', JSON.stringify(gameStats), 365);
  }

  function resetStats() {
    gameStats = {
      gamesPlayed: 0,
      totalGuesses: 0,
      currentStreak: 0,
      longestStreak: 0,
      lastPlayedDate: null,
      wins: 0,
      guessDistribution: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
      }
    };
    saveStats();
  }

  function updateStats(won, guessCount) {
    if (!cookiesAccepted) return;

    gameStats.gamesPlayed += 1;
    gameStats.totalGuesses += guessCount;
    gameStats.lastPlayedDate = new Date().toDateString();

    if (won) {
      gameStats.wins += 1;

      // Update guess distribution
      if (guessCount >= 1 && guessCount <= 6) {
        gameStats.guessDistribution[guessCount]++;
      }

      // Streak means consecutive wins in the current ClueRX test flow.
      gameStats.currentStreak += 1;

      // Update longest streak
      if (gameStats.currentStreak > gameStats.longestStreak) {
        gameStats.longestStreak = gameStats.currentStreak;
      }
    } else {
      // Lost - reset current streak
      gameStats.currentStreak = 0;
    }

    saveStats();
  }

  function getWinPercentage() {
    if (gameStats.gamesPlayed === 0) return 0;
    return Math.round((gameStats.wins / gameStats.gamesPlayed) * 100);
  }

  function createGuessDistributionChart(highlightGuess = null) {
    const maxCount = Math.max(...Object.values(gameStats.guessDistribution));

    let chartHTML = '<div class="guess-distribution-chart">';
    chartHTML += '<h4>Guess Distribution</h4>';

    for (let i = 1; i <= 6; i++) {
      const count = gameStats.guessDistribution[i] || 0;

      // Calculate proportional width based on count vs max count
      let barWidth = 0;
      if (count > 0 && maxCount > 0) {
        barWidth = (count / maxCount) * 100;
        // Ensure minimum width of 20% for visibility when count > 0
        barWidth = Math.max(barWidth, 20);
      }

      // Highlight today's guess count
      const isHighlighted = highlightGuess === i;
      const numberClass = isHighlighted ? 'guess-number highlighted' : 'guess-number';
      const barClass = isHighlighted ? 'distribution-bar highlighted' : 'distribution-bar';

      chartHTML += `
      <div class="distribution-row">
        <div class="${numberClass}">${i}</div>
        <div class="distribution-bar-container">
          ${count > 0 ? `
            <div class="${barClass}" style="width: ${barWidth}%;">
              <div class="distribution-count">${count}</div>
            </div>
          ` : '<div class="distribution-empty">0</div>'}
        </div>
      </div>
    `;
    }

    chartHTML += '</div>';
    return chartHTML;
  }

  function openStatsModal() {
    if (!cookiesAccepted) return;

    const stats = formatStatsDisplay();
    const statsContent = createStatsDisplay(stats);

    modalMessage.innerHTML = statsContent;
    modalCopyMsg.style.display = "none";
    modalShareBtn.style.display = "none";

    modal.classList.add("modal-visible");
    modal.classList.remove("modal-hidden");
  }

  function formatStatsDisplay() {
    const losses = Math.max(gameStats.gamesPlayed - gameStats.wins, 0);
    const averageGuesses = gameStats.gamesPlayed > 0
      ? (gameStats.totalGuesses / gameStats.gamesPlayed).toFixed(1)
      : '0.0';

    return {
      gamesPlayed: gameStats.gamesPlayed,
      wins: gameStats.wins,
      losses,
      winPercentage: getWinPercentage(),
      currentStreak: gameStats.currentStreak,
      longestStreak: gameStats.longestStreak,
      averageGuesses
    };
  }

  // Cookie notification functions
  function showCookieNotification() {
    const notification = document.getElementById('cookie-notification');
    if (notification) {
      notification.classList.remove('hidden');
      notification.classList.add('show');
    }
  }

  function hideCookieNotification() {
    const notification = document.getElementById('cookie-notification');
    if (notification) {
      notification.classList.remove('show');
      notification.classList.add('hidden');
    }
  }

  function showGameDisabledOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'game-disabled-overlay';
    overlay.innerHTML = `
      <div class="game-disabled-content">
        <h3>ðŸª Cookies Required</h3>
        <p>Doctordle uses essential cookies to save your game progress and ensure fair play. Please accept cookies to continue playing.</p>
        <button id="overlay-accept" class="btn_color">Accept Cookies & Play</button>
      </div>
    `;

    document.body.appendChild(overlay);

    // Handle overlay buttons
    document.getElementById('overlay-accept').onclick = () => {
      acceptCookies();
      document.body.removeChild(overlay);
    };
  }

  function acceptCookies() {
    cookiesAccepted = true;
    setCookie('doctordle_cookies_accepted', 'true', 365); // Valid for 1 year
    hideCookieNotification();
    initializeGame();
  }

  function declineCookies() {
    cookiesAccepted = false;
    hideCookieNotification();
    showGameDisabledOverlay();
    disableGameInput();
  }

  function checkCookieConsent() {
    const consent = getCookie('doctordle_cookies_accepted');
    if (consent === 'true') {
      cookiesAccepted = true;
      return true;
    }
    return false;
  }

  // Game state management
  function getGameStateKey() {
    const today = new Date().toDateString();
    const key = `doctordle_${doctordle}_${today}`;
    // console.log(`[DEBUG] Game state key: ${key}`);
    return key;
  }

  function saveGameState() {
    if (!cookiesAccepted) {
      // console.log(`[DEBUG] Cannot save game state - cookies not accepted`);
      return;
    }

    // Don't save game state for archive games - they should always start fresh
    if (isArchiveMode) {
      return;
    }

    const gameState = {
      guessNumber: guessNumber,
      gameCompleted: gameCompleted,
      revealedSymptoms: [],
      gameResult: null,
      guessedDiseases: guessedDiseases,
      guessHistory: guessHistory
    };

    // console.log(`[DEBUG] Saving game state: guesses=${guessNumber}, completed=${gameCompleted}`);

    // Track which symptoms have been revealed
    for (let i = 2; i <= 6; i++) {
      const symptomEl = document.getElementById(`guess_${i === 2 ? 'two' : i === 3 ? 'three' : i === 4 ? 'four' : i === 5 ? 'five' : 'six'}`);
      if (symptomEl && symptomEl.textContent.trim()) {
        gameState.revealedSymptoms.push({
          index: i - 2,
          symptom: symptomEl.textContent.trim()
        });
        // console.log(`[DEBUG] Saving symptom ${i}: ${symptomEl.textContent.trim()}`);
      }
    }

    // If game is completed, save the result
    if (gameCompleted) {
      const resultEl = document.getElementById('result_class');
      gameState.gameResult = {
        isCorrect: resultEl.classList.contains('correct'),
        message: resultEl.textContent,
        guessCount: guessNumber,
        won: resultEl.classList.contains('correct')
      };
      // console.log(`[DEBUG] Saving game result: ${gameState.gameResult.message}, correct=${gameState.gameResult.isCorrect}`);
    }

    try {
      // Use localStorage for daily game state (Safari 26 compatible)
      const stateString = JSON.stringify(gameState);
      localStorage.setItem(getGameStateKey(), stateString);
      // ] Game state saved to localStorage: ${getGameStateKey()}`);
    } catch (error) {
      // console.error(`[ERROR] Failed to save game state:`, error);
    }
  }

  function loadGameState() {
    if (!cookiesAccepted) return false;

    // Archive games should always start fresh - don't load saved state
    if (isArchiveMode) return false;

    const gameStateKey = getGameStateKey();

    try {
      // Try loading from localStorage first (new Safari 26 compatible method)
      const savedState = localStorage.getItem(gameStateKey);

      if (!savedState) {
        // Fallback: try loading from old cookie format
        const cookieState = getCookie(gameStateKey);
        if (cookieState) {
          // console.log(`[DEBUG] Found old cookie format, migrating to localStorage`);
          // Clear old cookie and skip loading it (Safari 26 issue)
          deleteCookie(gameStateKey);
        }
        return false;
      }

      // console.log(`[DEBUG] Loading from localStorage: ${gameStateKey}`);
      const gameState = JSON.parse(savedState);
      // console.log(`[DEBUG] Successfully loaded from localStorage`);

      guessNumber = gameState.guessNumber;
      gameCompleted = gameState.gameCompleted;
      guessedDiseases = gameState.guessedDiseases || [];
      guessHistory = gameState.guessHistory || [];
      renderInlineGuessHistory();

      // console.log(`[DEBUG] Game state loaded: guesses=${guessNumber}, completed=${gameCompleted}`);

      // Restore revealed symptoms
      if (gameState.revealedSymptoms) {
        gameState.revealedSymptoms.forEach(symptomData => {
          const symptomIds = ['guess_two', 'guess_three', 'guess_four', 'guess_five', 'guess_six'];
          const symptomEl = document.getElementById(symptomIds[symptomData.index]);
          if (symptomEl) {
            symptomEl.textContent = symptomData.symptom;
            symptomEl.classList.add('hints_shown');
          }
        });
      }

      // If game is completed, make sure all symptoms are revealed
      if (gameCompleted) {
        // console.log(`[DEBUG] Game completed - revealing all symptoms`);
        revealAllHints();

        // Reveal symptoms based on guess count
        for (let i = 1; i < guessNumber && i <= 5; i++) {
          const symptomIds = ['guess_two', 'guess_three', 'guess_four', 'guess_five', 'guess_six'];
          const symptomEl = document.getElementById(symptomIds[i - 1]);
          if (symptomEl && symptoms[i - 1] && !symptomEl.textContent.trim()) {
            symptomEl.textContent = symptoms[i - 1];
            symptomEl.classList.add('hints_shown');
          }
        }
      }

      // Restore game result if completed
      if (gameCompleted && gameState.gameResult) {
        const resultEl = document.getElementById('result_class');
        resultEl.textContent = gameState.gameResult.message;
        resultEl.classList.add('result');
        if (gameState.gameResult.isCorrect) {
          resultEl.classList.add('correct');
        } else {
          resultEl.classList.add('incorrect');
        }

        disableGameInput();
        showSummaryButton();

        // Show the results modal automatically when page is loaded with completed game
        // Use setTimeout to ensure DOM is fully loaded and avoid conflicts
        setTimeout(() => {
          const correctDisease = diseases.find(d => d.id == doctordle);
          const diseaseName = correctDisease ? correctDisease.name : "unknown";
          const shareText = isArchiveMode ? null : generateShareText(gameState.gameResult.won, gameState.gameResult.guessCount);

          if (gameState.gameResult.won) {
            const winMessage = `<div style="padding: 0.75rem; background-color: #e6f3ff; border-radius: 8px; border: 2px solid #2196F3; margin-bottom: 1rem;">
              <strong>ðŸŽ‰ Correct! The drug was ${diseaseName}.</strong>
            </div>`;
            // Only show percentiles for daily games, not archives
            const showPercentiles = !isArchiveMode;
            openModal(winMessage, shareText, showPercentiles, gameState.gameResult.guessCount, true);
          } else {
            const lossMessage = `<div style="padding: 0.75rem; background-color: #fff3e0; border-radius: 8px; border: 2px solid #ff9800; margin-bottom: 1rem;">
              <strong>âŒ Game Over! The drug was ${diseaseName}.</strong>
            </div>`;
            // Only show percentiles for daily games, not archives
            const showPercentiles = !isArchiveMode;
            openModal(lossMessage, shareText, showPercentiles, gameState.gameResult.guessCount, false);
          }
        }, 100);
      }

      return true;
    } catch (e) {
      // console.error('[ERROR] Failed to load from localStorage:', e);
      // Clear corrupted localStorage
      localStorage.removeItem(gameStateKey);
      return false;
    }
  }

  function disableGameInput() {
    const input = document.getElementById("guess");
    const submitBtn = document.getElementById('submit-btn');
    const suggestions = document.getElementById('suggestions');

    if (input) {
      if (gameCompleted) {
        // Find today's disease name
        const correctDisease = diseases.find(d => d.id == doctordle);
        const diseaseName = correctDisease ? correctDisease.name : "unknown";
        input.placeholder = `${diseaseName}`;
      } else {
        input.placeholder = "Accept cookies to play";
      }
      input.disabled = true;
    }
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = gameCompleted ? "Game Complete" : "Cookies Required";
      submitBtn.style.opacity = "0.6";
      submitBtn.style.cursor = "not-allowed";
    }
    if (suggestions) {
      suggestions.style.display = 'none';
    }
  }

  function enableGameInput() {
    const input = document.getElementById("guess");
    const submitBtn = document.querySelector('.btn_color');

    if (input && !gameCompleted) {
      input.disabled = false;
      input.placeholder = "Drugs...";
    }
    if (submitBtn && !gameCompleted) {
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit";
      submitBtn.style.opacity = "1";
      submitBtn.style.cursor = "pointer";
    }
  }

  function cleanupOldGameStates() {
    if (!cookiesAccepted) return;

    const today = new Date().toDateString();
    const cookies = document.cookie.split(';');

    cookies.forEach(cookie => {
      const cookieName = cookie.split('=')[0].trim();
      if (cookieName.startsWith('doctordle_') && !cookieName.includes(today) &&
        cookieName !== 'doctordle_cookies_accepted' && cookieName !== 'doctordle_stats') {
        deleteCookie(cookieName);
      }
    });
  }

  function initializeGame() {
    if (!cookiesAccepted) {
      disableGameInput();
      return;
    }

    loadStats(); // Load statistics
    const hasExistingGame = loadGameState();
    cleanupOldGameStates();
    enableGameInput();

    // Show a message if the user has already played today
    if (hasExistingGame && gameCompleted) {
      const resultEl = document.getElementById('result_class');
      if (resultEl) {
        resultEl.textContent = "You've already played today! Come back tomorrow!";
        resultEl.classList.remove('correct', 'incorrect', 'result', 'completed');
        // Force reflow to restart animation
        void resultEl.offsetWidth;
        resultEl.classList.add('result', 'completed');
      }
    }

    // Set up stats button click handler
    const statsBtn = document.getElementById('stats-button');
    if (statsBtn) {
      statsBtn.onclick = openStatsModal;
    }
  }

  // Initialize cookie notification system
  function initializeCookieSystem() {
    if (checkCookieConsent()) {
      initializeGame();
    } else {
      showCookieNotification();
      disableGameInput();
    }

    // Set up cookie notification event handlers
    const acceptBtn = document.getElementById('cookie-accept');
    const declineBtn = document.getElementById('cookie-decline');

    if (acceptBtn) {
      acceptBtn.onclick = acceptCookies;
    }

    if (declineBtn) {
      declineBtn.onclick = declineCookies;
    }
  }

  // Grab share-related elements early and safely
  const shareButton = document.getElementById("share-button");
  const shareResult = document.getElementById("share-result");
  const copyMessage = document.getElementById("copy-message");

  if (shareButton) shareButton.style.display = "none";
  if (shareResult) shareResult.style.display = "none";
  if (copyMessage) copyMessage.style.display = "none";

  function createStatsDisplay(stats, highlightGuess = null) {
    const distributionChart = createGuessDistributionChart(highlightGuess);
    const emptyState = stats.gamesPlayed === 0
      ? '<p class="stats-empty">Complete a test to start building your stats.</p>'
      : '';

    return `
      <div class="stats-container">
        <h3 style="margin-top: 0; color: #5a3e2b;">ðŸ“Š Your Statistics</h3>
        <div class="stats-title">Your ClueRX Stats</div>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">${stats.gamesPlayed}</div>
            <div class="stat-label">Played</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${stats.winPercentage}%</div>
            <div class="stat-label">Win Rate</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${stats.averageGuesses}</div>
            <div class="stat-label">Avg Guesses</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${stats.currentStreak}</div>
            <div class="stat-label">Current</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${stats.longestStreak}</div>
            <div class="stat-label">Best</div>
          </div>
        </div>
        <p class="stats-record">${stats.wins} wins, ${stats.losses} losses</p>
        ${emptyState}
        ${distributionChart}
      </div>
    `;
  }

  function openModal(message, shareText = null, showStats = false, guessCount = null, won = true) {
    let modalContent = message;

    if (showStats) {
      const stats = formatStatsDisplay();
      // Highlight the guess count if it's a win
      const highlightGuess = won ? guessCount : null;
      modalContent = `<div style="text-align: center;">${message}</div>${createStatsDisplay(stats, highlightGuess)}`;
    } else if (isArchiveMode) {
      // For selected record games, add custom message below the result
      const archiveNumber = doctordle;
      let archiveMessage = '';
      if (won) {
        archiveMessage = `<div style="margin-top: 1rem; padding: 0.75rem; background-color: #e6f3ff; border-radius: 8px; border: 2px solid #2196F3;">
          <strong>You got Doctordle #${archiveNumber} in ${guessCount} ${guessCount === 1 ? 'guess' : 'guesses'}!</strong>
        </div>`;
      } else {
        archiveMessage = `<div style="margin-top: 1rem; padding: 0.75rem; background-color: #fff3e0; border-radius: 8px; border: 2px solid #ff9800;">
          <strong>Better luck next time!</strong>
        </div>`;
      }
      modalContent = `<div style="text-align: center; width: 100%;">${message}${archiveMessage}</div>`;
    } else {
      // For other games without stats, ensure full width
      modalContent = `<div style="text-align: center; width: 100%;">${message}</div>`;
    }

    modalMessage.innerHTML = modalContent;
    modalCopyMsg.style.display = "none";

    // Only show share button if not in archive mode
    // console.log(`[DEBUG openModal] shareText: ${shareText}, isArchiveMode: ${isArchiveMode}, showButton: ${shareText && !isArchiveMode}`);
    if (shareText && !isArchiveMode) {
      // console.log('[DEBUG] Showing share button');
      modalShareBtn.style.display = "inline-block";
      modalShareBtn.onclick = () => {
        navigator.clipboard.writeText(shareText).then(() => {
          modalCopyMsg.style.display = "block";
          setTimeout(() => modalCopyMsg.style.display = "none", 2000);
        });
      };
    } else {
      // console.log('[DEBUG] Hiding share button');
      modalShareBtn.style.display = "none";
    }

    // Show modal immediately
    modal.classList.add("modal-visible");
    modal.classList.remove("modal-hidden");

    // Add percentile ranking asynchronously after modal is shown
    if (showStats && guessCount) {
      fetchPercentileRanking(guessCount, won).then(percentileData => {
        if (percentileData && percentileData.tier) {
          let message, bgColor, borderColor;

          if (percentileData.tier === "not in top 50%") {
            message = "You were not in the top 50% of players today, better luck tomorrow!";
            bgColor = "#fff3e0";
            borderColor = "#ff9800";
          } else {
            message = `ðŸ§  You were in the ${percentileData.tier} of players today!`;
            bgColor = "#e6f3ff";
            borderColor = "#2196F3";
          }

          const percentileDiv = `<div style="margin-top: 1rem; padding: 0.75rem; background-color: ${bgColor}; border-radius: 8px; border: 2px solid ${borderColor};">
            <strong>${message}</strong>
          </div>`;
          modalMessage.innerHTML += percentileDiv;
        }
      });
    }
  }

  function closeModal() {
    modal.classList.remove("modal-visible");
    modal.classList.add("modal-hidden");
  }

  modalCloseBtn.onclick = closeModal;

  function showSummaryButton() {
    const description = JSON.parse(document.getElementById('description-data').textContent);
    if (!description) return;

    const correctDisease = diseases.find(d => d.id == doctordle);
    const diseaseName = correctDisease ? correctDisease.name : 'Drug Summary';
    const summaryTitle = document.querySelector('.summary-title');
    if (summaryTitle) summaryTitle.textContent = diseaseName;
    const summaryText = document.getElementById('disease-summary-text');
    if (summaryText) renderDrugSummary(summaryText, description);

    // Anki tag buttons â€” show each only if its value is non-empty
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) submitBtn.style.display = 'none';
    const btn = document.getElementById('summary-btn');
    if (btn) btn.style.display = 'inline-block';
  }

  function renderDrugSummary(container, summary) {
    container.innerHTML = '';

    if (typeof summary === 'string') {
      const paragraph = document.createElement('p');
      paragraph.textContent = summary;
      container.appendChild(paragraph);
      return;
    }

    const toxicityDetails = [summary.toxicity, summary.ecg, summary.management]
      .filter(Boolean)
      .join(' ');

    const sections = [
      ['Use', summary.overview],
      ['Mechanism', summary.mechanism],
      ['Toxicity & Management', toxicityDetails]
    ].filter(([, value]) => value);

    sections.forEach(([label, value]) => {
      const section = document.createElement('section');
      section.className = 'summary-section';

      const heading = document.createElement('h4');
      heading.textContent = label;

      const text = document.createElement('p');
      text.textContent = value;

      section.appendChild(heading);
      section.appendChild(text);
      container.appendChild(section);
    });
  }

  function copyAnkiTag(btn, tag) {
    const original = btn.textContent;
    const showCopied = () => {
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = original; }, 2000);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(tag).then(showCopied);
    } else {
      // Fallback for HTTP / older mobile browsers
      const textarea = document.createElement('textarea');
      textarea.value = tag;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showCopied();
    }
  }

  const cardFlipInner = document.getElementById('card-flip-inner');

  const summaryBtn = document.getElementById('summary-btn');
  if (summaryBtn) {
    summaryBtn.addEventListener('click', () => {
      if (!cardFlipInner) return;
      const flipped = cardFlipInner.classList.toggle('flipped');
      summaryBtn.textContent = flipped ? 'â† Clues' : '+ Drug Summary';
    });
  }

  function renderInlineGuessHistory() {
    const list = document.getElementById('guess-history-list');
    if (!list) return;
    list.innerHTML = guessHistory.map((g, i) => {
      const icon = g.result === 'correct' ? 'âœ“' : g.result === 'skip' ? 'â€”' : 'âœ—';
      return `<div class="guess-history-item ${g.result}">
      <span class="guess-history-name">${i + 1}. ${g.name}</span>
      <span class="guess-history-icon">${icon}</span>
    </div>`;
    }).join('');
  }

  function revealAllHints() {
    const hintElements = ['guess_two', 'guess_three', 'guess_four', 'guess_five', 'guess_six'];

    hintElements.forEach((elementId, index) => {
      const el = document.getElementById(elementId);
      // Only reveal if the symptom hasn't been shown yet
      if (el && !el.textContent.trim() && symptoms[index]) {
        el.textContent = symptoms[index];
        el.classList.remove('flip_in');
        void el.offsetWidth; // Force reflow
        el.classList.add('flip_in', 'hints_shown');
      }
    });
  }

  function guessing() {
    if (gameCompleted || !cookiesAccepted) {
      return;
    }

    const input = document.getElementById("guess");
    const inputValue = input.value.trim();

    // Clear any previous result message immediately
    const resultEl = document.getElementById('result_class');
    resultEl.classList.remove('fade_in', 'result', 'correct', 'incorrect');
    resultEl.textContent = "";

    let myGuessId = selectedDiseaseId;

    // If no disease was selected from suggestions, check if input matches a valid disease
    if (!myGuessId && inputValue !== "") {
      const typedName = inputValue.toLowerCase();
      const found = diseases.find(d => d.name.toLowerCase() === typedName);
      if (found) {
        myGuessId = found.id;
        selectedDiseaseId = found.id;
      }
    }

    // Only show error for invalid (non-blank, non-matching) entries
    if (inputValue !== "" && !myGuessId) {
      resultEl.textContent = "Please select a valid disease or leave blank";
      resultEl.classList.remove('result', 'incorrect');
      // Force reflow to restart animation
      void resultEl.offsetWidth;
      resultEl.classList.add('fade_in', 'result', 'incorrect');
      return; // Don't increment guess count for invalid entries
    }

    // Check if this disease has already been guessed
    if (myGuessId && guessedDiseases.includes(myGuessId)) {
      resultEl.textContent = "You've already guessed this disease!";
      resultEl.classList.remove('result', 'incorrect');
      // Force reflow to restart animation
      void resultEl.offsetWidth;
      resultEl.classList.add('fade_in', 'result', 'incorrect');
      return; // Don't increment guess count for re-guesses
    }

    // Increment guess count for all valid entries (blank or valid disease)
    guessNumber += 1;

    // Add disease to guessed list if it's a valid disease (not blank)
    if (myGuessId) {
      guessedDiseases.push(myGuessId);
    }

    const guessName = myGuessId
      ? (diseases.find(d => d.id == myGuessId)?.name || 'Unknown')
      : 'Skipped';

    // Check if it's the correct answer (only if not blank)
    // console.log(`[DEBUG] Checking answer: myGuessId=${myGuessId}, doctordle=${doctordle}, matches=${myGuessId == doctordle}`);

    if (myGuessId && myGuessId == doctordle) {
      const tries = guessNumber;
      // console.log(`[DEBUG] CORRECT ANSWER! Tries: ${tries}`);

      resultEl.textContent = "Correct!";
      resultEl.classList.remove('result', 'correct');
      // Force reflow to restart animation
      void resultEl.offsetWidth;
      resultEl.classList.add('fade_in', 'result', 'correct');
      gameCompleted = true;
      guessHistory.push({ name: guessName, result: 'correct' });
      renderInlineGuessHistory();

      // Reveal all remaining hints when correct
      revealAllHints();

      // Update statistics for a win
      updateStats(true, tries);

      // Mark archive as won if in archive mode
      // console.log(`[DEBUG] Win - isArchiveMode: ${isArchiveMode}, window.markArchiveCompleted exists: ${typeof window.markArchiveCompleted !== 'undefined'}, doctordle ID: ${doctordle}`);
      if (isArchiveMode && window.markArchiveCompleted) {
        // console.log(`[DEBUG] Calling markArchiveCompleted(${doctordle}, true)`);
        window.markArchiveCompleted(doctordle, true);
      } else {
        // console.log(`[DEBUG] Not marking archive - isArchiveMode: ${isArchiveMode}, markArchiveCompleted: ${typeof window.markArchiveCompleted}`);
      }

      // console.log(`[DEBUG] About to call sendGuessToAnalytics for WIN`);
      // Send guess count to Google Analytics (skip for archive games)
      if (!isArchiveMode) sendGuessToAnalytics(tries, true);

      // Generate new share text format (only for non-archive games)
      const shareText = isArchiveMode ? null : generateShareText(true, tries);

      saveGameState();
      disableGameInput();
      showSummaryButton();

      const correctDisease = diseases.find(d => d.id == doctordle);
      const diseaseName = correctDisease ? correctDisease.name : "unknown";
      const winMessage = `<div style="padding: 0.75rem; background-color: #e6f3ff; border-radius: 8px; border: 2px solid #2196F3; margin-bottom: 1rem;">
      <strong>ðŸŽ‰ Correct! The drug was ${diseaseName}.</strong>
    </div>`;
      // Only show stats for daily games, not archives
      openModal(winMessage, shareText, true, tries, true);
    }
    else {
      // Wrong guess or blank entry
      // console.log(`[DEBUG] Wrong guess. Current guessNumber: ${guessNumber}`);

      if (guessNumber >= 6) {
        const tries = 6;
        // console.log(`[DEBUG] GAME OVER! Max guesses reached: ${tries}`);

        const correctDisease = diseases.find(d => d.id === doctordle);
        const name = correctDisease ? correctDisease.name : "unknown";
        // Generate new share text format for loss (only for non-archive games)
        const shareText = isArchiveMode ? null : generateShareText(false, tries);
        gameCompleted = true;
        guessHistory.push({ name: guessName, result: myGuessId ? 'wrong' : 'skip' });
        renderInlineGuessHistory();

        // Update statistics for a loss
        updateStats(false, tries);

        // Mark archive as lost if in archive mode
        // console.log(`[DEBUG] Loss - isArchiveMode: ${isArchiveMode}, window.markArchiveCompleted exists: ${typeof window.markArchiveCompleted !== 'undefined'}, doctordle ID: ${doctordle}`);
        if (isArchiveMode && window.markArchiveCompleted) {
          // console.log(`[DEBUG] Calling markArchiveCompleted(${doctordle}, false)`);
          window.markArchiveCompleted(doctordle, false);
        } else {
          // console.log(`[DEBUG] Not marking archive - isArchiveMode: ${isArchiveMode}, markArchiveCompleted: ${typeof window.markArchiveCompleted}`);
        }

        // console.log(`[DEBUG] About to call sendGuessToAnalytics for LOSS`);
        // Send guess count to Google Analytics (skip for archive games)
        if (!isArchiveMode) sendGuessToAnalytics(tries, false);

        saveGameState();
        disableGameInput();
        showSummaryButton();

        const lossMessage = `<div style="padding: 0.75rem; background-color: #fff3e0; border-radius: 8px; border: 2px solid #ff9800; margin-bottom: 1rem;">
        <strong>âŒ Game Over! The drug was ${name}.</strong>
      </div>`;
        // Only show stats for daily games, not archives
        openModal(lossMessage, shareText, true, tries, false);
      }
      else {
        // Show "Incorrect!" for actual disease guesses (not blank entries)
        if (inputValue !== "" && myGuessId) {
          resultEl.textContent = "Incorrect!";
          resultEl.classList.remove('result', 'incorrect');
          // Force reflow to restart animation
          void resultEl.offsetWidth;
          resultEl.classList.add('fade_in', 'result', 'incorrect');
        }
        // For blank entries, don't show any result message
      }

      function showHint(id, symptom) {
        const el = document.getElementById(id);
        el.textContent = symptom;
        el.classList.remove('flip_in');
        void el.offsetWidth;
        el.classList.add('flip_in', 'hints_shown');
      }

      // Show hints based on guess number
      if (guessNumber == 1) showHint('guess_two', symptoms[0]);
      if (guessNumber == 2) showHint('guess_three', symptoms[1]);
      if (guessNumber == 3) showHint('guess_four', symptoms[2]);
      if (guessNumber == 4) showHint('guess_five', symptoms[3]);
      if (guessNumber == 5) showHint('guess_six', symptoms[4]);

      guessHistory.push({ name: guessName, result: myGuessId ? 'wrong' : 'skip' });
      renderInlineGuessHistory();
      saveGameState();
    }

    // Clear the input and reset selectedDiseaseId for next guess
    input.value = "";
    selectedDiseaseId = null;
  }

  window.guessing = guessing;

  const input = document.getElementById('guess');
  const suggestions = document.getElementById('suggestions');

  // Set up input handlers (they'll be disabled if cookies not accepted)
  input.addEventListener('input', function () {
    if (!cookiesAccepted || gameCompleted) return;

    const query = this.value.toLowerCase();
    suggestions.innerHTML = '';

    if (!query) {
      suggestions.style.display = 'none';
      selectedDiseaseId = null;
      return;
    }

    const matches = diseases.filter(d => d.name.toLowerCase().includes(query));

    if (matches.length === 0) {
      suggestions.style.display = 'none';
      selectedDiseaseId = null;
      return;
    }

    matches.forEach(disease => {
      const div = document.createElement('div');
      div.classList.add('suggestion-item');

      const isAlreadyGuessed = guessedDiseases.includes(disease.id);

      if (isAlreadyGuessed) {
        div.style.color = '#999';
        div.style.cursor = 'not-allowed';
        div.textContent = disease.name + ' (already guessed)';

        // Prevent selection of already guessed diseases
        div.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
        });
      } else {
        div.textContent = disease.name;
        div.dataset.id = disease.id;

        div.addEventListener('click', () => {
          input.value = disease.name;
          selectedDiseaseId = disease.id;
          suggestions.innerHTML = '';
          suggestions.style.display = 'none';
        });
      }

      suggestions.appendChild(div);
    });

    suggestions.style.display = 'block';
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !suggestions.contains(e.target)) {
      suggestions.style.display = 'none';
    }
  });

  // Add Enter key support for guessing
  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      guessing();
    }
  });

  // Initialize the cookie system
  initializeCookieSystem();
});
