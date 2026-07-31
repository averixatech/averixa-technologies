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