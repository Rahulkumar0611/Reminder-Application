function setReminders() {
    const day = document.getElementById('day').value;
    const reminders = [
        { activity: 'Wake Up', time: document.getElementById('wake-up-time').value },
        { activity: 'Go to Gym', time: document.getElementById('gym-time').value },
        { activity: 'Breakfast', time: document.getElementById('breakfast-time').value },
        { activity: 'Meetings', time: document.getElementById('meetings-time').value },
        { activity: 'Lunch', time: document.getElementById('lunch-time').value },
        { activity: 'Quick Nap', time: document.getElementById('nap-time').value },
        { activity: 'Go to Library', time: document.getElementById('library-time').value },
        { activity: 'Dinner', time: document.getElementById('dinner-time').value },
        { activity: 'Go to Sleep', time: document.getElementById('sleep-time').value },
    ];

    reminders.forEach(reminder => {
        if (reminder.time) {
            const reminderTime = new Date();
            const [hours, minutes] = reminder.time.split(':');
            reminderTime.setHours(hours);
            reminderTime.setMinutes(minutes);
            reminderTime.setSeconds(0);

            const now = new Date();
            const timeToReminder = reminderTime - now;

            if (timeToReminder > 0) {
                setTimeout(() => {
                    alert(`Time for ${reminder.activity}!`);
                    document.getElementById('reminder-sound').play();
                }, timeToReminder);
            }
        }
    });

    alert('Reminders are set!');
}
