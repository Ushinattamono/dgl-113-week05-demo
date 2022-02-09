"use strict";
/**
 * This JS file shows how to use setInterval() and setTimeout()
 *  */
// preparation - let buttons respond to click event
let button1 = document.getElementById("button1");
button1.addEventListener("click", timeout);

let button2 = document.getElementById("button2");
button2.addEventListener("click", timeInterval);

/* function definitions */

// event handler when button1 is clicked
function timeout() {
  document.getElementById("section1").innerHTML = "Please wait ...";
  setTimeout(timeOutCallback, 5000); // after 5 seconds, call the function doSomething
}

/**
 * callback function for setTimeout()
 */
function timeOutCallback() {
  let ele = document.getElementById("section1");
  ele.innerHTML = "<h1>Time is up!</h1>"; // Just show a message, but you can do more.
}

/// event handler when button2 is clicked
function timeInterval() {
  let ele = document.getElementById("section1");

  // peroidically call intervalCallback function once a second
  let timer = setInterval(intervalCallback, 1000);

  // this function is a local function of the timeInterval function
  function intervalCallback() {

    // when the function is called, it will show the seconds in the current minute
    let myDate = new Date();
    let seconds = myDate.getSeconds();
    ele.innerHTML = `<h1>Seconds in the minute:<br>${seconds}</h1>`;
    // if the current minutes is over, stop the timer
    if (seconds >= 59) {
      clearInterval(timer); // stop the timer
      ele.innerHTML +=
        "<h1>Done!</h1> <h3>You may start another batch of operations such as calling a function, etc.</h3>";
    }
  }
}
