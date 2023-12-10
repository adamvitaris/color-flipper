const hexa = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");



btn.addEventListener("click", function () {
    const finalHex = [];
for (var i = 0; i < 6; i++) {
        const randomElement = hexa[Math.floor(Math.random()*hexa.length)];
        finalHex.push(randomElement);
    }
    const hexString = "#" + finalHex.join("");
    document.querySelector(".container").style.backgroundColor = hexString;
    document.querySelector(".color").innerHTML = hexString;
})