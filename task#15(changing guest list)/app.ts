let Guest_List: string[] = ["Maham", "Noman", "Maria"];

for ( let i=0; i < Guest_List.length; i++){
    console.log(`Dear ${Guest_List[i]}: \n You are invited to dinner! \n`);
}
console.log(`"Unfortunately ${Guest_List[1]}, can't come to dinner."`);

Guest_List[1] = "Amna";

console.log("\nNEW LIST OF INVITATION : \n");

for ( let j=0; j < Guest_List.length; j++){
    console.log(`Dear ${Guest_List[j]}: \n You are invited to dinner! \n`);
}