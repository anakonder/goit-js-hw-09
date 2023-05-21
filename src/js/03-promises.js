const delay = document.querySelector("delay");
const step = document.querySelector("step");
const amount = document.querySelector("amount");


const promise = new Promise((resolve, reject) => {
    timerId = setInterval(
    function createPromise(position, delay) {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        
      } else {
        
      }
    }, delay)
})







// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });