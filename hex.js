const hexa = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function getRandom() {
    const finalHex = [];
    for (var i = 0; i < 6; i++) {
        const randomElement = hexa[Math.floor(Math.random()*hexa.length)];
        finalHex.push(randomElement);
    }
    const hexString = "#" + finalHex.join("");
    console.log(hexString);
    return hexString;
    }

    getRandom();

    //TODO
    // Manipulate the hex.html to generate random hex codes, and make the background color 