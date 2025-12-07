function toggleText(button) {
  const container = button.closest(".info-box");
  const hiddenText = container.querySelector(".hidden-text");

  hiddenText.classList.toggle("hidden");

  if (hiddenText.classList.contains("hidden")) {
    button.textContent = "მეტის ნახვა";
  } else {
    button.textContent = "ნაკლების ნახვა";
  }
}
