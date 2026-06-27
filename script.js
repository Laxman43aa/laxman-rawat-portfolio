const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements =
    document.querySelectorAll(
        "section,.skill-card,.project-card,.experience-card"
    );

hiddenElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});
new Typed("#typed-name", {
    strings: [
        "Laxman Rawat"
    ],
    typeSpeed: 120,
    showCursor: false
});
new Typed("#typed", {
    strings: [
        "Frontend Developer",
        "Web Developer",
        "MERN Stack Learner",
        "JavaScript Enthusiast",
        "BCA Student"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.querySelector("i")
            .classList.replace("fa-xmark", "fa-bars");

    });
});

const readMoreBtn =
    document.querySelector(".read-more-btn");

const moreText =
    document.querySelector(".more-text");

readMoreBtn.addEventListener("click", (e) => {

    e.preventDefault();

    moreText.classList.toggle("show");

    if (moreText.classList.contains("show")) {
        readMoreBtn.textContent = "Read Less";
    } else {
        readMoreBtn.textContent = "Read More";
    }

});

/*=========================================
            THEME TOGGLE
=========================================*/

const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle.querySelector("i");

// Saved Theme Load
if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

}

// Toggle Theme
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    } else {

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");

    }

});
/*=========================================
        TOAST NOTIFICATION
=========================================*/

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toast-message");

function showToast(message, isError = false) {

    toastMessage.textContent = message;

    if (isError) {

        toast.classList.add("error");

    } else {

        toast.classList.remove("error");

    }

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}
/*=========================================
        CONTACT FORM (EMAILJS)
=========================================*/

// Initialize EmailJS
emailjs.init({
    publicKey: "l8Kol9hYEFY6KDVLE",
});

const contactForm = document.getElementById("contact-form");
const sendBtn = document.querySelector(".send-btn");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    sendBtn.disabled = true;

    sendBtn.classList.add("loading");

    sendBtn.innerHTML = `
<i class="fa-solid fa-spinner"></i>
Sending...
`;

    emailjs.sendForm(
        "service_yy8a5wt",
        "template_7awhrmh",
        this
    )
        .then(() => {

            showToast("Message Sent Successfully!");

            contactForm.reset();

            sendBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i>Sent Successfully`;

            sendBtn.classList.remove("loading");

            setTimeout(() => {

                sendBtn.disabled = false;

                sendBtn.innerHTML = `Send Message`;

            }, 2000);

        })
        .catch((error) => {

            console.error(error);

            showToast("Failed to send message!", true);

            sendBtn.classList.remove("loading");

            sendBtn.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>Failed`;

            setTimeout(() => {

                sendBtn.disabled = false;

                sendBtn.innerHTML = `Send Message`;

            }, 2000);

        });

});
/*=========================================
        BACK TO TOP BUTTON
=========================================*/

const scrollTopBtn =
document.getElementById("scroll-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        scrollTopBtn.classList.add("show");

    }else{

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active");

        }

    });

});