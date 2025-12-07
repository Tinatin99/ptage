function toggleParagraph(btn) {
  const text = btn.previousElementSibling;

  text.classList.toggle("expanded");

  btn.textContent = text.classList.contains("expanded")
    ? "ნაკლები"
    : "ვრცლად";
}



