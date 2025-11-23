document.addEventListener("DOMContentLoaded", function () {
  const loadBtn = document.getElementById("loadUsersBtn");
  const usersGrid = document.getElementById("usersGrid");
  const spinner = document.getElementById("apiSpinner");
  const errorBox = document.getElementById("apiError");

  if (!loadBtn) return; // თუ ეს გვერდი არ არის, არაფერს ვაკეთებთ

  // მთავარი ფუნქცია – API-დან მომხამრებლების წამოღება
  async function fetchUsers() {
    // reset error
    errorBox.textContent = "";
    errorBox.classList.add("hidden");

    // ვაჩვენებთ spinner-ს
    spinner.classList.remove("hidden");
    usersGrid.innerHTML = "";

    try {
      const response = await fetch(
        "https://randomuser.me/api/?results=6&nat=us,gb,de,fr"
      );

      if (!response.ok) {
        throw new Error("სერვერის შეცდომა: " + response.status);
      }

      const data = await response.json();
      renderUsers(data.results);
    } catch (err) {
      errorBox.textContent =
        "მონაცემების ჩატვირთვა ვერ მოხერხდა. სცადე მოგვიანებით. (" +
        err.message +
        ")";
      errorBox.classList.remove("hidden");
    } finally {
      // spinner ყოველთვის ქრება
      spinner.classList.add("hidden");
    }
  }

  // UI-ში ბარათების გამოჩენა
  function renderUsers(users) {
    if (!users || users.length === 0) {
      usersGrid.innerHTML = "<p>მონაცემები ვერ მოიძებნა.</p>";
      return;
    }

    const html = users
      .map((user) => {
        const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
        const country = user.location.country;
        const email = user.email;
        const picture = user.picture.large;

        return `
          <article class="user-card">
            <img src="${picture}" alt="${fullName}" class="user-avatar" />
            <div class="user-info">
              <h3>${fullName}</h3>
              <p class="user-country">${country}</p>
              <p class="user-email">${email}</p>
            </div>
          </article>
        `;
      })
      .join("");

    usersGrid.innerHTML = html;
  }

  // ღილაკზე დაჭერა
  loadBtn.addEventListener("click", fetchUsers);

  // სურვილისამებრ – პირველივე ჩატვირთვისას ავტომატურად
  // fetchUsers();
});
