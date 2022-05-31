const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {
            timeRemaining,
            hours,
            minutes,
            seconds
        };
    };

    const updateClock = () => {
        const {timeRemaining, hours, minutes, seconds} = getTimeRemaining();

        const valueData = (data) => {
            let str;

            if (data.toString().length < 2) {
                str = `0${data}`;
            } else {
                str = data;
            }

            return str;
        };

        timerHours.textContent = valueData(hours);
        timerMinutes.textContent = valueData(minutes);
        timerSeconds.textContent = valueData(seconds);

        let timerId = setInterval(updateClock, 1000);

        if (timeRemaining < 0) {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';

            clearInterval(timerId);
        }
    };

    updateClock();
};

export default timer;