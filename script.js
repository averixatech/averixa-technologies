// WhatsApp Enquiry Form

function sendWhatsApp(){

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let phone = document.getElementById("phone").value;

    let message = document.getElementById("message").value;


    let whatsappNumber = "919080660877";


    let text = 
    "New Enquiry - Averixa Technologies\n\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Phone: " + phone + "\n" +
    "Message: " + message;



    let url = 
    "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent(text);



    window.open(url,"_blank");

}




// FAQ Accordion

const faqItems = document.querySelectorAll(".faq-item");


faqItems.forEach(item => {


    const button = item.querySelector(".faq-question");


    button.addEventListener("click",()=>{


        item.classList.toggle("active");


    });


});




// Simple Scroll Animation

const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


});



document.querySelectorAll(".fade-up")
.forEach((el)=>{


observer.observe(el);


});
// =============================
// PROJECT FILTER FUNCTIONALITY
// =============================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active to clicked button
        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});
// =============================
// SCROLL REVEAL ANIMATION
// =============================

const revealElements = document.querySelectorAll(
    "section, .card, .project-card, .price-card, .about-card, .testimonial-card, .stat-box"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal-element");
    revealObserver.observe(element);
});
// =============================
// ANIMATED STATS COUNTER
// =============================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);
        const suffix = counter.dataset.suffix || "";

        let current = 0;
        const duration = 1200;
        const startTime = performance.now();

        function animateCounter(currentTime) {

            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            current = Math.floor(progress * target);

            counter.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(animateCounter);
            } else {
                counter.textContent = target + suffix;
            }
        }

        requestAnimationFrame(animateCounter);

        observer.unobserve(counter);
    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});
// =============================
// MOBILE MENU
// =============================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Close menu after clicking a navigation link
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
}