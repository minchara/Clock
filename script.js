const svgNS = 'http://www.w3.org/2000/svg';
const tickLayer = document.querySelector('#dial-ticks');
const numberLayer = document.querySelector('#clock-numbers');

for (let mark = 0; mark < 60; mark += 1) {
  const angle = (mark / 60) * Math.PI * 2 - Math.PI / 2;
  const major = mark % 5 === 0;
  const outerRadius = 280;
  const innerRadius = major ? 258 : 270;
  const tick = document.createElementNS(svgNS, 'line');
  tick.setAttribute('class', major ? 'tick major' : 'tick');
  tick.setAttribute('x1', (360 + Math.cos(angle) * innerRadius).toFixed(2));
  tick.setAttribute('y1', (360 + Math.sin(angle) * innerRadius).toFixed(2));
  tick.setAttribute('x2', (360 + Math.cos(angle) * outerRadius).toFixed(2));
  tick.setAttribute('y2', (360 + Math.sin(angle) * outerRadius).toFixed(2));
  tickLayer.append(tick);
}

const romanNumerals = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

for (let hour = 1; hour <= 12; hour += 1) {
  const angle = (hour / 12) * Math.PI * 2 - Math.PI / 2;
  const number = document.createElementNS(svgNS, 'text');
  number.setAttribute('x', (360 + Math.cos(angle) * 226).toFixed(2));
  number.setAttribute('y', (360 + Math.sin(angle) * 226).toFixed(2));
  if (hour % 3 === 0) number.setAttribute('class', 'major-number');
  number.textContent = romanNumerals[hour];
  numberLayer.append(number);
}

const hourHand = document.querySelector('#hour-hand');
const minuteHand = document.querySelector('#minute-hand');
const secondHand = document.querySelector('#second-hand');
const digitalTime = document.querySelector('#digital-time');

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  hourHand.setAttribute('transform', `rotate(${(hours * 30).toFixed(3)} 360 360)`);
  minuteHand.setAttribute('transform', `rotate(${(minutes * 6).toFixed(3)} 360 360)`);
  secondHand.setAttribute('transform', `rotate(${(seconds * 6).toFixed(3)} 360 360)`);
  digitalTime.dateTime = now.toISOString();
  digitalTime.textContent = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(now);

  window.requestAnimationFrame(updateClock);
}

window.requestAnimationFrame(updateClock);
