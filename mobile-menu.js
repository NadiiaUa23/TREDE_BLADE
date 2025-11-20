const burgerBtn = document.getElementById("burgerBtn");
const navList = document.getElementById("navList");
const navLinks = document.querySelectorAll(".nav_link");

burgerBtn.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("open");
  burgerBtn.classList.toggle("active", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
});

// закриваємо меню при кліку по пункту
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("open");
    burgerBtn.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});
