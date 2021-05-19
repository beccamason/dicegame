let roll1 = 0;
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const dice4 = document.getElementById("dice4");
const dice5 = document.getElementById("dice5");
const dice6 = document.getElementById("dice6");
const button = document.getElementById("roll");
const loser = document.getElementById("loser");
const winner = document.getElementById("winner");
let x = 0

dice1.style.display = "none";
dice2.style.display = "none";
dice3.style.display = "none";
dice4.style.display = "none";
dice5.style.display = "none";
dice6.style.display = "none";

if (roll1 == 0) {
    loser.style.display = "none";
}
else {
    loser.style.display = "block";
}
if (x < 20) {
    winner.style.display = "none";
}
else {
    winner.style.display = "block";
    x = 0;
}

button.addEventListener("click", () =>{
    roll1 = parseInt(Math.ceil(Math.random() * 6));
    console.log(roll1);
    if (roll1 == 1) {
        loser.style.display = "block";
        x = 0
    }
    else {
        loser.style.display = "none";
        x += roll1;
        console.log(x);
    }
    document.getElementById("roll1").innerHTML = roll1;
    document.getElementById("score").innerHTML = x;
    if (x < 20) {
        winner.style.display = "none";
    }
    else {
        winner.style.display = "block";
        x = 0;
    }

    switch(true){
        case (roll1 == 1): 
            dice1.style.display = "block";
            dice2.style.display = "none";
            dice3.style.display = "none";
            dice4.style.display = "none";
            dice5.style.display = "none";
            dice6.style.display = "none";
            break;
        case (roll1 == 2):
            dice1.style.display = "none";
            dice2.style.display = "block";
            dice3.style.display = "none";
            dice4.style.display = "none";
            dice5.style.display = "none";
            dice6.style.display = "none";
            break;
        case (roll1 == 3): 
            dice1.style.display = "none";
            dice2.style.display = "none";
            dice3.style.display = "block";
            dice4.style.display = "none";
            dice5.style.display = "none";
            dice6.style.display = "none";
            break;
        case (roll1 == 4):
            dice1.style.display = "none";
            dice2.style.display = "none";
            dice3.style.display = "none";
            dice4.style.display = "block";
            dice5.style.display = "none";
            dice6.style.display = "none";
            break;
        case (roll1 == 5): 
            dice1.style.display = "none";
            dice2.style.display = "none";
            dice3.style.display = "none";
            dice4.style.display = "none";
            dice5.style.display = "block";
            dice6.style.display = "none";
            break;
        case (roll1 == 6):
            dice1.style.display = "none";
            dice2.style.display = "none";
            dice3.style.display = "none";
            dice4.style.display = "none";
            dice5.style.display = "none";
            dice6.style.display = "block";
            break;
        default:
            dice1.style.display = "none";
            dice2.style.display = "none";
            dice3.style.display = "none";
            dice4.style.display = "none";
            dice5.style.display = "none";
            dice6.style.display = "none";
            break;
    }
})
