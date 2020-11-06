const btnMenuMobile = document.querySelector(".mobile-button-menu");
const btnMenu = document.querySelector(".button-menu");

btnMenuMobile.addEventListener("click", () => toggleClass());
btnMenu.addEventListener("click", () => toggleClass());

function toggleClass() {
    let mobileMenuEl = document.querySelector(".mobile-nav");
    let open = mobileMenuEl.classList.contains("active") ? true : false;

    if(open) {
        mobileMenuEl.classList.remove("active");
    } else {
        mobileMenuEl.classList.add("active");
    }
}