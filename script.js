
// Mobile Navigation

function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
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
