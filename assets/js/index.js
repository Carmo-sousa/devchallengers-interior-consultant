const btnMenuMobile = document.querySelector(".mobile-button-menu");
const btnMenu = document.querySelector(".button-menu");

btnMenuMobile.addEventListener("click", () => {
    let mobileMenuEl = document.querySelector(".mobile-nav");
    mobileMenuEl.classList.toggle("active");
});

btnMenu.addEventListener("click", () => {
    let mobileMenuEl = document.querySelector(".mobile-nav");
    mobileMenuEl.classList.toggle("active");
});
