const sections = document.querySelectorAll('.section-container');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

