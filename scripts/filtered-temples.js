// Set footer year and last modified date
document.addEventListener('DOMContentLoaded', () => {
  const footerYear = document.getElementById('footer-year');
  const lastModified = document.getElementById('last-modified');

  // Dynamic year
  footerYear.textContent = new Date().getFullYear();

  // Last modified date
  lastModified.textContent = document.lastModified;

  // Hamburger menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    // Change button to 'X' when menu is shown
    if (nav.classList.contains('show')) {
      menuToggle.textContent = '✖'; // 'X' symbol
    } else {
      menuToggle.textContent = '☰'; // Hamburger symbol
    }
  });

  // Optional: hide menu when clicking outside (for better UX)
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
      nav.classList.remove('show');
      menuToggle.textContent = '☰';
    }
  });
});