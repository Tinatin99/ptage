

// foto  index.html
document.addEventListener("DOMContentLoaded", function () {

  const photos = document.querySelectorAll(".photos-container .photo");
  const btn = document.getElementById("showMorePhotos");

  if (!btn) {
    console.error("⚠ showMorePhotos ღილაკი ვერ მოიძებნა!");
    return;
  }

  const visibleCount = 5;

  // დამალვა
  photos.forEach((photo, index) => {
    if (index >= visibleCount) {
      photo.classList.add("hidden-photo");
    }
  });

  btn.addEventListener("click", function () {
    const expanded = btn.dataset.expanded === "true";

    if (!expanded) {
      photos.forEach(photo => photo.classList.remove("hidden-photo"));
      btn.textContent = "ნაკლების ნახვა";
      btn.dataset.expanded = "true";
    } else {
      photos.forEach((photo, index) => {
        if (index >= visibleCount) photo.classList.add("hidden-photo");
      });
      btn.textContent = "მეტის ნახვა";
      btn.dataset.expanded = "false";
      photos[0].scrollIntoView({ behavior: "smooth" });
    }
  });
});
console.log(btn);



