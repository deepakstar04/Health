  const services = [
    {
      title: "Skilled Nursing",
      image: "https://media.istockphoto.com/id/1313904621/photo/portrait-of-an-african-young-nurse-helping-old-elderly-disable-man-grandfather-to-walk-using.jpg?s=612x612&w=0&k=20&c=ftJordYyY9YELIZcPYoAquP_pRilpvh5gOP2zHKrcTU=",
      description: "Professional nursing care at home for recovery and chronic condition management.",
      link: "skilled-nursing.html"
    },
    {
      title: "Physical Therapy",
      image: "https://media.gettyimages.com/id/1147930007/photo/whatever-your-age-its-important-to-workout.jpg?s=612x612&w=0&k=20&c=bk0r_5NWtpXZo7AqTO1jw83LhWTnTDgY73AuRsx-kqA=",
      description: "Rehabilitation and mobility improvement sessions from licensed therapists.",
      link: "physical-therapy.html"
    },
    {
      title: "Personal Care Assistance",
      image: "https://media.gettyimages.com/id/1284076408/photo/visiting-nurse.jpg?s=612x612&w=0&k=20&c=ArPZTbC1uQJ5zMt8IJoeb0eYxiM4f8gEjTX0MuL9edE=",
      description: "Help with daily living activities such as bathing, dressing, and meal preparation.",
      link: "personal-care.html"
    },
    {
      title: "Elderly Care",
      image: "https://qualitynursingservices.in/images/home-patient-care.jpg",
      description: "Comprehensive care plans tailored to the unique needs of elderly patients.",
      link: "Elderly-care.html"
    },
    {
      title: "Post‑Surgery / Post‑Discharge Care",
      image: "https://qualitynursingservices.in/images/dementia-alzheimer-care-take.jpg",
      description: "Supportive care to ensure smooth recovery after surgery or hospital discharge.",
      link: "Post‑Discharge-Care.html"
    },
    {
      title: "Palliative & End‑of‑Life Care",
      image: "https://qualitynursingservices.in/images/dementia-alzheimer-care-take.jpg",
      description: "Compassionate care focused on comfort and quality of life for terminally ill patients.",
      link: "Palliative-End-of-Life-Care.html"
    },
    {
      title: "Chronic Disease Management",
      image: "https://qualitynursingservices.in/images/home-patient-care.jpg",
      description: "Ongoing care and monitoring for chronic conditions like diabetes, heart disease, and COPD.",
      link: "Chronic-Disease-Management.html"
    },
    {
      title: "Wound Care",
      image: "https://qualitynursingservices.in/images/dementia-alzheimer-care-take.jpg",
      description: "Specialized care for wound healing and prevention of infections.",
      link: "Wound-Care.html"
    },

    
    // Add more services as needed
  ];

  const servicesContainer = document.getElementById("services");

  services.forEach(service => {
    const card = document.createElement("div");
    card.classList.add("service-card");

    card.innerHTML = `
      <img src="${service.image}" alt="${service.title}">
      <div class="service-content">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      window.location.href = service.link;
    });

    servicesContainer.appendChild(card);
  });
