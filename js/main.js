const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const ref = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let interval = null;

const onStart = () => {
    interval = setInterval(() => {
        ref.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
  
    }, 1000);
    ref.start.removeEventListener('click', onStart)
};
const onStop = () => {
    clearInterval(interval)
    ref.start.addEventListener('click', onStart);
};


ref.start.addEventListener('click', onStart);
ref.stop.addEventListener('click', onStop);