// Cookie Functions
function setCookie(name, value, days) {

    const date = new Date();

    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;

}

function getCookie(name) {

    const cookieName = name + "=";

    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {

        cookie = cookie.trim();

        if (cookie.startsWith(cookieName)) {
            return cookie.substring(cookieName.length);
        }

    }

    return "";

}

document.addEventListener("DOMContentLoaded", async () => {

    // Already verified
    if (getCookie("ageVerified") === "true") {
        return;
    }

    // Load the Age Gate HTML
    const container = document.getElementById("agegate");

    const response = await fetch("agegate.html");

    container.innerHTML = await response.text();

    // Disable scrolling
    document.body.style.overflow = "hidden";

    // Wait until HTML is loaded
    const enterBtn = document.getElementById("enterSite");

    enterBtn.addEventListener("click", function (e) {

        e.preventDefault();

        setCookie("ageVerified", "true", 365);

        container.remove();

        document.body.style.overflow = "";

    });

});