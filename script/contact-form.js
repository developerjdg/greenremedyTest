const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

function showError(input, message) {
    const error = input.nextElementSibling;
    error.textContent = message;
    input.classList.add("error-field");
}

function clearError(input) {
    const error = input.nextElementSibling;
    error.textContent = "";
    input.classList.remove("error-field");
}

function validateName() {
    const value = nameInput.value.trim();

    if (value === "") {
        showError(nameInput, "Please enter your name.");
        return false;
    }

    if (value.length < 2) {
        showError(nameInput, "Name must be at least 2 characters.");
        return false;
    }

    clearError(nameInput);
    return true;
}

function validateEmail() {
    const value = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {
        showError(emailInput, "Please enter your email.");
        return false;
    }

    if (!regex.test(value)) {
        showError(emailInput, "Please enter a valid email.");
        return false;
    }

    clearError(emailInput);
    return true;
}

function validateMessage() {
    const value = messageInput.value.trim();

    if (value === "") {
        showError(messageInput, "Please enter your message.");
        return false;
    }

    if (value.length < 10) {
        showError(messageInput, "Message must be at least 10 characters.");
        return false;
    }

    clearError(messageInput);
    return true;
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
messageInput.addEventListener("input", validateMessage);

form.addEventListener("submit", function (e) {
    const valid =
        validateName() &
        validateEmail() &
        validateMessage();

    if (!valid) {
        e.preventDefault();
    }
});