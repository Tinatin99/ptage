document.addEventListener('DOMContentLoaded', () => {
  const burgerWrapper = document.querySelector('#burger-wrapper');
  const header = document.querySelector('#header-PTAGe');

  if (!burgerWrapper || !header) return;

  burgerWrapper.addEventListener('click', () => {
    burgerWrapper.classList.toggle('open');        // ბურგერის ანიმაცია
    header.classList.toggle('header-open');        // მენიუს ჩვენება
  });
});
