import {animate} from "./helpers";

export const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.btn-service');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const widthWindow = window.innerWidth;
            modal.style.display = 'block';

            if (widthWindow > 768){
                animate({
                    duration: 500,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modal.style.opacity = progress;
                    }
                });
            }
        });
    });

    modal.addEventListener('click', (e)=> {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    });
};