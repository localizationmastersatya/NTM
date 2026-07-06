document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".nav-mobile");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen);
      toggle.innerHTML = isOpen ? "✕" : "☰";
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.innerHTML = "☰";
      });
    });
  }

  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("open");

      document.querySelectorAll(".faq-item.open").forEach((openItem) => {
        openItem.classList.remove("open");
        openItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const service = form.service.value;
      const message = form.message.value.trim();

      const subject = encodeURIComponent(`Translation Inquiry: ${service}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
      );

      window.location.href = `mailto:freelance.linguist22@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
