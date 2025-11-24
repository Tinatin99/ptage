// აკორდეონი
 document.addEventListener("DOMContentLoaded", function () {
      const accordionTitles = document.querySelectorAll(".accordion-title");

      accordionTitles.forEach((title) => {
        title.addEventListener("click", function () {
          const container = this.parentElement;
          const description = container.querySelector(".accordion-description");

          // თუ უკვე ღიაა, დავხუროთ
          const isActive = container.classList.contains("active");

          // თუ გინდა, რომ ერთდროულად მხოლოდ ერთი ბლოკი იყოს ღია:
          document.querySelectorAll(".accordion-container").forEach((item) => {
            item.classList.remove("active");
            const desc = item.querySelector(".accordion-description");
            if (desc) {
              desc.style.height = "0";
            }
          });

          // თუ აქამდე დახურული იყო – ახლა გავხსნათ
          if (!isActive) {
            container.classList.add("active");
            description.style.height = description.scrollHeight + "px";
          }
        });
      });

      // "მეტის ნახვა" ბლოკი – ნულოვან ზიანზე 🙂
      const button = document.getElementById("toggle-button");
      const moreSection = document.getElementById("bio-more");

      if (button && moreSection) {
        button.addEventListener("click", () => {
          moreSection.classList.toggle("hidden");
          button.textContent = moreSection.classList.contains("hidden")
            ? "მეტის ნახვა"
            : "ნაკლები";
        });
      }
    });