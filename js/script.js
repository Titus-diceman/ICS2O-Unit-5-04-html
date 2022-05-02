/* Created by: Titus Diceman
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check servie worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit-5-03-html/sw.js", {
    scope: "/ICS2O-unit-5-03-html/",
  })
}

/**
 * This function displays the code for moive rating.
 */
function buttonClicked() {

   var Monday = document.getElementById("Monday")
   var Tuesday = document.getElementById("Wednesday")
   var Wednesday = document.getElementById("Wednesday")
   var Thursday = document.getElementById("Thursday")
   var Friday = document.getElementById("Friday")
   var Friday = document.getElementById("Saturday")
   var Saturday = document.getElementById("Saturday")
   var Sunday = document.getElementById("Sunday")
  
  if ((Tuesday.checked == true || Thursday.checked == true) || ( age >= 12 && age <= 21)) {
    document.getElementById("day").innerHTML =
    "you get a discounted price"
  } else {
    document.getElementById("day").innerHTML =
    "you have to pay normal price"
  }
}