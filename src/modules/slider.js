export const slider = () => {
    const sliderBlock = document.querySelector('.reviews-slider');
    const slides = document.querySelectorAll('.reviews-item');
    const reviewsSliderEllipse = document.querySelector('.reviews-slider-ellipse');

    const timeInterval = 3000;
    let currentSlide = 0;
    let interval;

    for (let i = 0; i < slides.length; i++) {
        const liElem = document.createElement('li');
        liElem.classList.add('dot');
        reviewsSliderEllipse.append(liElem);
    }

    const dots = document.querySelectorAll('.dot');

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'reviews-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide, 'reviews-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    };

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot')) {
            return;
        }

        prevSlide(slides, currentSlide, 'reviews-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'reviews-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    });

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true);

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval);
        }
    }, true);

    startSlide(timeInterval);
};