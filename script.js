/* SCROLL REVEAL */

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(reveal => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            reveal.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            reveal.classList.add("active");
        }

    });

});

/* NAVBAR EFFECT */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background =
            "rgba(5,8,22,0.7)";

        navbar.style.borderBottom =
            "1px solid rgba(255,255,255,0.08)";

    }

    else{

        navbar.style.background =
            "rgba(255,255,255,0.03)";

        navbar.style.borderBottom =
            "none";
    }

});

/* 3D CARD EFFECT */

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 20;

        const rotateY =
            (centerX - x) / 20;

        card.style.transform =
            `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
            `;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            `
            rotateX(0)
            rotateY(0)
            translateY(0)
            `;
    });

});