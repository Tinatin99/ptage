  const scrollTopBtn = document.querySelector('#scrollTopBtn');


window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});


// კონფ-განცხადება

function toggleText(btn) {
  const hiddenText = btn.previousElementSibling;
  const isHidden = hiddenText.classList.contains("hidden");

  hiddenText.classList.toggle("hidden", !isHidden);
  btn.textContent = isHidden ? "ნაკლების ნახვა" : "მეტის ნახვა";
}