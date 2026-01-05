document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const closeDrawer = document.getElementById('closeDrawer');
    const navDrawer = document.getElementById('navDrawer');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // --- Functions to open and close the drawer ---

    function openMenu() {
        navDrawer.classList.add('active');
        drawerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent body scrolling when menu is open
    }

    function closeMenu() {
        navDrawer.classList.remove('active');
        drawerOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore body scrolling
    }

    // --- Event Listeners ---

    // Open drawer on hamburger click
    menuToggle.addEventListener('click', openMenu);

    // Close drawer on 'X' click
    closeDrawer.addEventListener('click', closeMenu);

    // Close drawer if clicking outside on the overlay
    drawerOverlay.addEventListener('click', closeMenu);


    // --- Handle Dropdowns inside the drawer ---
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent actual link navigation

            // Get the parent LI element (which has the .has-dropdown class)
            const parentLi = toggle.parentElement;

            // Close other open dropdowns (optional - remove this block if you want multiple open)
            document.querySelectorAll('.has-dropdown.open').forEach(item => {
                if (item !== parentLi) {
                    item.classList.remove('open');
                }
            });

            // Toggle the current dropdown
            parentLi.classList.toggle('open');
        });
    });
});

    // <!-- Contact Section Starts Here -->

//  Contate fome
const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "2e034998-fff0-4741-b6b1-c829cb6212be");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// end contact form


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

