let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let oneNumber of numbers) {
    let ordinalEndng: string
    if (oneNumber === 1){
        ordinalEndng = "st"
    } else if (oneNumber === 2){
        ordinalEndng = "nd"
    } else if (oneNumber === 3){
        ordinalEndng = "rd"
    } else {ordinalEndng = "th"}
    console.log(`${oneNumber}${ordinalEndng}`);
}