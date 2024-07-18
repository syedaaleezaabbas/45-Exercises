function make_Shirt(size: string = "Large", printMessage: string = "I love typescript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
} 

make_Shirt()
make_Shirt("Medium")
make_Shirt("small", "I love javascript")