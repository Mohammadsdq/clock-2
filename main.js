const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function rotateTime() {
  const date = new Date()
  const h = date.getHours() % 12;
  const m = date.getMinutes();
  const s = date.getSeconds();

  const hRotate = (h * 30) + (m / 2);
  const mRotate = (m * 6) + (s / 10);
  const sRotate = s * 6;

  hourHand.style.transform = `translateX(-50%) rotate(${hRotate}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${mRotate}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${sRotate}deg)`;
};

setInterval(rotateTime, 1000);
