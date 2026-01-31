document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.querySelector('#loginForm');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const emailError = document.querySelector('#emailError');
  const passwordError = document.querySelector('#passwordError');
  const loginStatus = document.querySelector('#loginStatus');

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset messages
    emailError.textContent = '';
    passwordError.textContent = '';
    loginStatus.textContent = '';

    let valid = true;

    if (!email.value.trim()) {
      emailError.textContent = "შეიყვანე ელ-ფოსტა";
      valid = false;
    } else if (!isValidEmail(email.value.trim())) {
      emailError.textContent = "ელ-ფოსტა არასწორია";
      valid = false;
    }

    if (!password.value.trim()) {
      passwordError.textContent = "შეიყვანე პაროლი";
      valid = false;
    } else if (password.value.trim().length < 6) {
      passwordError.textContent = "მინიმუმ 6 სიმბოლო";
      valid = false;
    }

    if (!valid) return;

    loginStatus.textContent = "შესვლა წარმატებით შესრულდა ✔️";
    loginStatus.style.color = "green";

    // optional: form reset
    // loginForm.reset();
  });
});





// leqtorebis siamdeba



const lecturers = [
  { id: 1, name: 'Tinatin Davitadze', subject: 'Physics' },
  { id: 2, name: 'Nika Giorgadze', subject: 'STEM' },
  { id: 3, name: 'Ia Avaliani', subject: 'Math & Physics' },
  { id: 4, name: 'Lasha Beridze', subject: 'Robotics' },
];

const searchInput = document.querySelector('#searchInput');
const lecturersContainer = document.querySelector('#lecturersContainer');


function renderLecturers(list) {

  lecturersContainer.innerHTML = '';

  if (list.length === 0) {
    lecturersContainer.innerHTML = '<p>შესაბამისი შედეგი არ მოიძებნა...</p>';
    return;
  }

  list.forEach((lecturer) => {
    const card = document.createElement('div');
    card.classList.add('lecturer-card');
    card.innerHTML = `
      <h3>${lecturer.name}</h3>
      <p>საგანი: ${lecturer.subject}</p>
    `;
    lecturersContainer.appendChild(card);
  });
}


renderLecturers(lecturers);
searchInput.addEventListener('input', () => {
  const value = searchInput.value.trim().toLowerCase();

  const filtered = lecturers.filter((lecturer) =>
    lecturer.name.toLowerCase().includes(value)
  );
  renderLecturers(filtered);
});
