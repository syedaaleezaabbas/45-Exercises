"use strict";
let car = 'sabura';
console.log("\n----> 5 tests evaluate to true:");
// test 1:
console.log("Is car == 'sabura'? I predict True.");
console.log(car === 'sabura');
// test 2:
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');
// test 3:
console.log("Is car length of car > 4? I predict True.");
console.log(car.length > 4);
// test 4:
console.log("Is the length of car <= 6? I predict True.");
console.log(car.length <= 6);
// test 5:
console.log("Does car start with 's'? I predict True.");
console.log(car.startsWith('s'));
console.log("\n----> 5 tests evaluates to false:");
// test 1:
console.log("Is car == 'honda'? I predict False.");
console.log(car === 'honda');
// test 2:
console.log("Is car in upppercase? I predict False.");
console.log(car.toUpperCase() === car);
// test 3:
console.log("Is car === 'Sabura'? I predict False.");
console.log(car === 'Sabura');
// test 4:
console.log("Is car == 'Audi'? I predict False.");
console.log(car === 'Audi');
// test 5:
console.log("Is the length of car === 7? I predict false.");
console.log(car.length === 7);
