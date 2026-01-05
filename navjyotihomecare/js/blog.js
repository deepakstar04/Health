// Blog data stored in JS object
const blogs = [
  {
    id: 1, 
    title: "How home health care improves recovery after surgery",
    image: "https://media.istockphoto.com/id/2211174570/photo/happy-senior-woman-walking-with-help-of-female-caregiver-during-a-home-visit.webp?a=1&b=1&s=612x612&w=0&k=20&c=AURV-DmAFyG0_ba2Oh7uyreSvvvms-HF-nzZ_gkx23A=",
    description: "Home health care speeds up post-surgery recovery through personalized nursing, medication management, and therapy at home, ensuring comfort, safety, and reduced risk of infection or hospital readmission.",
    full: "Home health care speeds up post-surgery recovery through personalized nursing, medication management, .... "
  },
  {
    id: 2,
    title: "Elderly Care – Dementia Care, Mobility, Emotional Support",
    image: "https://media.istockphoto.com/id/2216846787/photo/daughter-assisting-senior-woman-with-walker-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=ANvouZb-eHAOtbRJtxzRPOWYSeKqe0tGjDNmYSjJeD4=",
    description: "Home health care for seniors focuses on compassionate dementia support, safe mobility assistance, and emotional care—helping older adults maintain independence, dignity, and a better quality of life at home.",
    full: "Home health care for seniors focuses on compassionate dementia support, safe mobility assistance, and emotional care—helping "
  },
  {
    id: 3,
    title: "Post-Surgery & Rehabilitation – Wound Care, Physiotherapy, Pain Management",
    image: "https://plus.unsplash.com/premium_photo-1681995477881-562c8ced6e3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxob21lJTIwaGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    description: "Home health care aids recovery after surgery through expert wound care, personalized physiotherapy, and effective pain management—promoting faster healing, comfort, and a safe return to daily activities.",
    full: "Home health care aids recovery after surgery through expert wound care, personalized physiotherapy, and effective pain management.."
  }
];

// Display blog cards
const container = document.getElementById('blog-container');

blogs.forEach(blog => {
  const card = document.createElement('div');
  card.classList.add('blog-card');
  card.innerHTML = `
    <img src="${blog.image}" alt="${blog.title}">
    <div class="blog-content">
      <h3 class="blog-title">${blog.title}</h3>
      <p class="blog-desc">${blog.description}</p>
    </div>
  `;
  
  // When clicked, open detail page
  card.addEventListener('click', () => openBlog(blog.id));
  container.appendChild(card);
});

// Function to open a new page with blog details
function openBlog(id) {
  const selectedBlog = blogs.find(b => b.id === id);
  localStorage.setItem('selectedBlog', JSON.stringify(selectedBlog));
  window.location.href = 'blog.html';
}
