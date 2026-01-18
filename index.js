document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navigation = document.querySelector(".navigation");

  if (mobileMenuToggle && navigation) {
    mobileMenuToggle.addEventListener("click", function () {
      mobileMenuToggle.classList.toggle("active");
      navigation.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenuToggle.classList.remove("active");
        navigation.classList.remove("active");
      });
    });

    document.addEventListener("click", function (event) {
      const isClickInside =
        navigation.contains(event.target) ||
        mobileMenuToggle.contains(event.target);

      if (!isClickInside && navigation.classList.contains("active")) {
        mobileMenuToggle.classList.remove("active");
        navigation.classList.remove("active");
      }
    });
  }

  const contactBtn = document.querySelector(".contact-btn");
  if (contactBtn) {
    contactBtn.addEventListener("click", function () {
      alert(
        "Свяжитесь с нами: 8 (775) 603-87-21\nИли напишите нам в WhatsApp!",
      );
    });
  }

  const navDropdown = document.querySelector(".nav-dropdown");
  const navDropdownToggle = document.querySelector(".nav-dropdown-toggle");

  if (navDropdown && navDropdownToggle) {
    navDropdownToggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        navDropdown.classList.toggle("active");
      }
    });

    document.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        if (!navDropdown.contains(e.target)) {
          navDropdown.classList.remove("active");
        }
      }
    });
  }

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  let lastScroll = 0;
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    lastScroll = currentScroll;
  });

  const phoneNumber = document.querySelector(".phone-number");
  if (phoneNumber) {
    phoneNumber.addEventListener("click", function () {
      console.log("Phone number clicked");
    });
  }

  const whatsappIcon = document.querySelector(".whatsapp-icon");
  if (whatsappIcon) {
    whatsappIcon.addEventListener("click", function () {
      console.log("WhatsApp clicked");
    });
  }

  const heroBtn = document.querySelector(".hero-btn");
  if (heroBtn) {
    heroBtn.addEventListener("click", function () {
      alert("Спасибо за интерес! Мы свяжемся с вами в ближайшее время.");
    });
  }

  const footerScrollTopBtn = document.querySelector(".footer-scroll-top");
  if (footerScrollTopBtn) {
    footerScrollTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
