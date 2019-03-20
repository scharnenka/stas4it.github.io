////////////////
//    MENU
////////////////
let ulMenu = document.querySelector('header .navigation .menu');
let pull = document.querySelector('#pull');
let flag = true;

pull.onclick = (e) => {
  if (flag) {
    ulMenu.classList.add('hide');
    flag = !flag;
  } else {
    ulMenu.classList.remove('hide');
    flag = !flag;
  }
};

if (window.innerWidth < 768) pull.onclick();

window.onresize = () => {
  if (window.innerWidth > 768 && !flag) {
    ulMenu.classList.remove('hide');
  } else if (!flag) {
    ulMenu.classList.add('hide');
  }
};

////////////////
//    SLIDER
////////////////
let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let controls = document.createElement('div');

setInterval(nextSlide,5000);
controls.setAttribute('class', 'controls');

for(let i = 0, len = slides.length; i < len; i++){
  let btn = document.createElement('span');
  btn.setAttribute('class', 'btn');
  controls.appendChild(btn);
}

document.querySelector('#slides').appendChild(controls);
controls = document.querySelectorAll('.controls .btn');
controls[0].className = 'btn active';

function nextSlide() {
  slides[currentSlide].className = 'slide';
  controls[currentSlide].className = 'btn';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide showing';
  controls[currentSlide].className = 'btn active';
}
