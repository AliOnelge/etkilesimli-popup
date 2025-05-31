document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close");
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMessage");
  const dontShowAgain = document.getElementById("dontShowAgain");

  if (localStorage.getItem("hidePopup") !== "true") {
    popup.style.display = "flex";
    successMsg.classList.add("hidden"); 
  }

  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
      if (dontShowAgain.checked) {
        localStorage.setItem("hidePopup", "true");
      }
    }
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    if (dontShowAgain.checked) {
      localStorage.setItem("hidePopup", "true");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    successMsg.classList.remove("hidden");

     setTimeout(() => {
    successMsg.classList.add("hidden");
  }, 3000);

     console.log("Form verisi e-posta ile gönderiliyor:", {
    ad: document.getElementById("name").value,
    telefon: document.getElementById("phone").value,
  });

    if (dontShowAgain.checked) {
      localStorage.setItem("hidePopup", "true");

      setTimeout(() => {
        popup.style.display = "none";
      }, 1500);
    }

    form.reset();
  });
});
