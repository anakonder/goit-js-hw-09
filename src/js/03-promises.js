function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}


function handleSubmit(e) {
  e.preventDefault(); 
  const form = e.target;
  const delayInput = form.elements.delay;
  const stepInput = form.elements.step;
  const amountInput = form.elements.amount;

  const firstDelay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

    for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const delay = firstDelay + i * step;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }

 
  form.reset();
}


const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);