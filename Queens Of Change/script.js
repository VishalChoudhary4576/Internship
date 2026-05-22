/* =========================================================
   Mobile Navbar Toggle
========================================================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* =========================================================
   Scroll Reveal Animation
========================================================= */

function reveal() {

    const reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){

        const windowHeight = window.innerHeight;

        const elementTop = reveals[i].getBoundingClientRect().top;

        const elementVisible = 150;

        if(elementTop < windowHeight - elementVisible){

            reveals[i].classList.add("active");

        }
        else{

            reveals[i].classList.remove("active");

        }

    }

}


/* Run animation while scrolling */

window.addEventListener("scroll", reveal);


/* Run once when page loads */

window.addEventListener("load", reveal);


/* =========================================================
   Navbar Background Change
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "#111";

    }
    else{

        navbar.style.background = "rgba(0,0,0,0.35)";

    }

});