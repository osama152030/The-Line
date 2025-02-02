document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelector(".gallery-slides");
    const totalSlides = document.querySelectorAll(".gallery-slides img").length;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function moveSlide(direction) {
        showSlide(currentIndex + direction);
    }

    // تغغير الصورة كل خمس دقايق
    setInterval(() => {
        moveSlide(1);
    }, 5000);
});