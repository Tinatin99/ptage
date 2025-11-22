
  const imgs = document.querySelectorAll('.PTAGe-img');
  const modal = document.getElementById('img-modal');
  const modalImg = document.getElementById('img-modal-big');
  const closeBtn = document.querySelector('.img-modal-close');
  const prevBtn = document.querySelector('.modal-prev');
  const nextBtn = document.querySelector('.modal-next');

  let currentIndex = 0;

  
  imgs.forEach((img, i) => {
    img.addEventListener('click', () => {
      modal.style.display = 'flex';
      currentIndex = i;
      modalImg.src = imgs[i].src;
    });
  });


  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });


  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    modalImg.src = imgs[currentIndex].src;
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imgs.length;
    modalImg.src = imgs[currentIndex].src;
  });

