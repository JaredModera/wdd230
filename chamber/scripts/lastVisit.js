function displayMessage() {
    let lastVisit = localStorage.getItem('lastVisit');

    if (!lastVisit) {
        document.getElementById('sidebar').innerText = "Welcome! Let us know if you have any questions.";
    } else {
        let currentTime = Date.now();
        let timeDiff = currentTime - parseInt(lastVisit);
        const oneDay = 24 * 60 * 60 * 1000;

        if (timeDiff < oneDay) {
            document.getElementById('sidebar').innerText = "Back so soon! Awesome! :D";

        } else {
            let daysDiff = Math.floor(timeDiff / oneDay);
            let message = `You last visited ${daysDiff} day${(daysDiff === 1 ? '' : 's')} ago. Welcome back!`;
            document.getElementById('sidebar').innerText = message;

        }
    }

    localStorage.setItem('lastVisit', Date.now().toString());
}

displayMessage();