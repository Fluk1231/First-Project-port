document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu ul");
  
    toggleButton.addEventListener("click", () => {
      menu.classList.toggle("show");
      toggleButton.classList.toggle("active");
    });
  });


