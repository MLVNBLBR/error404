document.querySelector("form").addEventListener("submit", function(event) {
    var name = document.querySelector("[name='name']").value;
    var email = document.querySelector("[name='email']").value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Invalid email");
        event.preventDefault(); // Stop form submission
        return;
    }

    if (name === "") {
        alert("Name is required");
        event.preventDefault(); // Stop form submission
        return;
    }

    alert("Form submitted!");
});

// Removed button click listener to prevent duplicate alerts
