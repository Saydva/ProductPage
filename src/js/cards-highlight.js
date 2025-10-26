document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('ul.highlight-animate').forEach((ul) => {
    const items = ul.querySelectorAll('li');
    if (items.length === 0) return;

    const intervalId = setInterval(() => {
      items.forEach((li) => li.classList.remove('active'));
      const randomIndex = Math.floor(Math.random() * items.length);
      items[randomIndex].classList.add('active');
    }, 2000);

    window.addEventListener('beforeunload', () => {
      clearInterval(intervalId);
    });
  });
});
