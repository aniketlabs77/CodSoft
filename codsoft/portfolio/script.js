var form = document.getElementById("contactForm");
var statusText = document.getElementById("form-status");

if (form && statusText) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var nameValue = document.getElementById("fullName").value;
        var emailValue = document.getElementById("email").value;
        var messageValue = document.getElementById("message").value;

        if (nameValue === "" || emailValue === "" || messageValue === "") {
            statusText.textContent = "Please fill name, email and message.";
            statusText.style.color = "#f97316";
        } else {
            statusText.textContent = "Form submitted .";
            statusText.style.color = "#22c55e";
            form.reset();
        }
    });
}