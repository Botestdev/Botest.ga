 const second = 1000
const minute = second * 60
 const hour = minute * 60
 const day = hour * 24;
 const year = day * 365;
function printsTime() {
var clock = document.getElementById("clocks");
       let countDown = new Date('Jan 01, '+document.getElementById("cc").value+' 00:00:00').getTime()
  now = new Date().getTime();
  timeTo = countDown - now;
  y = Math.floor(timeTo / (year)) + '년 '
  d = Math.floor((timeTo % (year)) / day) + '일 '
  h = Math.floor((timeTo % (day)) / (hour)) + '시간 '
   m = Math.floor((timeTo % (hour)) / (minute)) + '분 '
   s = Math.floor((timeTo % (minute)) / second) + '초 ';
var nowTime = document.getElementById("cc").value+"년까지 " + y + d + h + m + s + '남음';
clock.innerHTML = nowTime;           
setTimeout("printsTime()",1000);        
}
function printTime() {
  var clock = document.getElementById("clock");
  now = new Date();
  var msg = "현재시각 : "+now.getHours()+"시 "
        msg += now.getMinutes()+"분 ";
        msg += now.getSeconds()+"초";
clock.innerHTML = msg;
setTimeout("printTime()",1000);            
}
window.onload = function() {                         
printsTime();
printTime();
}