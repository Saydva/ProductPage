document.addEventListener('DOMContentLoaded', () => {
  const section = document.getElementById('getting-started');

  // Error handling
  if (!section) {
    console.warn('Getting started section not found');
    return;
  }

  let isAnimating = false;

  function triggerAnimation() {
    if (isAnimating) return;

    isAnimating = true;

    // Odstráňme starú animáciu
    section.classList.remove('animate-steps');

    // Restart animácie po krátkom oneskorení
    setTimeout(() => {
      section.classList.add('animate-steps');

      // Reset flag po dokončení animácie
      setTimeout(() => {
        isAnimating = false;
      }, 1000); // Čas trvania animácie
    }, 50);
  }

  function checkIfInView() {
    const rect = section.getBoundingClientRect();
    const isVisible =
      rect.top < window.innerHeight * 0.8 &&
      rect.bottom > window.innerHeight * 0.2;

    if (isVisible) {
      triggerAnimation();
    }
  }

  // Single event listener for both scroll and hash change
  function handleVisibilityCheck() {
    // Check if navigated directly to section
    if (window.location.hash === '#getting-started') {
      setTimeout(triggerAnimation, 800); // Krátke oneskorenie pre smooth scroll
    } else {
      checkIfInView();
    }
  }

  // Event listeners
  window.addEventListener('scroll', checkIfInView, { passive: true });
  window.addEventListener('hashchange', handleVisibilityCheck);

  // Initial check
  handleVisibilityCheck();
});
