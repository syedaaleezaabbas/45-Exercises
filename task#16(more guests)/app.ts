let Guest_List: string[] = ["Maham", "Noman", "Maria"];

console.log("\nNEW LIST OF INVITATION : \n");

for ( let j=0; j < Guest_List.length; j++){
    console.log(`Dear ${Guest_List[j]}: \n You are invited to dinner! \n`);
}

console.log("Good news! We've found a bigger dinner table, so more space is available. So our new guests are :\n")

Guest_List.unshift("Zaheer");
Guest_List.splice(2, 0, "Maryem");
Guest_List.push("Alina");

for ( let i=0; i < Guest_List.length; i++){
    console.log(`Dear ${Guest_List[i]}: \n You are invited to dinner! \n`);
}