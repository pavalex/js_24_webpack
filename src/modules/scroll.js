const scroll = () => {
    const menuItems = document.querySelectorAll('.header-link');

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

export default scroll;