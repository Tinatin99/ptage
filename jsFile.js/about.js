document.addEventListener("DOMContentLoaded", function () {
  const grid = document.querySelector(".founders-grid");

  grid.addEventListener("click", function (e) {
    const btn = e.target.closest(".toggle-btn");
    if (!btn) return;

    const card = btn.closest(".founder-card");
    if (!card) return;

    // 🔥 მხოლოდ ამ ბარათს გადართავს
    const isOpen = card.classList.toggle("open");

    btn.textContent = isOpen ? "დახურვა" : "ვრცლად";
  });
});
