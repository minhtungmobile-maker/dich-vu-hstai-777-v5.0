document.addEventListener("DOMContentLoaded", function() {
  console.log("VMGS - HSTAI 777 System Initialized");

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });
});
