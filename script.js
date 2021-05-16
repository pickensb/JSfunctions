var wrapper1Ele = document.body.querySelector(".wrapper1");
var wrapper2Ele = document.body.querySelector(".wrapper2");
var wrapper3Ele = document.body.querySelector(".wrapper3");
var wrapper4Ele = document.body.querySelector(".wrapper4");
var calcButtonEle = document.body.querySelector(".calcButton");

function rewriteFunction(){
  var inputMiles = Number(prompt("How many miles have you driven?"));
  var inputPrice = Number(prompt("What is the price of gas?"));
  
  writerFunction(inputMiles, inputPrice, 12, wrapper1Ele);
  writerFunction(inputMiles, inputPrice, 17, wrapper2Ele);
  writerFunction(inputMiles, inputPrice, 26, wrapper3Ele);
  writerFunction(inputMiles, inputPrice, 29, wrapper4Ele);
}

function writerFunction(miles,price,mpg,wrapper){
 
  var cost=(miles/mpg)*price;
  wrapper.innerHTML=("To drive a car with MPG rating of "+mpg+" for "+miles+" at $"+price+" per gallon it would cost "+cost);
}
rewriteFunction();
calcButtonEle.addEventListener("click",function(){
  rewriteFunction();
});