const sec = document.querySelector('.s');
const min = document.querySelector('.m');
const hour = document.querySelector('.h');
const numHour = document.querySelector('.hours');
const numMin = document.querySelector('.minutes');
const tabsItem = document.querySelectorAll('.tabsItem');
const tabsContentItem = document.querySelectorAll('.tabsContentItem');

tabsItem.forEach((el, i) => {
  el.addEventListener('click', () => {

    tabsItem.forEach((item, ind) => {
      item.classList.remove('active');
      tabsContentItem[ind].classList.remove('active');
    });


    el.classList.add('active');
    tabsContentItem[i].classList.add('active');
  })
})


let i = 360;

function start() {

  const time = new Date() // new создаем экземпляр класса Date - для работы с веременем и датой
  let seconds = time.getSeconds() * 6;
  let minutes = time.getMinutes() * 6;
  let hours = time.getHours() * 30;

  if (seconds == 0 || i > 360) {
    sec.style.transform = `rotate(${i}deg)`;
    i += 6;
  } else {
    sec.style.transform = `rotate(${seconds}deg)`;
  }

  sec.style.transition = `1s linear`;
  min.style.transform = `rotate(${minutes}deg)`;
  hour.style.transform = `rotate(${hours}deg)`;

  numMin.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
  numHour.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();

  setTimeout(() => {
    start();
  }, 1000);

}

start();


const watchSec = document.querySelector('.stopwatch__seconds');
const watchMin = document.querySelector('.stopwatch__minutes');
const watchHour = document.querySelector('.stopwatch__hours');
const watchBtn = document.querySelector('.stopwatch__btn');
const watchClock = document.querySelector('.tabsContentItem');
const tabsLink = document.querySelector('.tabsLink');
const tabsLinkSpan = document.querySelector('.tabsLink__span');

watchBtn.addEventListener('click', () => {

  if (watchBtn.innerHTML == "start") {
    watchBtn.innerHTML = "stop";
    tabsLinkSpan.classList.add('active');
    startTimer();
  }else if (watchBtn.innerHTML == "stop") {
    watchBtn.innerHTML = "clear";
    tabsLinkSpan.classList.remove('active');
    tabsLinkSpan.classList.add('active_clear');
    clearTimeout();
  }else if (watchBtn.innerHTML == "clear") {
    watchBtn.innerHTML = "start";
    tabsLinkSpan.classList.remove('active_clear');
    watchSec.innerHTML = 0;
    watchMin.innerHTML = 0;
    watchHour.innerHTML = 0;
  }

  function startTimer() {
    setTimeout(() => {
      if (watchBtn.innerHTML == "stop") {
        watchSec.innerHTML++;
        startTimer()
      }
    }, 100);
  
    if (watchSec.innerHTML > 59) {
      watchMin.innerHTML++;
  
      watchSec.innerHTML = 0;
    }
    if (watchMin.innerHTML > 59) {
      watchHour.innerHTML++;
      
      watchMin = 0
    }
    
  };

})

