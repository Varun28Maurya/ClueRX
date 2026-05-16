(function () {
  const storageKey = 'cluerx-theme';
  const root = document.documentElement;

  function getSavedTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      // Theme still works for this page even if storage is unavailable.
    }
  }

  function getPreferredTheme() {
    const savedTheme = getSavedTheme();
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function updateToggle(theme) {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    const isDark = theme === 'dark';
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    toggle.querySelector('.theme-toggle-icon').textContent = isDark ? '\u2600' : '\u263e';
    toggle.querySelector('.theme-toggle-text').textContent = isDark ? 'Light' : 'Dark';
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    updateToggle(theme);
  }

  applyTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('theme-toggle');
    updateToggle(root.dataset.theme || getPreferredTheme());

    if (!toggle) return;

    toggle.addEventListener('click', function () {
      const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      saveTheme(nextTheme);
    });
  });
})();
