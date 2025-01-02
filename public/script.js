window.onload = function () {
    adjustImageHeight();

    displayTime();
    setInterval(displayTime, 500);
};

window.onresize = adjustImageHeight;

function displayTime() {
    const currentDate = new Date();

    const time = currentDate.toLocaleTimeString();

    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    const date = currentDate.toLocaleDateString('en-GB', options);

    document.getElementById("current-time").innerText = time;
    document.getElementById("current-date").innerText = date.replace(' ', ', ');
}

function adjustImageHeight() {
    for (let i = 1; i <= 7; i++) {
        const contentElement = document.getElementById(`content_${i}`);
        const imgElement = document.getElementById(`img_${i}`);

        if (contentElement && imgElement) {
            const contentHeight = contentElement.offsetHeight;
            imgElement.style.height = `${contentHeight - 10}px`;
        }
    }
}