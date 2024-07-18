interface type {
  Name: string, Age: number, profession: string
}

let OBJ: type = {Name: 'Aleeza', Age: 23, profession: 'Student'};

console.log('\n Object Containing Information About Me: \n');
console.log(`My Name is: ${OBJ.Name}`);
console.log(`I am ${OBJ.Age} years old`);
console.log(`I am a ${OBJ.profession}`);