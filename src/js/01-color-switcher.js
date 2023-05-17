function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.body
let currentColor;
let timerId = null;

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    timerId = setInterval(() => {
        currentColor = getRandomHexColor(); +
            console.log(currentColor)
        body.style.backgroundColor = currentColor;
    }, 1000)
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerId)
    startBtn.disabled = false;
})

