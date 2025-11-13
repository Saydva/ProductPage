document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.main-menu ul');
  const links = document.querySelectorAll('.main-menu ul a');

  if (!toggle || !menu) {
    console.warn('Menu elements not found');
    return;
  }

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
    });
  });
});
