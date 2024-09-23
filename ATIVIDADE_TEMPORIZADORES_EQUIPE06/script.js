let intervalId;

document.getElementById('startInterval').addEventListener('click', () => {
    const interval = parseInt(document.getElementById('intervalInput').value);
    if (interval > 0) {
        intervalId = setInterval(() => {
            document.getElementById('output').innerHTML += 'Printando usando setInterval<br>';
        }, interval);
    }
})

document.getElementById('stopInterval').addEventListener('click', () => {
    clearInterval(intervalId);
});

document.getElementById('setTimeout').addEventListener('click', () => {
    const timeout = parseInt(document.getElementById('intervalInput').value);
    if (timeout > 0) {
        setTimeout(() => {
            document.getElementById('output').innerHTML += 'Printando usando setTimeout<br>';
        }, timeout);
    }
})
