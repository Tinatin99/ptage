const loginForm = document.querySelector("#loginForm");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const loginStatus = document.querySelector("#loginStatus");

// "მონაცემთა ბაზა" - უბრალო მასივი, სადაც ვეძებთ ელ.ფოსტას
const users = [
  { email: "physics.teacher@school.ge", name: "ფიზიკის მასწავლებელი", role: "Teacher" },
  { email: "student1@school.ge", name: "მასწავლებელი 1", role: "Student" },
  { email: "director@school.ge", name: "დირექტორი", role: "Admin" },
];

// ელფოსტის ელემენტარული regex
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // გავწმინდოთ წინანდელი შეტყობინებები
  emailError.textContent = "";
  passwordError.textContent = "";
  loginStatus.textContent = "";
  loginStatus.style.color = "";

  emailInput.classList.remove("input-error", "input-success");
  passwordInput.classList.remove("input-error", "input-success");

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  let hasError = false;

  // ელფოსტის ვალიდაცია
  if (!emailValue) {
    emailError.textContent = "გთხოვ, შეიყვანო ელ.ფოსტა";
    emailInput.classList.add("input-error");
    hasError = true;
  } else if (!isValidEmail(emailValue)) {
    emailError.textContent = "ელ.ფოსტა არასწორია";
    emailInput.classList.add("input-error");
    hasError = true;
  } else {
    emailInput.classList.add("input-success");
  }

  // პაროლის ვალიდაცია
  if (!passwordValue) {
    passwordError.textContent = "გთხოვ, შეიყვანო პაროლი";
    passwordInput.classList.add("input-error");
    hasError = true;
  } else if (passwordValue.length < 6) {
    passwordError.textContent = "პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს";
    passwordInput.classList.add("input-error");
    hasError = true;
  } else {
    passwordInput.classList.add("input-success");
  }

  // თუ ვალიდაცია ჩავარდა – ვჩერდებით
  if (hasError) return;

  // აქ უკვე "სერჩის" ნაწილი – ვეძებთ users მასივში
  const foundUser = users.find((user) =>
    user.email.toLowerCase() === emailValue.toLowerCase()
  );

  if (foundUser) {
    loginStatus.style.color = "green";
    loginStatus.innerHTML = `
      მოსწავლე ნაპოვნია სისტემაში 🎉<br>
      <strong>სახელი:</strong> ${foundUser.name}<br>
      <strong>როლი:</strong> ${foundUser.role}
    `;
  } else {
    loginStatus.style.color = "crimson";
    loginStatus.innerHTML = `
      ასეთი ელ.ფოსტით მომხმარებელი სისტემაში არ მოიძებნა 🔍<br>
      სცადე სხვა ელ.ფოსტა ან შექმენი ახალი ანგარიში.
    `;
  }
});
