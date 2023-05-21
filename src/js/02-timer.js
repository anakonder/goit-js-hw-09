import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateInput = document.querySelector("#datetime-picker")
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      startBtn.disabled = true; 
      window.alert("Please choose a date in the future");
    } else {
      startBtn.disabled = false;
    }
    console.log(selectedDate);
  },
};

const pickrTime = flatpickr(dateInput, options);
const startBtn = document.querySelector("[data-start]");



class CountDownTimer {
constructor({selector, targetDate}) {
  this.targetDate = targetDate,
  this.daysSpan = document.querySelector(`${selector} [data-days]`)
  this.hoursSpan = document.querySelector(`${selector} [data-hours]`)
  this.minutesSpan = document.querySelector(`${selector} [data-minutes]`)
  this.secondsSpan = document.querySelector(`${selector} [data-seconds]`)
  
  }
  
  updateMarkup() {
    setInterval(() => {
        const currentTime = Date.now();
        const delta = this.targetDate - currentTime
        const { days, hours, minutes, seconds } = this.convertMs(delta)
        this.daysSpan.textContent = days
        this.hoursSpan.textContent = hours
        this.minutesSpan.textContent = minutes
        this.secondsSpan.textContent = seconds
        console.log("new interval")
      }, 1000)
    

  }

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
  }
}




startBtn.addEventListener("click", () => {
  
  const timer = new CountDownTimer({
    selector: ".timer",
    targetDate: pickrTime.selectedDates[0],
  })
  startBtn.disabled = true;
  timer.updateMarkup();
  
})