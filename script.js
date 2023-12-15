let slideIndex = 0;

function changeSlide(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    slideIndex += n;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Optionally, you can add auto-slide functionality
// setInterval(() => changeSlide(1), 2000); // Slide every 2 seconds
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        