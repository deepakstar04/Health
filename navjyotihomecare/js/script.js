

// Testimonial slider functionality
let currentIndex = 0;

function moveSlide(direction) {
  const testimonials = document.querySelector(".testimonials");
  const totalSlides = document.querySelectorAll(".testimonial").length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100; // Move the slider by 100% per slide
  testimonials.style.transform = `translateX(${offset}%)`;
}

// Background image slider using JS object
const hero = document.querySelector(".hero");

const bgSlider = {
  images: [
    "https://www.shutterstock.com/image-photo/asian-senior-elderly-man-patient-doing-2209198355",
    "https://www.shutterstock.com/image-photo/care-worker-serving-dinner-elderly-woman-1768875746",
    "https://www.shutterstock.com/image-photo/nurse-doctor-busy-setting-bp-blood-1871752315",
  ],
  index: 0,
  changeBackground() {
    hero.style.backgroundImage = `url(${this.images[this.index]})`;
    this.index = (this.index + 1) % this.images.length;
  },
  start() {
    this.changeBackground();
    setInterval(() => this.changeBackground(), 5000);
  },
};

bgSlider.start();
