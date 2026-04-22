
// navbar.js - injects a common navigation bar into all pages
document.addEventListener("DOMContentLoaded", function() {
    const navbarHTML = `
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="professional.html">Professional</a></li>
            <li><a href="personal.html">Personal</a></li>
        </ul>
    </nav>`;
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});
