document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("health-survey-form");

    form.addEventListener("submit", function (event) {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        if (checkboxes.length < 3) {
            alert("Please select at least three priority features.");
            event.preventDefault(); // Prevent form submission
        }
    });
});
