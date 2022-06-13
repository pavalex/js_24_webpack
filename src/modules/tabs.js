export const tabs = () => {
    const tabPanel = document.querySelector('.specialisation-service');
    const tabs = document.querySelectorAll('.specialisation-service-tab');
    const tabContent = document.querySelectorAll('.service-tab');

    tabPanel.addEventListener('click', (e) => {
        if (e.target.closest('.specialisation-service-tab')) {
            const tabBtn = e.target.closest('.specialisation-service-tab');
            tabs.forEach((tab, index) => {
                if (tab === tabBtn) {
                    tab.classList.add('active');
                    tabContent[index].classList.remove('service-tab-d-none');
                } else {
                    tab.classList.remove('active');
                    tabContent[index].classList.add('service-tab-d-none');
                }
            })
        }
    });
};