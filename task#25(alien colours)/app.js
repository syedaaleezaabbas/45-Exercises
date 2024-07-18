"use strict";
// Write an if statement to test whether the alien's colour is green. If it is, print a message that the player just earned 5 points.
let alien_colour = 'green';
if (alien_colour === 'green') {
    console.log("Congratulations! You just earned 5 points!");
}
// Write one version of this program that passes the if test and another that fails. (That version that fails will have no output.) 
alien_colour = "red";
if (alien_colour === "green") {
    console.log("Congratulations! You just earned 5 points!");
}
