function toggleParagraph(btn) {
  const box = btn.closest(".toggle-text-container");
  if (!box) return;

  const isOpen = box.classList.toggle("open");
  btn.textContent = isOpen ? "დახურვა" : "ვრცლად";
}
