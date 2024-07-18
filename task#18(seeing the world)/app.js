"use strict";
// Store the locations in a array. Make sure the array is not in alphabetical order.
let favouriteplaces = ["Makkah", "Badshahi Mosque", "Neelum Valley", "Khagan Valley", "New York"];
// Print your array in its original order.
console.log("original order  " + favouriteplaces + "\n");
// Print your array in alphabetical order without modifying the actual list.
console.log("alphabetical order " + [...favouriteplaces].sort() + "\n");
// Show that your array is stiil in its original order by printing it.
console.log("original order " + favouriteplaces + "\n");
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order " + [...favouriteplaces].sort().reverse() + "\n");
// Show that your array is still in its original order by printing it again.
console.log("original order " + favouriteplaces + "\n");
// Reverse the order of your list again. Print the array to show that its order has changed.
console.log("reverse the order of list " + favouriteplaces.reverse() + "\n");
// Reverse the order of your list again. Print the list to show it's back to it's original order.
console.log("reverse the order of list " + favouriteplaces.reverse() + "\n");
// Sort your array so it's stored0 in alphabetical order. Print the array to show that it's order has changed.
console.log("alphabetical order " + favouriteplaces.sort() + "\n");
// Sort to change your array so it's stored in reverse alphabetical order. Print the list to show that it's order has changed.
console.log("alphabetical order " + favouriteplaces.sort().reverse() + "\n");
