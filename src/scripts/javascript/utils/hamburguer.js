function hamburguer() {
  const toggleBtn = document.querySelector(".navbar-toggle");
  const menu = document.getElementById("navbar-menu");

  const links = document.querySelectorAll(".navbar-link");

  toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    menu.classList.toggle("active");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      toggleBtn.classList.remove("active");
      menu.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleBtn.classList.remove("active");
      menu.classList.remove("active");
    }
  });
}

export { hamburguer };
