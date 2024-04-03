const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat')

document.addEventListener('DOMContentLoaded',()=>{
  setInterval(showTime,1000);
});

let showTime = ()=>{
  let date = new Date();

  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();

  hrs= hrs<10 ? `0${hrs}` : hrs;
  mins= mins<10 ? `0${mins}` : mins;
  secs= secs<10 ? `0${secs}` : secs;

  time.innerHTML = `${hrs} : ${mins} : ${secs}`
  timeformat.innerHTML = hrs>12 ? "PM" : "AM";
}