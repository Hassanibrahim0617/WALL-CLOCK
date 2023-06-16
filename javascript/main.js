 const hour = document.querySelectorAll(".hour");
const minute = document.querySelectorAll(".minute");
const second = document.querySelectorAll(".second");
var inc = 1000;

clock();

function clock() {
  const date = new Date();
  
  const hour = ((date.getHours() + 11) % 12) + 1;
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const Hour = hour * 43200;
  const Minute = minute * 3600;
  const Second = second * 60;

  document.querySelector('.hour').style.transform = `rotate(${hour}deg)`;
  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
  document.querySelector('.second').style.transform = `rotate(${second}deg)`;
}

setInterval(clock, inc);
