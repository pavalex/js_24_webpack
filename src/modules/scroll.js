export const scroll = () => {
    const menuItems = document.querySelectorAll('.header-link');
    const headerContent = document.querySelector('.header-content');
    const buttonUp = document.querySelector('.up');
    const specialisationSection = document.querySelector('.specialisation');

    const heightHeaderWrapper = headerContent.offsetHeight;
    const servicesSectionTop = specialisationSection.offsetTop;

    // Топ меню - скролл
    for (let anchor of menuItems) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute('href');

            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    // Плавный скролл
    window.addEventListener('scroll',(e) =>{
        e.preventDefault();

        let scrollTop = window.scrollY;

        if (scrollTop >= servicesSectionTop - heightHeaderWrapper) {
            buttonUp.style.display = 'flex';
        } else {
            buttonUp.style.display = 'none';
        }
    });

    buttonUp.addEventListener('click', () => {
        window.scrollTo({
            behavior: "smooth",
            left: 0,
            top: 0,
        });
    });
};