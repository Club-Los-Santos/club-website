// script.js
function typeDescription() {
    var element = document.getElementById("description");
    var text = element.innerHTML;
    element.innerHTML = "";

    var i = 0;
    var speed = 50; // Adjust typing speed (milliseconds)

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Trigger the typing animation when the window finishes loading
window.onload = function() {
    typeDescription();
};
