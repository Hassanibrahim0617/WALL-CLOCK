const hour = document.querySelectorAll(".hour");
const minute = document.querySelectorAll(".minute");
const second = document.querySelectorAll(".second");

var inc = 1000;
clock();
function clock() {
  const date = new Date();

  const hour = date.getHours() *30 ;
  const minute = date.getMinutes() *6;
  const second = date.getSeconds() *6;

  document.querySelector('.hour').style.transform = `rotate(${hour}deg)`;
  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
  document.querySelector('.second').style.transform = `rotate(${second}deg)`;
}
setInterval(clock, inc);
