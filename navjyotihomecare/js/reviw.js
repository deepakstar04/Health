
  const testimonials = [
    {
      testimonialText:
        "Navjyoti Home Care provided excellent services for my elderly mother. The staff was attentive, kind, and professional. Highly recommend!",
      testimonialStar: 5,
      testimonialAuthor: "– Rajesh Kumar",
    },
    {
      testimonialText:
        "The caregiver assigned to my father was incredibly caring. The experience has been fantastic, and I’m so grateful for their support.",
      testimonialStar: 4,
      testimonialAuthor: "– Priya Sharma",
    },
    {
      testimonialText:
        "I’m extremely satisfied with Navjyoti Home Care's services. The care provided was exceptional, and my mom feels much more comfortable.",
      testimonialStar: 5,
      testimonialAuthor: "– Anil Verma",
    },
  ];

  let currentIndex = 0;

  const textEl = document.getElementById("testimonialText");
  const authorEl = document.getElementById("testimonialAuthor");
  const starEl = document.getElementById("testimonialStar");
  const boxEl = document.getElementById("testimonialBox");

  function renderTestimonial(index) {
    boxEl.style.opacity = 1;
    boxEl.style.transform = "translateY(10px)";

    setTimeout(() => {
      textEl.textContent = testimonials[index].testimonialText;
      authorEl.textContent = testimonials[index].testimonialAuthor;
      starEl.innerHTML = "★".repeat(testimonials[index].testimonialStar || 0) +
        "☆".repeat(5 - (testimonials[index].testimonialStar || 0));

      boxEl.style.opacity = 1;
      boxEl.style.transform = "translateY(0)";
    }, 300);
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    renderTestimonial(currentIndex);
  }

  function prevSlide() {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    renderTestimonial(currentIndex);
  }

  document.getElementById("nextBtn").addEventListener("click", nextSlide);
  document.getElementById("prevBtn").addEventListener("click", prevSlide);

  // Auto Slide
  setInterval(nextSlide, 5000);

  // Initial Load
  renderTestimonial(currentIndex);    

  