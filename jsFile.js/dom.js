document.addEventListener("DOMContentLoaded", function () {
  initPhysicistsQuotesSection();
});

function initPhysicistsQuotesSection() {
  const section = document.querySelector("#physicists-quotes");
  if (!section) return; // თუ ამ გვერდზე ეს სექცია არაა, უბრალოდ გავიდეს

  const filterButtons = section.querySelectorAll(".phys-filter-btn");
  const cards = section.querySelectorAll(".phys-card");

  if (!filterButtons.length || !cards.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      // aria-pressed მდგომარეობის განახლება
      filterButtons.forEach((b) => {
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });

      // ბარათების ფილტრაცია – DOM მანიპულაცია
      cards.forEach((card) => {
        const isNobel = card.dataset.nobel === "true";
        const show = filter === "all" || (filter === "nobel" && isNobel);
        card.style.display = show ? "" : "none";
      });
    });
  });
}
