// DROPDOWN მენიუ "საგანმანათლებლო რესურსები"
const resourcesDropdown = document.getElementById('resourcesDropdown');

if (resourcesDropdown) {
  const toggleBtn = resourcesDropdown.querySelector('.dropdown-toggle');

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // რომ body-ზე click-მა არ დახუროს მაშინვე
    resourcesDropdown.classList.toggle('open');
  });

  // გარეთ რომ დააკლიკო — dropdown დაიხუროს
  document.addEventListener('click', (e) => {
    if (!resourcesDropdown.contains(e.target)) {
      resourcesDropdown.classList.remove('open');
    }
  });
}
