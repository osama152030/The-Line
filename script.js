document.addEventListener("DOMContentLoaded", function () {
  // ---------------- معرض الصور ----------------
  let slideIndex = 1;
  showSlides(slideIndex);

  window.plusSlides = function(n) {
    showSlides(slideIndex += n);
  }

  window.currentSlide = function(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    if (dots[slideIndex - 1]) dots[slideIndex - 1].classList.add("active");
    if (captionText && dots[slideIndex - 1]) captionText.innerHTML = dots[slideIndex - 1].alt;
  }

  // ---------------- قائمة الهامبرغر (إظهار وإخفاء القائمة) ----------------
  const menuIcon = document.querySelector(".topnav .icon");
  const nav = document.querySelector(".topnav nav");

  if (menuIcon && nav) {
    menuIcon.addEventListener("click", () => {
      if (nav.style.display === "flex") {
        nav.style.display = "none";
      } else {
        nav.style.display = "flex";
      }
    });
  }

  // ---------------- الوقت والتاريخ ----------------
  const dateTimeSpan = document.getElementById("datetime-value");
  if (dateTimeSpan) {
    const now = new Date();
    dateTimeSpan.textContent = now.toLocaleString();
  }

  // ---------------- التحقق من الاسم ----------------
  const nameInput = document.getElementById("nameInput");
  const nameMsg = document.getElementById("nameMsg");

  if (nameInput && nameMsg) {
    nameInput.addEventListener("input", () => {
      if (nameInput.value.length >= 3) {
        nameMsg.textContent = " الاسم صحيح";
        nameMsg.style.color = "green";
      } else {
        nameMsg.textContent = " يجب أن يحتوي الاسم على 3 أحرف على الأقل";
        nameMsg.style.color = "red";
      }
    });
  }

  // ---------------- إغلاق النافذة المنبثقة ----------------
  const closeBtn = document.getElementById("closePopup");
  const popup = document.getElementById("popup");

  if (closeBtn && popup) {
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }
});
