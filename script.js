
// Mobile Navigation

function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
}

const revealTargets = document.querySelectorAll(
    ".about, .facility-card, .gallery-container img, .manager-card, .contact-details"
);

revealTargets.forEach(target => target.classList.add("reveal"));

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealTargets.forEach(target => revealObserver.observe(target));
} else {
    revealTargets.forEach(target => target.classList.add("visible"));
}

// Close menu after clicking a navigation link

document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navbar").classList.remove("active");
    });
});

// WhatsApp Booking Form

document.getElementById("bookingForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const event = document.getElementById("event").value;
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "+919984888852"; // Replace with your WhatsApp number

    const whatsappMessage =
        ` Hello Shree Ram Janki Guest House & Hotel!

Name: ${name}
Phone: ${phone}
Event: ${event}
Date: ${date}
Expected Guests: ${guests}
Requirements: ${message}

I want to enquire about booking.`;

    const url = "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(whatsappMessage);

    window.open(url, "_blank");

});
