function fadeInOut() {
    const elems = document.querySelectorAll('.update-container');
  
    elems.forEach((elem) => {
      const elemTop = elem.getBoundingClientRect().top;
      const elemBottom = elem.getBoundingClientRect().bottom;
      const visibilityThreshold = window.innerHeight * 0.1;
  
      const fadeInOpacity = (visibilityThreshold - elemTop) / visibilityThreshold;
      const fadeOutOpacity = (elemBottom - visibilityThreshold) / visibilityThreshold;
  
      const opacity = Math.min(Math.max(fadeInOpacity, 0), Math.min(fadeOutOpacity, 1));
  
      elem.style.transition = 'opacity .5s ease';
      elem.style.opacity = opacity;
    });
  }
  
  function scrollFade() {
    window.addEventListener('scroll', fadeInOut);
  }
  
  document.addEventListener('DOMContentLoaded', scrollFade);
  