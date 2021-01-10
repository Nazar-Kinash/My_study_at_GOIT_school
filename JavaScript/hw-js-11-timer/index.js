"use strict"

class CountdownTimer {
    constructor({
        selector,
        targetDate
    }) {
        this.selector = selector
        this.selector = selector;
        this.targetDate = targetDate;
        this.secs = document.querySelector('[data-value="secs"]');
        this.mins = document.querySelector('[data-value="mins"]');
        this.hours = document.querySelector('[data-value="hours"]');
        this.days = document.querySelector('[data-value="days"]');

        this.countdownStart = this.countdownStart.bind(this);
        this.timerId = setInterval(this.countdownStart, 1000);

    }

    countdownStart() {
        const time = this.targetDate - Date.now();
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        this.secs.textContent = secs < 10 ? '0' + secs : secs;
        this.mins.textContent = mins < 10 ? '0' + mins : mins;
        this.hours.textContent = hours < 10 ? '0' + hours : hours;
        this.days.textContent = days;
    }

}
new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 23, 2023'),
});