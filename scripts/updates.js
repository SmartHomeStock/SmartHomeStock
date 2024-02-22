function fadeInOut() {
  const elems = document.querySelectorAll('.update-container');

  elems.forEach((elem) => {
      const elemHeight = elem.offsetHeight; // Height of the current element
      const elemTop = elem.getBoundingClientRect().top;
      const elemBottom = elemTop + elemHeight;
      const visibilityThreshold = elemHeight *0.4;

      // Calculate opacity based on distance from top and bottom thresholds
      let opacity;
      if (elemTop < visibilityThreshold && elemBottom > visibilityThreshold) {
          // Inside the visibility range, set full opacity
          opacity = 1;
      } else {
          // Calculate fading opacity for both top and bottom thresholds
          const fadeInOpacity = 1 - Math.max((visibilityThreshold - elemTop) / visibilityThreshold, 0);
          const fadeOutOpacity = 1 - Math.max((elemBottom - visibilityThreshold) / visibilityThreshold, 0);

          // Use the minimum of the two opacities to create a fade-out effect at the top
          opacity = Math.min(fadeInOpacity, fadeOutOpacity);
      }

      elem.style.transition = 'opacity .4s ease';
      elem.style.opacity = opacity;
  });
}

function scrollFade() {
  window.addEventListener('scroll', fadeInOut);
}

document.addEventListener('DOMContentLoaded', scrollFade);
