// Highlight the active navigation tab
document.addEventListener('DOMContentLoaded', function () {
  // Get the current page URL
  const currentPage = window.location.pathname;

  // Find all navigation links
  const navLinks = document.querySelectorAll('.nav-links a');

  // Loop through the links and highlight the active one
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (currentPage.includes(linkHref)) {
      link.classList.add('active');
    }
  });
});

// Add 'active' class styling for the highlighted tab
// Ensure your styles.css file includes this CSS rule:
// .nav-links a.active {
//   background-color: #b3e6ff;
//   color: #00334d;
//   font-weight: bold;
// }