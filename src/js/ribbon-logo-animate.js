document.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('ribbon-logo');
  if (!logo) return;
  const spans = logo.querySelectorAll('span');

  function animateLogo() {
    logo.classList.remove('animated');
    spans.forEach((span) => {
      span.style.transitionDelay = '';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px) scaleX(0.7)';
    });

    setTimeout(() => {
      logo.classList.add('animated');
      spans.forEach((span, i) => {
        span.style.transitionDelay = `${i * 0.12}s`;
        span.style.opacity = '';
        span.style.transform = '';
      });
    }, 100);
  }

  // animácia po načítaní
  animateLogo();

  // animácia po kliknutí na logo
  logo.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = logo.getAttribute('href'); // najprv presmeruje

    // animácia loga
    setTimeout(() => {
      animateLogo();
    }, 100);

    // animácia nadpisu Ribbon v hero sekcii (oneskorenie 700 ms)
    const heroTitle = document.querySelector('.ribbon-title');
    if (heroTitle) {
      const titleSpans = heroTitle.querySelectorAll('span');
      heroTitle.classList.remove('animated');
      titleSpans.forEach((span) => {
        span.style.transitionDelay = '';
      });
      setTimeout(() => {
        heroTitle.classList.add('animated');
        titleSpans.forEach((span, i) => {
          span.style.transitionDelay = `${i * 0.12}s`;
        });
      }, 700); // väčšie oneskorenie
    }
  });
});
