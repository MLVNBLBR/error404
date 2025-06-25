// Buggy form.js

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default submission
    var name = document.querySelector("[name='name']").value.trim();
    var email = document.querySelector("[name='email']").value.trim();

    if (name === "") {
        alert("Name is required");
        return;
    }
    if (email.indexOf('@') === -1) {
        alert("Invalid email");
        return;
    }
    alert("Form submitted!");

});
