const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 50);
      }
    });
  },
  { threshold: 0.2 },
);
document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});
const DOM = {
  openMenu: document.querySelector(".btn-open-menu"),
  mobileMenu: document.querySelector(".mobile-menu"),
  closeMenu: document.querySelector(".btn-close-menu"),
  headerAction: document.querySelectorAll(".headerAction"),
  bussinessOpen: document.querySelectorAll(".Bussiness-open"),
  bussinessDialog: document.querySelector(".business-hours"),
  businessClose: document.getElementById("business-hours-close"),
};

DOM.openMenu.addEventListener("click", () => {
  DOM.mobileMenu.classList.remove("is-hidden");
});

DOM.closeMenu.addEventListener("click", () => {
  DOM.mobileMenu.classList.add("is-hidden");
});

DOM.bussinessOpen.forEach((btn) => {
  btn.addEventListener("click", () => {
    DOM.bussinessDialog.showModal();
  });
});

DOM.businessClose.addEventListener("click", () => {
  DOM.bussinessDialog.close();
});
DOM.headerAction.forEach((element) => {
  element.addEventListener("click", (e) => {
    DOM.headerAction.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});
