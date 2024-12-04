$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        } // End if
    });
});

////////////////////////////////////////////////////////////////////////////////////

function validateForm(event) {
    event.preventDefault(); // لمنع إعادة تحميل الصفحة
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Reset error message
    errorMessage.style.display = "none";

    // Check if fields are empty
    if (!name) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Please enter your name.";
        return;
    }

    if (!email) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Please enter your email.";
        return;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }

    if (!message) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Please type your message.";
        return;
    }

    // If validation passes
    alert("Form submitted successfully!");
}
