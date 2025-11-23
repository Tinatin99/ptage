document.addEventListener("DOMContentLoaded", function () {
    const accordionTitles = document.querySelectorAll(".accordion-title");

    accordionTitles.forEach(title => {
        title.addEventListener("click", function () {
            const container = this.parentElement;
            const description = container.querySelector(".accordion-description");

            // toggle active class
            container.classList.toggle("active");

            
            if (container.classList.contains("active")) {
                description.style.height = description.scrollHeight + "px";
            } else {
                description.style.height = "0";
            }
        });
    });
});


  const button = document.getElementById("toggle-button");
  const moreSection = document.getElementById("bio-more");

  button.addEventListener("click", () => {
    moreSection.classList.toggle("hidden");
    if (moreSection.classList.contains("hidden")) {
      button.textContent = "მეტის ნახვა";
    } else {
      button.textContent = "ნაკლები";
    }
  });



  
  
















// quete.js

import { localQuotes } from "./quotes.js";

const featuredText = document.getElementById("featured-text");
const featuredAuthor = document.getElementById("featured-author");
const featuredCounter = document.getElementById("featured-counter");
const featuredWrapper = document.getElementById("featured-quote");
const nextBtn = document.getElementById("next-btn");
const quotesGrid = document.getElementById("quotes-grid");

let currentIndex = 0;

// Featured quote slider
function setFeaturedQuote(index) {
  const quote = localQuotes[index];

  // დელიკატური fade ანიმაცია
  featuredWrapper.classList.remove("fade");
  void featuredWrapper.offsetWidth; // reflow ტრუკი
  featuredWrapper.classList.add("fade");

  featuredText.textContent = `"${quote.text}"`;
  featuredAuthor.textContent = `— ${quote.author}`;
  featuredCounter.textContent = `ციტატა ${index + 1} / ${localQuotes.length}`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % localQuotes.length;
  setFeaturedQuote(currentIndex);
});

// პირველ ციკლზე ჩატვირთვა
setFeaturedQuote(currentIndex);

// GRID ბარათების ჩასმა 3D flip-ით
function createQuoteCards() {
  localQuotes.forEach((quote, index) => {
    const card = document.createElement("div");
    card.classList.add("quote-card");

    const inner = document.createElement("div");
    inner.classList.add("card-inner");

    // FRONT – მოკლე ტექსტი
    const front = document.createElement("div");
    front.classList.add("card-face", "card-front");
    front.innerHTML = `
      <div class="card-tag">Quote #${index + 1}</div>
      <div class="card-quote-text">"${quote.text}"</div>
      <div class="card-quote-author">— ${quote.author}</div>
    `;

    // BACK – ავტორი & „ორბიტა“
    const back = document.createElement("div");
    back.classList.add("card-face", "card-back");
    back.innerHTML = `
      <div class="card-tag">Physicist</div>
      <div class="card-quote-author">— ${quote.author}</div>
      <div class="card-orbit">Orbiting through ideas, bending space, time and imagination.</div>
    `;

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    quotesGrid.appendChild(card);

    // კლიკზე ასევე გადართვა (მხოლოდ hover-ზე არა)
    card.addEventListener("click", () => {
      // flip კუთხის ხელით შეცვლა (დამატებით hover-ს მიღმა)
      if (inner.style.transform && inner.style.transform.includes("rotateY(180deg)")) {
        inner.style.transform = "";
      } else {
        inner.style.transform = "rotateY(180deg) translateY(-4px)";
      }
    });
  });
}

createQuoteCards();

  