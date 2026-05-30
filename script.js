/* SCROLL REVEAL */

const reveals =
document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section => {

        const top =
        section.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(top < windowHeight - 100){

            section.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();

/* NAVBAR EFFECT */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 20){

        navbar.style.background =
        "rgba(255,255,255,0.92)";

        navbar.style.boxShadow =
        "0 10px 30px rgba(15,23,42,.05)";
    }

    else{

        navbar.style.background =
        "rgba(255,255,255,.8)";

        navbar.style.boxShadow =
        "none";
    }

});

/* PROJECT COUNTER */

const stat =
document.querySelector(".stat-card h3");

let count = 0;

function startCounter(){

    const interval =
    setInterval(()=>{

        count++;

        stat.textContent =
        count + "+";

        if(count >= 3){

            clearInterval(interval);
        }

    },300);

}

setTimeout(
    startCounter,
    800
);