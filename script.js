document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#00AEEF";
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "white";
        });
    });

    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Message sent successfully!");
    });
});
