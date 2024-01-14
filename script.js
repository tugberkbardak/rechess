document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });


  function zoomHeaderContent(isHovered) {
    var headerContent = document.querySelector('.header-content');

    if (isHovered) {
      headerContent.style.transform = 'translate(-50%, -50%) scale(1.1)';
      headerContent.style.backgroundSize = '110% auto';
    } else {
      headerContent.style.transform = 'translate(-50%, -50%) scale(1)';
      headerContent.style.backgroundSize = 'cover';
    }
  }
  

  // BUTTON

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide scroll-to-top button based on scroll position
window.onscroll = function() {
  var button = document.getElementById("scrollToTop");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.classList.add("show");
  } else {
      button.classList.remove("show");
  }
};


