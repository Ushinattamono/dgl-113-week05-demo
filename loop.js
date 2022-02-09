"use strict";
/**
 * this JS file covers
 * 1. while {...} loop
 * 2. do { ...} while loo
 * 3. for(){...} loop
 * 4. create a web table using an array and loop
 **/

// added for othe open lab on Tuesday
/*
let i = 1;
let sum = 0;
while (i < 5) {
  let input = prompt("enter a number please");
  let value = Number(input);
  sum += value;
  i = i + 1;
}
document.querySelector("#section1").innerHTML += `The input total is ${sum} <br>`;
document.querySelector("#section1").innerHTML += `i is : ${i}`;

i = 0;
while (i < 5) {
  let input = prompt("enter a number please");
  let value = Number(input);
  sum += value;
  i = i + 1;
}
document.querySelector("#section1").innerHTML += `The input total is ${sum}`;
document.querySelector("#section1").innerHTML += `i is : ${i}`;
*/
let sum = 0;
for (let j =0; j < 5; j++) {
  let input = prompt("enter a number please");
  let value = Number(input);
  sum += value;
}
document.querySelector("#section1").innerHTML += `The input total is ${sum}`;
document.querySelector("#section1").innerHTML += `j is : ${j}`;
for (let j =0; j < 5; j++) {
  let input = prompt("enter a number please");
  let value = Number(input);
  sum += value;
}
document.querySelector("#section1").innerHTML += `The input total is ${sum}`;

// get hold of the button elements and add a click event listener to each
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");

button1.addEventListener("click", whileloop);
button2.addEventListener("click", dowhile);
button3.addEventListener("click", forloop);
button4.addEventListener("click", webtable);
button5.addEventListener("click", webtable2);

// use a while loop to show week day index and day names
function whileloop() {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let htmlStr = "<h4>Days in a Week - while Loop</h4>";
  let i = 0;
  while (i < days.length) {
    htmlStr += "Day " + i + ": " + days[i] + ";\n";
    if (i != 0 && i % 3 == 0) htmlStr += "<br>";
    i++;
  }
  document.getElementById("section1").innerHTML += htmlStr;
}

// use a do ... while loop to show week day index and day names
function dowhile() {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let htmlStr = "<h4>Days in a Week - do ...while Loop</h4>";
  let i = 0;
  do {
    htmlStr += "Day " + i + ": " + days[i] + ";\n";
    if (i != 0 && i % 3 == 0) htmlStr += "<br>";
    i++;
  } while (i < days.length);
  document.getElementById("section1").innerHTML += htmlStr;
}

// use a for loop to show week day index and day names
function forloop() {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let htmlStr = "<h4>Days in a Week - for Loop</h4>";
  for (let i = 0; i < days.length; i++) {
    htmlStr += "Day " + i + ": " + days[i] + "\n";
    if (i != 0 && i % 3 == 0) htmlStr += "<br>";
  }
  document.getElementById("section1").innerHTML += htmlStr;
}

// use a loop to show week day index and day names in a web table
function webtable() {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let htmlStr = "<h4>Days in a Week - for Loop</h4>";
  htmlStr += "<table><tr><th>Day Number</th><th>Day Name</th><tr>";
  for (let i = 0; i < days.length; i++) {
    htmlStr += `<tr><td>${i}</td><td>${days[i]}</td></tr>\n`;
  }
  htmlStr += "</table>";
  document.getElementById("section1").innerHTML = htmlStr;
}

// use a loop to process data in an array and show result in a table
function webtable2() {
  let hours = [20, 30, 35, 25, 33, 40];
  let htmlStr = "<h4>Weekly Payroll ($20/hr.)</h4>";
  htmlStr += "<table><tr><th>Hours Worked</th><th>Pay Amount</th><tr>";
  let sum = 0;
  for (let i = 0; i < hours.length; i++) {
    let payamt = hours[i] * 20;
    sum += payamt;
    htmlStr += `<tr><td>${hours[i]}</td><td>$${payamt}</td></tr>\n`;
  }
  htmlStr += `<tr><td colspan=2>Total Payroll Amount: $${sum}</td></tr>\n`;
  htmlStr += "</table>";
  document.getElementById("section1").innerHTML = htmlStr;
}
