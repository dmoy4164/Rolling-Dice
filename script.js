
const button = document.querySelector("button");
button.addEventListener("click", roll);
const aud = document.querySelector("audio");

function roll(){
    const num = Math.floor(Math.random()*6)+1;
    const num2 = Math.floor(Math.random()*6)+1;
    const num3 = num+num2;
    p1.innerText = "Dice 1: " + num;
    p2.innerText = "Dice 2: " + num2;
    p3.innerText = "Total: " + num3;
    aud.play();
}