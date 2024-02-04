document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".gallery-slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startAutoSlide() {
        setInterval(nextSlide, 7000); // Change 3000 to the desired interval in milliseconds
    }

    showSlide(currentSlide);
    startAutoSlide();
});
