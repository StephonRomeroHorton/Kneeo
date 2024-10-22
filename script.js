const navbar = document.getElementById('navbar');

document.getElementById('mobile-menu').addEventListener('click', function() {
  const dropdown = document.querySelector('.dropdown');
  dropdown.classList.toggle('open');
  
  if (dropdown.classList.contains('open')) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
  } else {
      // Enable scrolling
      document.body.style.overflow = 'auto';
  }
});

// JavaScript to close the menu when a link is clicked
document.querySelectorAll('.dropdown-navbar-menu li a').forEach(link => {
  link.addEventListener('click', function() {
      // Remove the 'open' class from the dropdown
      document.querySelector('.dropdown').classList.remove('open');
      // Enable scrolling again
      document.body.style.overflow = 'auto';
  });
});

// JavaScript to ensure scrolling is enabled on larger viewports
window.addEventListener('resize', function() {
  if (window.innerWidth > 992) {
      // Enable scrolling when viewport is larger than 992px
      document.body.style.overflow = 'auto';
      // Ensure dropdown menu is closed on larger viewports
      const dropdown = document.querySelector('.dropdown');
      dropdown.classList.remove('open');
  }
});
