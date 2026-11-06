// Paste your published Google Forms URL between the quotes below.
// Leave empty until ready; Contact Me points to the coming-soon message.
const GOOGLE_FORM_URL = "";

const toggle = document.querySelector('.theme-toggle');
function updateThemeLabel() {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  toggle.setAttribute('aria-label', `Switch to ${next} mode`);
}
updateThemeLabel();
toggle.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('theme', theme); } catch {}
  updateThemeLabel();
});

// An empty or invalid URL keeps the safe, in-page placeholder link.
try {
  const url = new URL(GOOGLE_FORM_URL.trim());
  const valid = url.protocol === 'https:' && (
    (url.hostname === 'forms.gle' && url.pathname.length > 1) ||
    (url.hostname === 'docs.google.com' && url.pathname.startsWith('/forms/'))
  );
  if (valid) {
    const link = document.createElement('a');
    link.id = 'contact-button';
    link.className = 'button';
    link.textContent = 'Contact Me';
    link.href = url.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-describedby', 'contact-note');
    document.querySelector('#contact-button').replaceWith(link);
    document.querySelector('#contact-note').textContent = 'Opens Google Forms in a new tab.';
  }
} catch {}
