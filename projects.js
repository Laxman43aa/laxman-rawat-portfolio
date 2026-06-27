/*=========================================
        PROJECTS INITIALIZATION
=========================================*/

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");

const featuredProject = document.querySelector(".featured-project");


/*=========================================
        FILTER PROJECTS
=========================================*/

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Active Button */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        filterProjects(filter);

    });

});


/*=========================================
        FILTER FUNCTION
=========================================*/

function filterProjects(filter) {

    projectCards.forEach(card => {

        if (filter === "all") {

            showCard(card);

            return;

        }

        if (card.classList.contains(filter)) {

            showCard(card);

        }

        else {

            hideCard(card);

        }

    });

}


/*=========================================
        SHOW CARD
=========================================*/

function showCard(card) {

    card.style.display = "block";

    requestAnimationFrame(() => {

        card.style.opacity = "1";

        card.style.transform = "translateY(0) scale(1)";

    });

}


/*=========================================
        HIDE CARD
=========================================*/

function hideCard(card) {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px) scale(.95)";

    setTimeout(() => {

        card.style.display = "none";

    }, 300);

}
/*=========================================
            IMAGE MODAL
=========================================*/

const projectModal = document.querySelector(".project-modal");
const modalImage = document.querySelector(".modal-image");
const closeModalBtn = document.querySelector(".close-modal");

const projectImages = document.querySelectorAll(".project-image img");


/*=========================================
            OPEN MODAL
=========================================*/

projectImages.forEach(image => {

    image.addEventListener("click", () => {

        projectModal.classList.add("active");

        modalImage.src = image.src;

        modalImage.alt = image.alt;

        document.body.style.overflow = "hidden";

    });

});


/*=========================================
            CLOSE MODAL
=========================================*/

function closeImageModal() {

    projectModal.classList.remove("active");

    document.body.style.overflow = "auto";

}


/*=========================================
        CLOSE BUTTON
=========================================*/

closeModalBtn.addEventListener("click", closeImageModal);


/*=========================================
        CLICK OUTSIDE
=========================================*/

projectModal.addEventListener("click", (e) => {

    if (e.target === projectModal) {

        closeImageModal();

    }

});


/*=========================================
        ESC KEY
=========================================*/

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape" && projectModal.classList.contains("active")) {

        closeImageModal();

    }

});
/*=========================================
            PROJECT DATA
=========================================*/

const projectData = [

    {

        title: "Weather App",

        image: "images/weather-app.jpg",

        description:
            "Real-time weather application built using OpenWeather API. It supports city search, dynamic weather icons, responsive UI and clean modern design.",

        tech: ["HTML", "CSS", "JavaScript", "REST API"],

        live: " https://laxman43aa.github.io/weather-app/",

        github: "https://github.com/Laxman43aa/weather-app"

    },

    {

        title: "Todo App",

        image: "images/todo-app.jpg",

        description:
            "Modern task management application with Add, Delete and Complete features. Fully responsive and user friendly interface.",

        tech: ["HTML", "CSS", "JavaScript"],

        live: "https://laxman43aa.github.io/todo-app/",

        github: "https://github.com/Laxman43aa/todo-app"

    },

    {

        title: "Netflix Clone",

        image: "images/netflix-clone.jpg",

        description:
            "Netflix landing page clone built using HTML and CSS with responsive layout and beautiful UI.",

        tech: ["HTML", "CSS"],

        live: " https://laxman43aa.github.io/netflix-clone/",

        github: "https://github.com/Laxman43aa/netflix-clone"

    },

    {

        title: "Developer Portfolio",

        image: "images/portfolio.jpg",

        description:
            "Modern glassmorphism portfolio with animations, responsive layout and premium UI.",

        tech: ["HTML", "CSS", "JavaScript"],

        live: "#",

        github: "#"

    },

    {

        title: "React Dashboard",

        image: "images/react-project.png",

        description:
            "Interactive admin dashboard built with React featuring reusable components and charts.",

        tech: ["React", "Chart.js"],

        live: "#",

        github: "#"

    }

];
/*=========================================
        DETAILS MODAL ELEMENTS
=========================================*/

const detailsModal = document.querySelector(".details-modal");

const detailsImage = document.getElementById("details-image");

const detailsTitle = document.getElementById("details-title");

const detailsDescription =
    document.getElementById("details-description");

const detailsTech =
    document.getElementById("details-tech");

const detailsLive =
    document.getElementById("details-live");

const detailsGithub =
    document.getElementById("details-github");

const closeDetails =
    document.querySelector(".close-details");

/*=========================================
        VIEW DETAILS BUTTON
=========================================*/

const detailButtons =
    document.querySelectorAll(".details-btn");

detailButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        openProject(index);

    });

});
/*=========================================
        OPEN PROJECT
=========================================*/

function openProject(index) {

    const project = projectData[index];

    detailsImage.src = project.image;

    detailsTitle.textContent = project.title;

    detailsDescription.textContent =
        project.description;

    detailsTech.innerHTML = "";

    project.tech.forEach(item => {

        detailsTech.innerHTML +=
            `<span>${item}</span>`;

    });

    detailsLive.href = project.live;

    detailsGithub.href = project.github;
    detailsModal.scrollTop = 0;
    detailsModal.classList.add("active");

    document.body.style.overflow = "hidden";

}
/*=========================================
        CLOSE DETAILS
=========================================*/

function closeProject() {

    detailsModal.classList.remove("active");

    document.body.style.overflow = "auto";

}

closeDetails.addEventListener("click", closeProject);

detailsModal.addEventListener("click", (e) => {

    if (e.target === detailsModal) {

        closeProject();

    }

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape" &&
        detailsModal.classList.contains("active")) {

        closeProject();

    }

});
/*=========================================
            3D TILT EFFECT
=========================================*/

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10;

        const rotateY = ((centerX - x) / centerX) * 10;

        card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-12px)
        scale(1.03)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0)
        scale(1)
        `;

    });

});
/*=========================================
        MOUSE SPOTLIGHT EFFECT
=========================================*/

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);

        card.style.setProperty("--y", `${y}px`);

    });

});
/*=========================================
        MAGNETIC BUTTON EFFECT
=========================================*/

const projectButtons =
    document.querySelectorAll(".project-buttons .btn");

projectButtons.forEach(button => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const moveX = (x - rect.width / 2) / 6;

        const moveY = (y - rect.height / 2) / 6;

        button.style.transform = `
        translate(${moveX}px,${moveY}px)
        `;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translate(0,0)";

    });

});

/*=========================================
        STATISTICS COUNTER
=========================================*/

const statNumbers = document.querySelectorAll(".stat-box h3");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    counterStarted = true;

    statNumbers.forEach(counter => {

        const target = counter.innerText;

        const number = parseInt(target);

        const suffix = target.replace(number, "");

        let count = 0;

        const speed = number / 60;

        const updateCounter = () => {

            if (count < number) {

                count += speed;

                counter.innerText =
                    Math.ceil(count) + suffix;

                requestAnimationFrame(updateCounter);

            }

            else {

                counter.innerText = target;

            }

        }

        updateCounter();

    });

}


/*=========================================
        COUNTER OBSERVER
=========================================*/

const statsSection =
    document.querySelector(".project-stats");

const counterObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter();

            }

        });

    });

if (statsSection) {

    counterObserver.observe(statsSection);

}


/*=========================================
        STAGGER CARD ANIMATION
=========================================*/

cards.forEach((card, index) => {

    card.style.animationDelay =
        `${index * 120}ms`;

});


/*=========================================
        LIVE DEMO BUTTONS
=========================================*/

document.querySelectorAll(".live-demo").forEach(btn => {

    btn.addEventListener("click", (e) => {

        if (btn.getAttribute("href") === "#") {

            e.preventDefault();

            alert(
                "🚀 Live Demo will be available soon."
            );

        }

    });

});


/*=========================================
        GITHUB BUTTONS
=========================================*/

document.querySelectorAll(".github-btn").forEach(btn => {

    btn.addEventListener("click", (e) => {

        if (btn.getAttribute("href") === "#") {

            e.preventDefault();

            alert(
                "💻 GitHub Repository will be uploaded soon."
            );

        }

    });

});


/*=========================================
        PRELOAD PROJECT IMAGES
=========================================*/

projectData.forEach(project => {

    const img = new Image();

    img.src = project.image;

});


/*=========================================
        PERFORMANCE
=========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log(
    "%c🚀 Portfolio Loaded Successfully",
    "color:#38bdf8;font-size:18px;font-weight:bold;"
);