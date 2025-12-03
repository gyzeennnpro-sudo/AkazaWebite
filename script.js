// ===============================
// Helper: Restart Animation
// ===============================
function restartAnimation(el) {
    el.style.animation = "none";
    void el.offsetWidth; // trigger reflow
    el.style.animation = "";
}



// ===============================
// OBSERVER 1 — Reset Animasi Akaza & Zenitsu
// ===============================
const observerReset = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            const section = entry.target;

            // Reset AKAZA letters
            if (section.classList.contains("akaza-bg")) {
                const letters = section.querySelectorAll(".title span");
                letters.forEach(el => restartAnimation(el));
            }

            // Reset ZENITSU running images
            if (section.classList.contains("zenitsu-bg")) {
                const imgs = section.querySelectorAll(".runing-up img, .runing-down img");
                imgs.forEach(el => restartAnimation(el));
            }
        }
    });
}, {
    root: null,
    rootMargin: "-50px 0px -50px 0px",
    threshold: 0
});



// ===============================
// OBSERVER 2 — PopInZ (scale + translateZ)
// ===============================
const observerPop = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, { threshold: 0.25 });



// ===============================
// ON PAGE LOAD — Daftarkan semua target
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    // Observe AKAZA
    const akazaSection = document.querySelector(".akaza-bg");
    if (akazaSection) observerReset.observe(akazaSection);

    // Observe ZENITSU
    const zenitsuSection = document.querySelector(".zenitsu-bg");
    if (zenitsuSection) observerReset.observe(zenitsuSection);

    // Observe pop content
    const zenitsuContent = document.querySelector(".zenitsu-content");
    if (zenitsuContent) observerPop.observe(zenitsuContent);
});
