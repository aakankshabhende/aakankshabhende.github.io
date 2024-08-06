const currentDate = new Date();
const currentYear = currentDate.getFullYear();

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("current-year").innerHTML = currentYear;
});