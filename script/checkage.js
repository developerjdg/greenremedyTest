document.addEventListener("DOMContentLoaded", () => {

    const ageGate = document.querySelector(".agegate");

    // If no cookie, show the age gate
    if (getCookie("ageVerified") !== "true") {

        ageGate.classList.remove("hide");
        document.body.style.overflow = "hidden";

    } else {

        ageGate.classList.add("hide");
        document.body.style.overflow = "";

    }

});