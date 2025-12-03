document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Element Selection ---
  const mobileOpenBtn = document.getElementById("mobileOpenBtn");
  const mobileCloseBtn = document.getElementById("mobileCloseBtn");
  const offcanvas = document.getElementById("offcanvas");
  const overlay = document.getElementById("overlay");
  const servicesBtn = document.getElementById("servicesBtn");
  const servicesDropdown = document.getElementById("servicesDropdown");
  const pageBody = document.getElementById("page-body") || document.body; // Fallback to body
  const headerEl = document.querySelector('.header');

  // --- helpers ---
  const setAria = (el, name, value) => { if (el) el.setAttribute(name, value); };

  // --- Off-canvas Menu Logic ---
  let previousFocusedElement = null;

  const openMenu = () => {
    offcanvas.classList.add('open');
    overlay.classList.add('show');
    pageBody.classList.add('no-scroll');
    setAria(mobileOpenBtn, 'aria-expanded', 'true');
    previousFocusedElement = document.activeElement;
    // move focus into the panel (close button first)
    const focusable = offcanvas.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable) focusable.focus();
  };

  const closeMenu = () => {
    offcanvas.classList.remove('open');
    overlay.classList.remove('show');
    pageBody.classList.remove('no-scroll');
    setAria(mobileOpenBtn, 'aria-expanded', 'false');
    // restore focus
    if (previousFocusedElement && typeof previousFocusedElement.focus === 'function') previousFocusedElement.focus();
  };

  const toggleMenu = () => {
    if (!offcanvas) return;
    if (offcanvas.classList.contains('open')) closeMenu(); else openMenu();
  };

  // Event listeners for opening and closing the menu
  if (mobileOpenBtn) {
    setAria(mobileOpenBtn, 'aria-controls', 'offcanvas');
    setAria(mobileOpenBtn, 'aria-expanded', 'false');
    mobileOpenBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
  }

  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', (e) => { e.preventDefault(); closeMenu(); });
  if (overlay) overlay.addEventListener('click', (e) => { e.preventDefault(); closeMenu(); });

  // Close menu when a link inside it is clicked
  if (offcanvas) {
    offcanvas.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') closeMenu();
    });
  }

  // Small focus-trap: keep TAB inside offcanvas while open
  document.addEventListener('keydown', (e) => {
    if (!offcanvas || !offcanvas.classList.contains('open')) return;
    if (e.key === 'Tab') {
      const focusable = offcanvas.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    }
  });

  // --- Services Dropdown Logic ---
  if (servicesBtn) {
    // make the control accessible even if it's an <a>
    setAria(servicesBtn, 'aria-haspopup', 'true');
    setAria(servicesBtn, 'aria-expanded', 'false');

    const toggleDropdown = (e) => {
      // when user intentionally clicks the services control toggle the panel
      if (e) e.preventDefault();
      servicesDropdown.classList.toggle('open');
      const expanded = servicesDropdown.classList.contains('open');
      setAria(servicesBtn, 'aria-expanded', expanded ? 'true' : 'false');
    };

    servicesBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDropdown(e);
    });

    servicesBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleDropdown(e);
      }
    });
  }

  // Close dropdown when clicking outside of it or on Escape
  window.addEventListener('click', (e) => {
    if (servicesDropdown && servicesDropdown.classList.contains('open') && !servicesDropdown.contains(e.target) && !servicesBtn.contains(e.target)) {
      servicesDropdown.classList.remove('open');
      setAria(servicesBtn, 'aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (offcanvas && offcanvas.classList.contains('open')) closeMenu();
      if (servicesDropdown && servicesDropdown.classList.contains('open')) {
        servicesDropdown.classList.remove('open');
        setAria(servicesBtn, 'aria-expanded', 'false');
      }
    }
  });

  // --- header shrink-on-scroll + active link highlighting ---
  const checkScrollHeader = () => {
    if (!headerEl) return;
    if (window.scrollY > 12) headerEl.classList.add('shrink'); else headerEl.classList.remove('shrink');
  };
  window.addEventListener('scroll', checkScrollHeader, { passive: true });
  checkScrollHeader();

  // active link
  try {
    const path = location.pathname.replace(/\\/g, '/');
    const navLinks = document.querySelectorAll('nav.desktop a');
    navLinks.forEach((a) => {
      // simple matching by pathname
      const href = a.getAttribute('href');
      if (!href) return;
      const linkPath = new URL(href, location.origin).pathname.replace(/\\/g, '/');
      if (linkPath === path) a.classList.add('active');
    });
  } catch (err) {
    // ignore URL parsing errors
  }

});