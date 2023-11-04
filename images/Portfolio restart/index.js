function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener("scroll", function () {
    const skillsSection = document.getElementById("skills");
    if (isElementInViewport(skillsSection)) {
        skillsSection.style.opacity = 1;
        skillsSection.style.transform = "translateY(0)";
    }
});

function scrollToSection(sectionId) {
    const element = document.querySelector(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// Add click event listeners to navigation links
document.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute("href");
        scrollToSection(sectionId);
    });
});

//Make nav bar sticky?