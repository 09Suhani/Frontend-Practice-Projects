const days = document.getElementById('days');
const hrs = document.getElementById('hrs');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');
 
const updateCountdown =(deadline) =>{
  const currentTime = new Date();
  const timeDifference = deadline - currentTime;  //milliseconds

  // calculate days,hrs,mins and secs from timeDifference
  let calSecs = Math.floor(timeDifference/1000) % 60;  
  let calMins = Math.floor(timeDifference/1000/60) % 60;  
  let calHrs = Math.floor(timeDifference/1000/60/60) % 24;  
  let calDays = Math.floor(timeDifference/1000/60/60/24) ; 

  const formatTime = (time) =>{
    return time < 10 ? `0${time}` : time;
  }

  days.textContent = formatTime(calDays);
  hrs.textContent = formatTime(calHrs);
  mins.textContent = formatTime(calMins);
  secs.textContent = formatTime(calSecs);

  // console.log(calDays);
}

const countDown = (targetDate) =>{
  setInterval(()=> updateCountdown(targetDate), 1000);
}

const targetDate = new Date("May 18 2024 4:00");
countDown(targetDate);