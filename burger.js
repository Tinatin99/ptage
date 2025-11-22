// const burger = document.querySelector('.burger');
// const burgerWrapper = document.querySelector('.burger-wrapper');

// burger.addEventListener('click', () => {
//   burgerWrapper.classList.toggle('open');
// });


const burgerWrapper = document.querySelector('#burger-wrapper');
const header = document.querySelector('#header-PTAGe');

if (burgerWrapper && header) {
  burgerWrapper.addEventListener('click', () => {
    
    burgerWrapper.classList.toggle('open');

   
    header.classList.toggle('header-open');
  });
}

// const burgerWrapper = document.querySelector('#burger-wrapper');
// const header = document.querySelector('#header-PTAGe');

// if (burgerWrapper && header) {
//   burgerWrapper.addEventListener('click', () => {
//     burgerWrapper.classList.toggle('open');
//     header.classList.toggle('header-open'); // ამაზეა მიბმული CSS-ში ul-ის გამოჩენა
//   });
// }


