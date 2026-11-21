
const form = document.querySelector("form");

const fileInput = document.getElementById("fileInput");

const fileAttached = document.getElementById("fileAttached");

form.addEventListener("submit", function() {

    if (fileInput.files.length > 0) {
        fileAttached.value = "Yes";
    } else {
        fileAttached.value = "No";
    }

});
