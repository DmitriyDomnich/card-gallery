const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
    slide.addEventListener('click', (e) => {
        slides.forEach(slide => {
            slide.classList.remove('active');
        })
        e.target.classList.add('active');
    });
});