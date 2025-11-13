document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.ribbon-title');

  if (!heroTitle) return;

  const letters = heroTitle.querySelectorAll('span');

  if (letters.length === 0) return;

  // Ensure parent has 'animated' class so CSS shows spans
  heroTitle.classList.add('animated');

  // Animate letters on load
  letters.forEach((letter, index) => {
    setTimeout(
      () => {
        letter.classList.add('animate');
      },
      index * 100 + 500,
    );
  });
});
