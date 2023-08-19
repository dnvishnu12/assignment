document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const thankYouMessage = document.getElementById("thank-you-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Simulate form submission
        // In a real application, you would handle the form submission using AJAX or a backend script

        // Display the thank you message
        thankYouMessage.style.display = "block"; // Show the thank-you message
        thankYouMessage.innerHTML = "<p>Thank you for your submission!</p>";
        form.reset(); // Reset the form after submission
    });
});
