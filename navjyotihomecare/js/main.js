document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Element Selection ---
  const mobileOpenBtn = document.getElementById("mobileOpenBtn");
  const mobileCloseBtn = document.getElementById("mobileCloseBtn");
  const offcanvas = document.getElementById("offcanvas");
  const overlay = document.getElementById("overlay");
  const servicesBtn = document.getElementById("servicesBtn");
  const servicesDropdown = document.getElementById("servicesDropdown");
  const pageBody = document.getElementById("page-body"); // Reference to the body

  // --- Off-canvas Menu Logic ---

  // Function to toggle the off-canvas menu
  const toggleMenu = () => {
    offcanvas.classList.toggle("open");
    overlay.classList.toggle("show");
    pageBody.classList.toggle("menu-open"); // Toggles a class on the body
  };

  // Event listeners for opening and closing the menu
  if (mobileOpenBtn) mobileOpenBtn.addEventListener("click", toggleMenu);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener("click", toggleMenu);
  if (overlay) overlay.addEventListener("click", toggleMenu);

  // Close menu when a link inside it is clicked
  if (offcanvas) {
    offcanvas.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        toggleMenu();
      }
    });
  }

  // Close menu on 'Escape' key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && offcanvas.classList.contains("open")) {
      toggleMenu();
    }
  });

  // --- Services Dropdown Logic ---

  // Toggle dropdown on button click
  if (servicesBtn) {
    servicesBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevents the window click listener from firing immediately
      servicesDropdown.classList.toggle("open");
    });
  }

  // Close dropdown when clicking outside of it
  window.addEventListener("click", (e) => {
    if (
      servicesDropdown &&
      servicesDropdown.classList.contains("open") &&
      !servicesDropdown.contains(e.target)
    ) {
      servicesDropdown.classList.remove("open");
    }
  });
});