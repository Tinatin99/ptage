document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".photos2");
  if (!wrapper) return;

  const photos2 = wrapper.querySelectorAll(".photo2");
  const btn2 = wrapper.querySelector(".showMorePhotos2"); // აქაა მთავარი ცვლილება!

  console.log("Photos2 რაოდენობა:", photos2.length);
  console.log("Photos2 ღილაკი:", btn2);

  if (!btn2) {
    console.error("⚠ showMorePhotos2 ღილაკი ვერ მოიძებნა!");
    return;
  }

  const visibleCount2 = 5; // რამდენი ფოტო ჩანდეს თავიდან

  // თავიდან – ვამალავთ მე-5 ფოტოზე მერიდან
  photos2.forEach((photo, index) => {
    if (index >= visibleCount2) {
      photo.classList.add("hidden-photo2");
    }
  });

  btn2.dataset.expanded = "false";

  btn2.addEventListener("click", function () {
    const expanded = btn2.dataset.expanded === "true";

    if (!expanded) {
      // მეტის ნახვა
      photos2.forEach(photo => photo.classList.remove("hidden-photo2"));
      btn2.textContent = "ნაკლების ნახვა";
      btn2.dataset.expanded = "true";
    } else {
      // ნაკლების ნახვა
      photos2.forEach((photo, index) => {
        if (index >= visibleCount2) {
          photo.classList.add("hidden-photo2");
        }
      });
      btn2.textContent = "მეტის ნახვა";
      btn2.dataset.expanded = "false";

      if (photos2[0]) {
        photos2[0].scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});
