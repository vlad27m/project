const time = document.querySelector('[id="time"]');
const element = document.querySelector('[id="element"]');
const btn = document.querySelector('[id="btn"]');


function start() {
    setTimeout(trigger, time.value*1000);
  time.disabled = true;
 btn.disabled = true
}

function trigger() {
document.body.style.backgroundColor = "#AA0000";
  element.classList.toggle('hidden')
} 

function hide() {  
  document.body.style.backgroundColor = "#ffffff";
  element.classList.toggle('hidden');
  time.value = "0";
  time.disabled = false;
  btn.disabled = false
} 

hide()