function showAlert() {
    alert("Button clicked!");
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
        return;
    }

    const responseMessage = `Thank you, ${name}! We have received your message: "${message}". We will contact you at ${email}.`;
    document.getElementById("form-response").innerText = responseMessage;
});

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function changeSlide(n) {
    slideIndex += n;
    showSlides();
}
