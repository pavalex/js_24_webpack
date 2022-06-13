export const menu = () => {
    const menu = document.querySelector('menu');
    const menuItems = document.querySelectorAll('.header-menu>.header-item>a');

    document.addEventListener('click', (e) => {

        if (e.target.closest('.menu-burger') || e.target.closest('menu')) {
            e.preventDefault();
            menu.classList.add('active-menu');
        } else {
            menu.classList.remove('active-menu');
        }

        if (e.target.closest('.close-btn') || e.target.matches('.header-menu>.header-item>a')) {
            e.preventDefault();
            menu.classList.remove('active-menu');
        }

    });

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
};