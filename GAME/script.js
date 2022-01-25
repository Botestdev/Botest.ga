var wjs = 0;
var tmd = 0;
var vo = 0;
var an = 0;
var wjatn = 0
var chlrhwjatn = 0;
var testScreen = "";
var rksmd = true;
var dbab = false;

let c = ["가위","바위","보"]
 let a = ["가위","보","바위","가위","보"]
 let b = ["비겼","당신이 이겼","봇이 이겼","비겼","당신이 이겼"]

function aa(bb){
if(!dbab){
  dbab = true
  if(rksmd){
    rksmd = false
  let c = Math.floor(Math.random() * 3)
  if(c === 0||c === 3){
an++;
wjs++;
//비김
}else if(c === 1|| c === 4){
tmd++;
wjs++;
wjatn++;
//이김
}else if(c === 2){
vo++;
wjs++;
wjatn = wjatn - 1
//짐
}
 let x = document.getElementsByClassName("a")[0];
let  explanation =  '플레이어 : '+bb+"\n봇 : "+a[a.indexOf(bb)+c]+"\n"+b[c]+"습니다";
 let xx = document.getElementsByClassName("b")[0];
 xx.innerText =  '플레이어 : '+bb+"\n........."
 let xxx = document.getElementsByClassName("c")[0];
 /*document.getElementById("three").src = testScreen
 document.getElementById("two").src = ""
 document.getElementById("twoo").src = ""*/
setTimeout(function() {
   x.innerText = wjs+"전"+" "+tmd+"승"+" "+vo+"패"+" "+an+"무"+" 승률"+((tmd/wjs)*100).toFixed(2)+"%"
   xx.innerText =  '플레이어 : '+bb+"\n봇 : "+a[a.indexOf(bb)+c]+"\n"+b[c]+"습니다"
 xxx.innerText = "점수 : "+wjatn+"  최고점수 : "+chlrhwjatn
 /*if(a[a.indexOf(bb)+c] == "가위"){
  document.getElementsByTagName("img")[2].src = "./img/three.jpg"
      document.getElementsByTagName("img")[1].src = "./img/four.png"
 }
 if(a[a.indexOf(bb)+c] == "바위"){
  document.getElementsByTagName("img")[2].src = "./img/one.jpg"
    document.getElementsByTagName("img")[1].src = "./img/four.png"
 }
 if(a[a.indexOf(bb)+c] == "보"){
  document.getElementsByTagName("img")[2].src = "./img/two.jpg"
    document.getElementsByTagName("img")[1].src = "./img/four.png"
 }*/
 setTimeout(function() {
 rksmd = true
 },300);
 }, 200);
if(wjatn > chlrhwjatn){
  chlrhwjatn = wjatn
}
  }else if(!rksmd){
    alert("결과가 나올때 까지 기달려주세요.")
  }
  dbab = false
}
}
//https://m.cafe.naver.com/ca-fe/web/cafes/29537083/articles/33310?menuid=143&query=%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4&art=aW50ZXJuYWwtY2FmZS1hcnRpY2xlLXJlYWQtaW5DYWZlLXNlYXJjaC1saXN0.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWZlVHlwZSI6IkNBRkVfSUQiLCJhcnRpY2xlSWQiOjMzMzEwLCJpc3N1ZWRBdCI6MTYzMjE0Nzg5MTAzNiwiY2FmZUlkIjoyOTUzNzA4M30.qb_DL7sQ8vSppBh9r_Jbnv-9I9w7gbLEPJKOrqlJ2Ds

//https://youngjinmo.github.io/2020/04/change-value-by-javascript/