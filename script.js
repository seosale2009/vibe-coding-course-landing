// Replace this URL with the public link to your MAX channel before publishing.
const MAX_CHANNEL_URL = "https://max.ru/";

document.querySelectorAll("[data-max-link]").forEach((link) => {
    link.href = MAX_CHANNEL_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => revealObserver.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}
