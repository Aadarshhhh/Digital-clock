let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let day = document.getElementById('day');
let date = document.getElementById('date');
let month = document.getElementById('month');
let year = document.getElementById('year');

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function getTime(){
    
    let now = new Date();

    let nowHours = now.getHours();
    let nowMinutes = now.getMinutes();
    let nowSeconds = now.getSeconds();

    let nowDay  = weekday[now.getDay()];
    let nowDate = now.getDate();
    let nowMonth = now.getMonth()+1;
    let nowYear = now.getFullYear();


    hours.textContent = nowHours<10?`0${nowHours}`:nowHours;
    minutes.textContent = nowMinutes<10?`0${nowMinutes}`:nowMinutes;
    seconds.textContent = nowSeconds<10?`0${nowSeconds}`:nowSeconds;

    day.textContent = nowDay<10?`0${nowDay}`:nowDay;
    date.textContent = nowDate<10?`0${nowDate}`:nowDate;
    month.textContent = nowMonth<10?`0${nowMonth}`:nowMonth;
    year.textContent = nowYear<10?`0${nowYear}`:nowYear;
}
getTime();
setInterval(getTime, 1000);
