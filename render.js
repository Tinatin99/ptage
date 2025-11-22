let data = [
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

const cardsContainer = document.getElementById("cardsContainer");
const searchInput = document.getElementById("searchInput");

function renderCards(list) {
  cardsContainer.innerHTML = "";
  list.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("user-card");
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.role}</p>
    `;
    cardsContainer.appendChild(card);
  });
}

renderCards(data);

searchInput.addEventListener("input", function () {
  const value = searchInput.value.toLowerCase().trim();

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(value)
  );

  renderCards(filtered);
});
