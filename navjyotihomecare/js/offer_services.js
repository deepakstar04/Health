// JavaScript Object with card data including image URLs
const homeCareData = [
  { title: 'Caregiver', imgSrc: 'https://www.hcah.in/media/services-no-background/caregiver.webp' },
  { title: 'Nursing', imgSrc: 'https://www.hcah.in/media/services-no-background/nursing.webp' }
];

const elderCareData = [
  { title: 'Assisted Living', imgSrc: 'https://www.hcah.in/media/services-no-background/assisted-living.webp' },
  { title: 'Senior Care', imgSrc: 'https://www.hcah.in/media/services-no-background/senior-care.webp' },
  { title: 'Alzheimer-Dementia Care', imgSrc: 'https://www.hcah.in/media/services-no-background/alzheimer-dementia-care.webp' }
];

// Function to render cards dynamically from JavaScript objects
function renderCards(sectionId, cardData) {
  const container = document.getElementById(sectionId);
  
  cardData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    
    const imgElement = document.createElement('img');
    imgElement.src = card.imgSrc;
    imgElement.alt = card.title;
    
    const titleElement = document.createElement('h3');
    titleElement.innerText = card.title;
    
    cardElement.appendChild(imgElement);
    cardElement.appendChild(titleElement);
    
    container.appendChild(cardElement);
  });
}

// Render cards on page load
renderCards('home-care-cards', homeCareData);
renderCards('elder-care-cards', elderCareData);


// other 

