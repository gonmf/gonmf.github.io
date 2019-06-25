document.getElementById('no-js-toggle').remove();
const root = document.documentElement;
const saved = sessionStorage.getItem('theme');
const osPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
root.setAttribute('data-theme', saved || (osPrefersDark ? 'dark' : 'light'));

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle');
  btn.setAttribute('aria-pressed', root.getAttribute('data-theme') === 'dark' ? 'true' : 'false');

  btn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    sessionStorage.setItem('theme', next);
    btn.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
  });
});
