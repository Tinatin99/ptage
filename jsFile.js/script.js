
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
