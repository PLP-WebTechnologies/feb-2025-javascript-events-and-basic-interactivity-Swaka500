// Button click event
document.getElementById("clickButton").addEventListener("click", function() {
    this.classList.toggle("clicked");
    this.textContent = this.classList.contains("clicked") ? "Thank you!" : "Click me again!";
});

// Hover effect on another button
document.getElementById("hoverButton").addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightcoral";
});
document.getElementById("hoverButton").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
});

// Keypress detection
document.addEventListener("keydown", function(event) {
    document.getElementById("keypressMessage").textContent = `You pressed: ${event.key}`;
});

// Secret action for double-click or long press
let pressTimer;
document.getElementById("secretArea").addEventListener("dblclick", function() {
    this.style.display = "block";
});
document.getElementById("secretArea").addEventListener("mousedown", function() {
    pressTimer = setTimeout(function() {
        document.getElementById("secretArea").style.display = "block";
    }, 1000);
});
document.getElementById("secretArea").addEventListener("mouseup", function() {
    clearTimeout(pressTimer);
});

// Change text on button click
document.getElementById("changeTextButton").addEventListener("click", function() {
    this.textContent = "Text Changed!";
});

// Image gallery click event
document.querySelectorAll(".galleryImage").forEach(function(image) {
    image.addEventListener("click", function() {
        alert("You clicked on " + this.alt);
    });
});

// Form validation
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission for validation
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let feedbackMessage = "";

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        feedbackMessage += "Please enter a valid email address.<br>";
    }

    // Password validation
    if (password.length < 8) {
        feedbackMessage += "Password must be at least 8 characters long.<br>";
    }

    // Display feedback
    document.getElementById("formFeedback").innerHTML = feedbackMessage || "Submitted successfully!";
});
