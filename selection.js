"use strict";
/**
 * this JS file covers
 * 1. if ... else statement
 * 2. switch statement
 * 3. ternary operator
 *  
 * */
// get hold of the button elements and add a click event listener to each
let button1 = document.getElementById("button1"); 
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
button1.addEventListener("click", ifElse);
button2.addEventListener("click", switchSelection);
button3.addEventListener("click", ternaryOp);

// Use if ... else statement to separate weekdays from weekend days
function ifElse() {
  let today = new Date();
  let dayvalue = 7; //  today.getDay();
  let htmlStr = "<h3>Weekday vs. Weekend Day</h3>";
  // added this if for the open lab
  if (dayvalue < 0 || dayvalue > 6) {
    alert("Invalid value");
    return;
  }
  
  if (dayvalue == 0 || dayvalue == 6) {
    htmlStr += "<p>Yeah, it is a weekend day. I can take a break! </p>";
  } else {
    htmlStr += "<p>Today is a weekday. Must go to work. </p>";
  }
  document.getElementById("section1").innerHTML += htmlStr;
}

// Use switch statement to identify individual days
function switchSelection() {
  let today = new Date();
  let dayvalue = today.getDay();
  let dayname;
  let htmlStr = "<h3>What day is it today?</h3>";
  switch (dayvalue) {
  case 0:
    dayname = "Sunday";
    break;
  case 1:
    dayname = "Monday";
    break;
  case 2:
    dayname = "Tuesday";
    break;
  case 3:
    dayname = "Wednesday";
    break;
  case 4:
    dayname = "Thursday";
    break;
  case 5:
    dayname = "Friday";
    break;
  case 6:
    dayname = "Saturday"; break;
  default:
    dayname = "The day value is invalid";
  }
  htmlStr += `<p>Today is ${dayname}. </p>`;
  document.getElementById("section1").innerHTML += htmlStr;
}

function ternaryOp() {
  let today = new Date();
  let dayvalue = today.getDay();
  let htmlStr = "<h3>Weekday vs. Weekend Day</h3>";
  htmlStr =
    dayvalue == 0 || dayvalue == 6
      ? "<p>Yeah, it is a weekend day. I can take a break! </p>"
      : "<p>Today is a weekday. Must go to work. </p>";
  document.getElementById("section1").innerHTML += htmlStr;
}
