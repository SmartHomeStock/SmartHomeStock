const primaryNav = document.querySelector(".navbar-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

console.log("primaryNav:", primaryNav);
console.log("navToggle:", navToggle);

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    console.log("visibility:", visibility);

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});
