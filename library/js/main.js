// Main JavaScript file for HarperCollins Leadership website

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector(".header__mobile-menu-btn");
  const headerNav = document.querySelector(".header__nav");

  if (mobileMenuBtn && headerNav) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenuBtn.classList.toggle("header__mobile-menu-btn--active");
      headerNav.classList.toggle("header__nav--mobile-open");
    });
  }

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Newsletter form submission
  const newsletterForm = document.querySelector(".footer__newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = this.querySelector(".footer__newsletter-input");
      const email = emailInput.value.trim();

      if (email && isValidEmail(email)) {
        // Here you would typically send the email to your backend
        alert("Thank you for subscribing to our newsletter!");
        emailInput.value = "";
      } else {
        alert("Please enter a valid email address.");
      }
    });
  }

  // Search functionality
  const searchBtn = document.querySelector(".header__search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", function () {
      // Here you would typically open a search modal or navigate to search page
      alert("Search functionality coming soon!");
    });
  }

  // Add hover effects for book cards
  const bookCards = document.querySelectorAll(".book-card");
  bookCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Utility function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Add loading states to buttons
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (!this.classList.contains("btn--disabled")) {
        this.classList.add("btn--loading");
        setTimeout(() => {
          this.classList.remove("btn--loading");
        }, 2000);
      }
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".book-card, .topic-card, .service-card"
  );
  animateElements.forEach((el) => {
    observer.observe(el);
  });
});


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  },
  { threshold: 0.6 }
);

document.querySelectorAll('.underline-animated').forEach((el) => {
  observer.observe(el);
});
