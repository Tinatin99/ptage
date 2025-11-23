// // // Burger menu toggle
// // const burger = document.getElementById("burger");
// // const navigation = document.getElementById("navigation");

// // if (burger && navigation) {
// //   burger.addEventListener("click", () => {
// //     burger.classList.toggle("open");
// //     navigation.classList.toggle("is-open");
// //   });
// // }


// const users = [
//   { id: 1, name: 'Tinatin', role: 'Teacher' },
//   { id: 2, name: 'Nika', role: 'Student' },
//   { id: 3, name: 'Giorgi', role: 'Admin' },
//   { id: 4, name: 'Nino', role: 'Lecturer' },
// ];


// const searchInput = document.querySelector('#search-input');
// const usersList = document.querySelector('#users-list');


// function renderUsers(list) {

//   usersList.innerHTML = '';

//   if (list.length === 0) {
//     usersList.innerHTML = '<p>მონაცემი არ მოიძებნა...</p>';
//     return;
//   }


//   list.forEach((user) => {
//     const div = document.createElement('div');
//     div.classList.add('user-item');
//     div.textContent = `${user.name} — ${user.role}`;
//     usersList.appendChild(div);
//   });
// }


// renderUsers(users);


// searchInput.addEventListener('input', () => {
//   const searchValue = searchInput.value.trim().toLowerCase();


//   const filtered = users.filter((user) =>
//     user.name.toLowerCase().includes(searchValue)
//   );


//   renderUsers(filtered);
// });

// script.js
import { localQuotes } from "./quotes.js";

const quoteContainer = document.getElementById("quote-container");

localQuotes.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("quote-card");

  card.innerHTML = `
    <p class="quote-text">"${item.text}"</p>
    <p class="quote-author">— ${item.author}</p>
  `;

  quoteContainer.appendChild(card);
});



// async/await.
const response = await fetch("https://randomuser.me/api/?results=6");
const data = await response.json();
renderUsers(data.results);
