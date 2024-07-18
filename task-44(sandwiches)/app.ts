function makeSandwich(...items: string[]) {
    console.log("\n Making a sandwich with the following items: \n");
    items.forEach(sigleItem => 
        console.log(sigleItem)
    )
    console.log("\nNow enjoy Sandwich");
}

makeSandwich("Bread", "Butter")
makeSandwich("Chicken", "Cheese", "Egg")
makeSandwich("Bread", "Butter","Chicken", "Tomato", "Cheese", "Egg", "Mayo")

