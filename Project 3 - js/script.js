function showAlert() {
    alert("Button clicked!");
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    const responseMessage = `Thank you, ${name}! We have received your message: "${message}". We will contact you at ${email}.`;
    document.getElementById("form-response").innerText = responseMessage;
});
