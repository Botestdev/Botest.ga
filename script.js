var Target = document.getElementById("clock");
var Target_apm = document.getElementById("apm");
function countDown() {
  const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
  let countDown = new Date('Jan 01, 2022 00:00:00').getTime(), now = new Date().getTime();
  timeTo = countDown - now;
  d = Math.floor(timeTo / (day)) + '일 ' , h = Math.floor((timeTo % (day)) / (hour)) + '시간 ' , m = Math.floor((timeTo % (hour)) / (minute)) + '분 ' , s = Math.floor((timeTo % (minute)) / second) + '초 ';
  return d + h + m + s + '남음';
}