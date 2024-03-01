document.addEventListener("DOMContentLoaded", function () {
<<<<<<< HEAD
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
    updateRadioButtons();
  }

  function startAutoSlide() {
    setInterval(nextSlide, 7000); // Change 7000 to the desired interval in milliseconds
  }

  function manualSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
    updateRadioButtons();
  }

  function updateRadioButtons() {
    const radioButtons = document.querySelectorAll('input[name="slide-radio"]');
    radioButtons.forEach((radio, index) => {
      radio.checked = index === currentSlide;
    });
  }

  showSlide(currentSlide);
  startAutoSlide();

  const radioButtons = document.querySelectorAll('input[name="slide-radio"]');

  // Add event listener to each radio button
  radioButtons.forEach((radio, index) => {
    radio.addEventListener("change", () => {
      manualSlide(index);
    });
  });
=======
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
>>>>>>> f05452b9244783e81c5afeb27e1bc57a5815435e
});
