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

   // box area 

ScrollReveal().reveal(".box1",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".box2",{
    ...scrollRevealOption,
    delay: 800,
});

ScrollReveal().reveal(".box3",{
    ...scrollRevealOption,
    delay: 1000,
});


// counter area 


ScrollReveal().reveal(".count1",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".count2",{
    ...scrollRevealOption,
    delay: 800,
});

ScrollReveal().reveal(".count3",{
    ...scrollRevealOption,
    delay: 1000,
});


// Cityscapes-all-boxs

ScrollReveal().reveal(".areal-1",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".areal-2",{
    ...scrollRevealOption,
    delay: 800,
});

ScrollReveal().reveal(".areal-3",{
    ...scrollRevealOption,
    delay: 1000,
});