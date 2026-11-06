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

// Keep native anchor semantics and direct links, but leave the URL unchanged
// when navigating within the page with an ordinary click or keyboard activation.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(link.getAttribute('href').slice(1));
    if (!target) return;
    event.preventDefault();
    const headerHeight = document.querySelector('header').getBoundingClientRect().height;
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerHeight - 20);
    const focusTarget = target.querySelector('h1, h2') || target;
    if (!focusTarget.hasAttribute('tabindex')) {
      focusTarget.setAttribute('tabindex', '-1');
      focusTarget.addEventListener('blur', () => focusTarget.removeAttribute('tabindex'), { once: true });
    }
    focusTarget.focus({ preventScroll: true });
    window.scrollTo({
      top,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    });
  });
});

const contactForm = document.querySelector('.contact-form');
const submitButton = contactForm.querySelector('button[type="submit"]');
const formStatus = contactForm.querySelector('.form-status');
let submitting = false;

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (submitting || !contactForm.reportValidity()) return;

  const body = new URLSearchParams(new FormData(contactForm)).toString();
  submitting = true;
  submitButton.disabled = true;
  submitButton.textContent = 'Sending…';
  contactForm.setAttribute('aria-busy', 'true');
  formStatus.textContent = 'Sending your message…';
  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    });
    if (!response.ok) throw new Error('Submission failed');
    formStatus.textContent = 'Thank you! Your message has been sent.';
    contactForm.reset();
  } catch {
    formStatus.textContent = 'Your message could not be confirmed. Your entries are still here. Please try again, or email contact@popekwebservices.com.';
  } finally {
    submitting = false;
    submitButton.disabled = false;
    submitButton.textContent = 'Send Message';
    contactForm.removeAttribute('aria-busy');
  }
});
