document.addEventListener('DOMContentLoaded', function() {
    
    // Set current time in UTC
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        console.log(now)
        document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
    }

    // Set current day of the week
    function updateDay() {
        const now = new Date();
        const options = { weekday: 'long' };
        const day = new Intl.DateTimeFormat('en-US', options).format(now);
        document.querySelector('[data-testid="currentDay"]').textContent = day;
    }

    updateTime();
    updateDay();
    // Set interval to update the time every second
    setInterval(updateTime, 1000);

    // Update the day at midnight
    setInterval(updateDay, 24 * 60 * 60 * 1000); // Update every 24 hours
});
