var Target = document.getElementById("clock");
var Target_apm = document.getElementById("apm");
function clock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var AmPm ="AM";
    if(hours > 12){   
        var AmPm ="PM";
        hours %= 12;
    }

    Target.innerText = 
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    Target_apm.innerText = `${AmPm}`;

}
clock();
setInterval(clock, 1000);



var Target2 = document.getElementById("countDown");
var Target_apm2 = document.getElementById("apm2");
function countDown() {
  const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
  let countDown = new Date('Jan 01, 2022 00:00:00').getTime(), now = new Date().getTime();
  timeTo = countDown - now;
  d = Math.floor(timeTo / (day)) + '일 ' , h = Math.floor((timeTo % (day)) / (hour)) + '시간 ' , m = Math.floor((timeTo % (hour)) / (minute)) + '분 ' , s = Math.floor((timeTo % (minute)) / second) + '초 ';
  return d + h + m + s + '남음';
}



const se = document.createElement('script');
se.src = 'https://ipinfo.io?callback=callback';
document.body.appendChild(se);
document.body.removeChild(se);

function callback(data) {
    document.getElementById('client-ip').textContent = data.ip;
}