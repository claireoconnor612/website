/**
 * Antigravity Minimalist Portfolio - Interactive Scripts
 * Handles mobile hamburger navigation, accessibility, keyboard support
 */

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.site-nav');
  const siteHeader = document.querySelector('.site-header');

  if (toggleBtn && navMenu) {
    // Toggle Mobile Navigation Menu
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('is-open');

      // Update button icon/label for screen reader clarity
      if (!isExpanded) {
        toggleBtn.setAttribute('aria-label', 'Close menu');
        toggleBtn.innerHTML = '&#215;'; // Close symbol (×)
      } else {
        toggleBtn.setAttribute('aria-label', 'Open navigation menu');
        toggleBtn.innerHTML = '&#9776;'; // Hamburger symbol (☰)
      }
    });

    // Close Menu on Escape Key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.setAttribute('aria-label', 'Open navigation menu');
        toggleBtn.innerHTML = '&#9776;';
        toggleBtn.focus();
      }
    });

    // Close Menu when clicking outside header
    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('is-open') &&
        siteHeader &&
        !siteHeader.contains(e.target)
      ) {
        navMenu.classList.remove('is-open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.setAttribute('aria-label', 'Open navigation menu');
        toggleBtn.innerHTML = '&#9776;';
      }
    });
  }

  // Set dynamic copyright year in footer if container exists
  const copyrightYearEl = document.querySelector('.footer-year');
  if (copyrightYearEl) {
    copyrightYearEl.textContent = new Date().getFullYear();
  }
});
