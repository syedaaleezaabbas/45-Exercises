"use strict";
function make_Shirt(size = "Large", printMessage = "I love typescript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
make_Shirt();
make_Shirt("Medium");
make_Shirt("small", "I love javascript");
