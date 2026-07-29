const menuBtn = document.querySelector(".nav_manu_btn");
const navLinks = document.querySelector(".nav_link");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("active");
});



const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",

};

ScrollReveal().reveal(".hero_img img",{
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".hero_text_area h4",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".hero_text_area h2",{
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".hero_area_btn",{
    ...scrollRevealOption,
    delay: 1500,
});