const colors = ["green", "red", "rgb(133,122,200)", "#f15025"];
const btn = document.querySelector('.btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 4);
    document.querySelector(".container").style.backgroundColor = colors[randomNumber];
    document.querySelector(".color").innerHTML = colors[randomNumber]
});

