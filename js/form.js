// Buggy form.js
// Buggy form.js
document.querySelector("form").addEventListener("submit", function(event) {
    const name = document.querySelector("[name='name']").value;
    const email = document.querySelector("[name='email']").value;

    if (email.indexOf('@') === -1) {
        alert("Invalid email");
    }

    alert("Form submitted!");
});

const submitButton = document.querySelector("button");
submitButton.addEventListener("click", function() {
    const name = document.querySelector("[name='name']").value;
    if (name === "") {
        alert("Name is required");
    }
});
