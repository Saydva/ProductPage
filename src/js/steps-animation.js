document.addEventListener('DOMContentLoaded', () => {
  const section = document.getElementById('getting-started');
  if (!section) return;

  const isMobile = window.innerWidth <= 700;
  let hasAnimated = false;

  function triggerAnimation() {
    if (hasAnimated) return;
    section.classList.remove('animate-steps');
    setTimeout(() => {
      section.classList.add('animate-steps');
      hasAnimated = true;
    }, 50);
  }

  function checkIfInView() {
    if (isMobile) return; // na mobile animáciu nikdy nespúšťame
    const rect = section.getBoundingClientRect();
    const isVisible =
      rect.top < window.innerHeight * 0.8 &&
      rect.bottom > window.innerHeight * 0.2;
    if (isVisible) {
      triggerAnimation();
    }
  }

  function handleVisibilityCheck() {
    if (isMobile) return;
    if (window.location.hash === '#getting-started') {
      setTimeout(triggerAnimation, 800);
    } else {
      checkIfInView();
    }
  }

  if (!isMobile) {
    window.addEventListener('scroll', checkIfInView, { passive: true });
    window.addEventListener('hashchange', handleVisibilityCheck);
    handleVisibilityCheck();
  }
});
