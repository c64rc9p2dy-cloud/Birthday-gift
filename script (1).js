// Start date: April 15, 2025 (Calculates elapsed days up to today)
const startDate = new Date('2025-04-15T00:00:00');

function updateCounter() {
    const now = new Date();
    const difference = now - startDate;

    if (difference < 0) return;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.innerText = days;
    if (hoursEl) hoursEl.innerText = hours;
    if (minutesEl) minutesEl.innerText = minutes;
    if (secondsEl) secondsEl.innerText = seconds;
}

setInterval(updateCounter, 1000);
updateCounter();
