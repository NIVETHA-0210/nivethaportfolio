// ===============================
// Typing Animation
// ===============================

const words = [
    "Aspiring Data Analyst",
    "Web Developer",
    "Python Programmer",
    "SQL Learner",
    "Power BI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.querySelector(".typing");

function typeEffect(){

    if(!typing) return;

    let currentWord = words[wordIndex];

    if(isDeleting){
        typing.textContent = currentWord.substring(0,charIndex--);
    }else{
        typing.textContent = currentWord.substring(0,charIndex++);
    }

    let speed = isDeleting ? 80 : 150;

    if(!isDeleting && charIndex === currentWord.length + 1){
        speed = 1800;
        isDeleting = true;
    }

    if(isDeleting && charIndex === 0){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// ===============================
// Reveal Animation
// ===============================

const revealElements=document.querySelectorAll("section");

function reveal(){

    revealElements.forEach(section=>{

        const windowHeight=window.innerHeight;
        const top=section.getBoundingClientRect().top;

        if(top < windowHeight-120){
            section.style.opacity="1";
            section.style.transform="translateY(0)";
        }

    });

}

reveal();

window.addEventListener("scroll",reveal);


// ===============================
// Initial Animation
// ===============================

document.querySelectorAll("section").forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(70px)";
    section.style.transition="1s";

});


// ===============================
// Mobile Menu
// ===============================

const menu=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");

if(menu){

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}


// ===============================
// Smooth Active Navigation
// ===============================

const navLinks=document.querySelectorAll(".nav-links a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

});

});


// ===============================
// Console Message
// ===============================

console.log("Welcome to Nivetha's Portfolio 🚀");
