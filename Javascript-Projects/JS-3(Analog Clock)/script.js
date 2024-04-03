let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
  let date = new Date();

  // Getting hour, mins, secs from date
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30*hh + mm/2;
  let mRotation = 6*mm;
  let sRotation = 6*ss;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;

  
}

setInterval(displayTime, 1000);





// Calculation:-

// For hours:- 12hr = 360deg 
// 1hr = 360/12 = 30deg
// h hr = 30h
// Also, 60min = 30
// 1 min = 30/60= 1/2
// m min= m/2
// Total=> h hr = 30h+m/2

// For min:-
// 60min = 360deg
// 1min= 360/60= 6deg
// m min= 6m 

// For sec:-
// 60sec= 360deg
// 1sec = 360/60 = 6sec
// s sec= 6s