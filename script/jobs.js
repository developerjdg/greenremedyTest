const form = document.getElementById("jobForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const resume = document.getElementById("resume");
const position = document.getElementById("position");
const skills = document.getElementById("skills");

function showError(input, message) {
    const error = input.parentElement.querySelector(".error");
    error.textContent = message;
    input.classList.add("error-field");
}

function clearError(input) {
    const error = input.parentElement.querySelector(".error");
    error.textContent = "";
    input.classList.remove("error-field");
}

// =========================
// First Name
// =========================

function validateFirstName() {
    const value = firstName.value.trim();

    if (value === "") {
        showError(firstName, "First name is required.");
        return false;
    }

    if (value.length < 2) {
        showError(firstName, "Enter at least 2 characters.");
        return false;
    }

    clearError(firstName);
    return true;
}

// =========================
// Last Name
// =========================

function validateLastName() {
    const value = lastName.value.trim();

    if (value === "") {
        showError(lastName, "Last name is required.");
        return false;
    }

    if (value.length < 2) {
        showError(lastName, "Enter at least 2 characters.");
        return false;
    }

    clearError(lastName);
    return true;
}

// =========================
// Phone
// =========================

function validatePhone() {

    const value = phone.value.trim();
    const regex = /^[0-9]{10,15}$/;

    if (value === "") {
        showError(phone, "Phone number is required.");
        return false;
    }

    if (!regex.test(value)) {
        showError(phone, "Enter a valid phone number.");
        return false;
    }

    clearError(phone);
    return true;
}

// =========================
// Email
// =========================

function validateEmail() {

    const value = email.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {
        showError(email, "Email is required.");
        return false;
    }

    if (!regex.test(value)) {
        showError(email, "Enter a valid email.");
        return false;
    }

    clearError(email);
    return true;
}

// =========================
// Resume
// =========================

function validateResume() {

    const file = resume.files[0];

    if (!file) {
        showError(resume, "Please upload your resume.");
        return false;
    }

    const allowed = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (!allowed.includes(file.type)) {
        showError(resume, "Only PDF, DOC or DOCX files are allowed.");
        return false;
    }

    if (file.size > 5 * 1024 * 1024) {
        showError(resume, "File size must be under 5MB.");
        return false;
    }

    clearError(resume);
    return true;
}

// =========================
// Position
// =========================

function validatePosition() {

    const value = position.value.trim();

    if (value === "") {
        showError(position, "Position is required.");
        return false;
    }

    clearError(position);
    return true;
}

// =========================
// Live Validation
// =========================

firstName.addEventListener("input", validateFirstName);
lastName.addEventListener("input", validateLastName);
phone.addEventListener("input", validatePhone);
email.addEventListener("input", validateEmail);
position.addEventListener("input", validatePosition);
resume.addEventListener("change", validateResume);

// =========================
// Submit
// =========================

form.addEventListener("submit", function (e) {

    const valid =
        validateFirstName() &&
        validateLastName() &&
        validatePhone() &&
        validateEmail() &&
        validateResume() &&
        validatePosition();

    if (!valid) {
        e.preventDefault();
        return;
    }

    alert("Application submitted successfully!");
});