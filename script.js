
// Select the form from HTML
const form = document.querySelector("form");

// Detect when someone submits the form
form.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Show confirmation message
    alert("Your form is ready! Submission storage is not connected yet.");

});
