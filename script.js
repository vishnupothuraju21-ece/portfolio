/* ==========================
   Typing Animation
========================== */

const text = [
    "Electronics & Communication Engineering Student",
    "Python Developer",
    "Web Developer",
    "Embedded Systems Enthusiast"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".hero-text h2");

function typeEffect() {

    const current = text[index];

    if (!isDeleting) {

        typingElement.textContent = current.substring(0, charIndex);

        charIndex++;

        if (charIndex > current.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typingElement.textContent = current.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            isDeleting = false;

            index++;

            if (index >= text.length) {

                index = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);

}

typeEffect();


/* ==========================
   Sticky Navbar Shadow
========================== */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "#0f172a";

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.4)";

    }

    else {

        header.style.background = "#111827";

        header.style.boxShadow = "none";

    }

});


/* ==========================
   Active Navigation
========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================
   Scroll Reveal Animation
========================== */

const revealElements = document.querySelectorAll(
    ".card, .project-card, .skill, .contact-box"
);

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(60px)";

    element.style.transition = "all .7s ease";

});

window.addEventListener("scroll", reveal);


/* ==========================
   Back To Top Button
========================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";

topButton.style.bottom = "30px";

topButton.style.right = "30px";

topButton.style.width = "50px";

topButton.style.height = "50px";

topButton.style.border = "none";

topButton.style.borderRadius = "50%";

topButton.style.background = "#38bdf8";

topButton.style.color = "white";

topButton.style.fontSize = "22px";

topButton.style.cursor = "pointer";

topButton.style.display = "none";

topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.4)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================
   Contact Form
========================== */

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});


/* ==========================
   Button Hover Animation
========================== */

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(button => {

    button.addEventListener("mouseover", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});


/* ==========================
   Skills Hover Effect
========================== */

const skills = document.querySelectorAll(".skill");

skills.forEach(skill => {

    skill.addEventListener("mouseenter", () => {

        skill.style.boxShadow = "0 0 20px rgba(56,189,248,.5)";

    });

    skill.addEventListener("mouseleave", () => {

        skill.style.boxShadow = "none";

    });

});
