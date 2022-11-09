let skillsSec = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".our-skills .progress span");
let statsSec = document.querySelector(".stats");
let allNums = document.querySelectorAll(".stats .number");
let check = true;

function generate(element) {
  let counter = setInterval(() => {
    element.textContent++;
    if (element.textContent === element.dataset.number) clearInterval(counter);
  }, 2000 / element.dataset.number)
}
window.onscroll = function () {
  if (window.scrollY >= skillsSec.offsetTop - 300) {
    spans.forEach((item) => {
      item.style.width = item.dataset.fill;
    })
  }
  if (window.scrollY >= statsSec.offsetTop - 500) {
    if (check) allNums.forEach(item => generate(item));
    check = false;
  }
}
// Events Counter
let longDate = new Date(2022, 11, 31, 12, 59, 59).getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let remainderMill = longDate - dateNow;

  let days = Math.floor(remainderMill / (1000 * 60 * 60 * 24));
  let hours = Math.floor(remainderMill % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(remainderMill % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(remainderMill % (1000 * 60) / 1000);

  document.querySelector('.events .days').textContent = days < 10 ? `0${days}` : days;
  document.querySelector('.events .hours').textContent = hours < 10 ? `0${hours}` : hours;
  document.querySelector('.events .minutes').textContent = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector('.events .seconds').textContent = seconds < 10 ? `0${seconds}` : seconds;

  if (remainderMill < 0) clearInterval(counter);

}, 1000);