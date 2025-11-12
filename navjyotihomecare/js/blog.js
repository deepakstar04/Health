// Blog data stored in JS object
const blogs = [
  {
    id: 1, 
    title: "How to Build a Responsive Blog Card",
    image: "https://www.hcah.in/media/services-no-background/caregiver.webp",
    description: "Learn how to design and code a beautiful responsive blog card using HTML, CSS, and JavaScript.",
    full: "In this tutorial, we'll go step-by-step through building a responsive blog card layout using HTML, CSS grid, and a bit of JavaScript for interactivity..."
  },
  {
    id: 2,
    title: "Top 10 JavaScript Tips for Developers",
    image: "https://www.hcah.in/media/services-no-background/caregiver.webp",
    description: "Discover the most useful tips and tricks to improve your JavaScript coding skills.",
    full: "JavaScript is one of the most versatile languages on the web. Here are 10 pro tips that can help you write cleaner and more efficient JS code..."
  },
  {
    id: 3,
    title: "Modern CSS Layouts with Grid and Flexbox",
    image: "https://www.hcah.in/media/services-no-background/caregiver.webp",
    description: "Understand the power of modern CSS layout systems and how to combine them effectively.",
    full: "Flexbox and CSS Grid are the foundation of responsive design. Learn how to master them together for maximum control..."
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
