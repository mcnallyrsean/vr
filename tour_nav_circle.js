var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');

document.querySelector("#nav1").addEventListener("click", function() {
  one.setAttribute("visible", true);
  two.setAttribute("visible", false);
  three.setAttribute("visible", false);
  four.setAttribute("visible", false);
  five.setAttribute("visible", false);
  six.setAttribute("visible", false);
  seven.setAttribute("visible", false);
  eight.setAttribute("visible", false);
  nine.setAttribute("visible", false);
});

document.querySelector("#nav2").addEventListener("click", function() {
  one.setAttribute("visible", false);
  two.setAttribute("visible", true);
  three.setAttribute("visible", false);
  four.setAttribute("visible", false);
  five.setAttribute("visible", false);
  six.setAttribute("visible", false);
  seven.setAttribute("visible", false);
  eight.setAttribute("visible", false);
  nine.setAttribute("visible", false);
});

document.querySelector("#nav3").addEventListener("click", function() {
  one.setAttribute("visible", false);
  two.setAttribute("visible", false);
  three.setAttribute("visible", true);
  four.setAttribute("visible", false);
  five.setAttribute("visible", false);
  six.setAttribute("visible", false);
  seven.setAttribute("visible", false);
  eight.setAttribute("visible", false);
  nine.setAttribute("visible", false);
});

document.querySelector("#nav4").addEventListener("click", function() {
  one.setAttribute("visible", false);
  two.setAttribute("visible", false);
  three.setAttribute("visible", false);
  four.setAttribute("visible", true);
  five.setAttribute("visible", false);
  six.setAttribute("visible", false);
  seven.setAttribute("visible", false);
  eight.setAttribute("visible", false);
  nine.setAttribute("visible", false);
});

document.querySelector("#nav5").addEventListener("click", function() {
  one.setAttribute("visible", false);
  two.setAttribute("visible", false);
  three.setAttribute("visible", false);
  four.setAttribute("visible", false);
  five.setAttribute("visible", true);
  six.setAttribute("visible", false);
  seven.setAttribute("visible", false);
  eight.setAttribute("visible", false);
  nine.setAttribute("visible", false);
});

document.querySelector("#nav6").addEventListener("click", function() {
  one.setAttribute("visible", false);
  two.setAttribute("visible", false);
  three.setAttribute("visible", false);
  four.setAttribute("visible", false);
  five.setAttribute("visible", false);
  six.setAttribute("visible", true);
  seven.setAttribute("visible", false);
  eight.setAttribute("visible", false);
  nine.setAttribute("visible", false);
});

document.querySelector("#nav7").addEventListener("click", function() {
  one.setAttribute("visible", false);
  two.setAttribute("visible", false);
  three.setAttribute("visible", false);
  four.setAttribute("visible", false);
  five.setAttribute("visible", false);
  six.setAttribute("visible", false);
  seven.setAttribute("visible", true);
  eight.setAttribute("visible", false);
  nine.setAttribute("visible", false);
});

document.querySelector("#nav8").addEventListener("click", function() {
  one.setAttribute("visible", false);
  two.setAttribute("visible", false);
  three.setAttribute("visible", false);
  four.setAttribute("visible", false);
  five.setAttribute("visible", false);
  six.setAttribute("visible", false);
  seven.setAttribute("visible", false);
  eight.setAttribute("visible", true);
  nine.setAttribute("visible", false);
});
document.querySelector("#nav9").addEventListener("click", function() {
  one.setAttribute("visible", false);
  two.setAttribute("visible", false);
  three.setAttribute("visible", false);
  four.setAttribute("visible", false);
  five.setAttribute("visible", false);
  six.setAttribute("visible", false);
  seven.setAttribute("visible", false);
  eight.setAttribute("visible", false);
  nine.setAttribute("visible", true);
});
