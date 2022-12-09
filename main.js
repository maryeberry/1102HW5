var rounds;
var player;
var opponent;
var roundnum;
var randomNum;
var wins = 0;
var losses = 0;
var ties = 0;

roundnum = prompt("How many rounds would you like to play?");
rounds = parseInt(roundnum, 10);

for (i = 0; i < rounds; i++) {
    player = prompt("Rock, paper, or scissors?");

    if (player == "r" || player == "rock" || player == "Rock") {
        player = "Rock";
    } else if (player == "p" || player == "paper" || player == "Paper") {
        player = "Paper";
    } else if (player == "s" || player == "scissors" || player == "Scissors") {
        player = "Scissors";
    } else {
        alert("Invalid input. Please enter a valid choice.");
    }

    randomNum = Math.floor(Math.random() * 3);

    // alert(randomNum);

    if (randomNum == 0) {
        opponent = "Rock";
    } else if (randomNum == 1) {
        opponent = "Paper";
    } else if (randomNum == 2) {
        opponent = "Scissors";
    }

    // alert(opponent);

    if (player == "Rock" && opponent == "Scissors") {
        wins = wins + 1;
        alert("You won! " + wins + " win(s).");
    } else if (player == "Rock" && opponent == "Paper") {
        losses = losses + 1;
        alert("You lost! " + losses + " loss(es).");
    } else if (player == "Paper" && opponent == "Rock") {
        wins = wins + 1;
        alert("You won! " + wins + " win(s).")
    } else if (player == "Paper" && opponent == "Scissors") {
        losses = losses + 1;
        alert("You lost! " + losses + " loss(es).");
    } else if (player == "Scissors" && opponent == "Paper") {
        wins = wins + 1;
        alert("You won! " + wins + " win(s).");
    } else if (player == "Scissors" && opponent == "Rock") {
        losses = losses + 1;
        alert("You lost! " + losses + " loss(es).");
    } else if (player == opponent) {
        ties = ties + 1;
        alert("It's a tie! " + ties + " tie(s).");
    }
}

alert ("Your total score is " + wins + " wins, " + losses + " losses, and " + ties + " ties. Thanks for playing!a");