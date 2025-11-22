  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".founder-card");

    cards.forEach((card) => {
      const btn = card.querySelector(".toggle-btn");

      btn.addEventListener("click", () => {
        const isOpen = card.classList.toggle("open");
        btn.textContent = isOpen ? "დახურვა" : "ვრცლად";
      });
    });
  });





