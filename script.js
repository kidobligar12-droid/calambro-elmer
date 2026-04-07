
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

function hireMe() {
    window.location.href = "contact.html";
}

function validateForm() {
    let name = document.forms["form"]["nalet email = document.forms["form"]["email"].value;
    let msg = document.forms["form"]["message"].value;

    if (name === "" || email === "" || msg === "") {
        alert("Please fill all fields!");
        return false;
    }
    alert("Message sent!");
    return true;
}