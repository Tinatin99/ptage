document.addEventListener("DOMContentLoaded", () => {
  // ==== LOGIN ვალიდაცია ====
  const loginForm = document.querySelector('#loginForm');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const emailError = document.querySelector('#emailError');
  const passwordError = document.querySelector('#passwordError');
  const loginStatus = document.querySelector('#loginStatus');

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  if (loginForm) {
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

   
      // loginForm.reset();
    });
  }

  // ==== SEARCH / FILTER ბარათებზე ====
  const data = [
    { id: 1, name: "თინათინ დავითაძე", role: "მასწავლებელი" },
    { id: 2, name: "ნია", role: "მოსწავლე" },
    { id: 3, name: "იოანა", role: "მოსწავლე" },
    { id: 4, name: "ლუკა", role: "მოსწავლე" },
    { id: 5, name: "ელენე", role: "მოსწავლე" },
    { id: 6, name: "საბა", role: "მოსწავლე" },
    { id: 7, name: "ალექსი", role: "მოსწავლე" },
    { id: 8, name: "ნიკოლასი", role: "მოსწავლე" },
    { id: 9, name: "თომა", role: "მოსწავლე" },
    { id: 10, name: "ლუკა", role: "მოსწავლე" },
    { id: 11, name: "ბარბარე", role: "მოსწავლე" },
    { id: 12, name: "გიგი", role: "მოსწავლე" },
    { id: 13, name: "თეკლა", role: "მოსწავლე" },
    { id: 14, name: "ნიკოლოზი", role: "მოსწავლე" },
    { id: 15, name: "დემეტრე", role: "მოსწავლე" },
  ];

  const cardsContainer = document.querySelector("#cardsContainer");
  const searchInput = document.querySelector("#searchInput");

  // თუ ეს ბლოკი კონკრეტულ გვერდზე არ არის, ერორს არ ისვრის
  if (cardsContainer && searchInput) {
    function renderCards(list) {
      cardsContainer.innerHTML = "";

      if (list.length === 0) {
        cardsContainer.innerHTML = `
          <div class="no-results">
            შესაბამისი შედეგი არ მოიძებნა... 🙈
          </div>
        `;
        return;
      }

      list.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("user-card");

        // პატარა დაყოვნებული ანიმაცია
        card.style.animationDelay = `${index * 0.05}s`;

        card.innerHTML = `
          <h3>${item.name}</h3>
          <p>${item.role}</p>
        `;

        // სურვილისამებრ: click-ზე active სტილი
        card.addEventListener("click", () => {
          card.classList.toggle("active-card");
        });

        cardsContainer.appendChild(card);
      });
    }

    // საწყისი გამოტანა
    renderCards(data);

    // live search
    searchInput.addEventListener("input", function () {
      const value = searchInput.value.toLowerCase().trim();

      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(value) ||
        item.role.toLowerCase().includes(value)
      );

      renderCards(filtered);
    });
  }
});
