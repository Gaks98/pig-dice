var player1;
var player2;

var randomDice = function () {
    return Math.floor(Math.random() * 6) + 1;
}

function isPlaying() {
    this.roll = 0;
    this.currentScore = 0;
    this.totalScore = 0;
    //this.round = round;
    this.playerName;
}
isPlaying.prototype.firstRoll = function () {
    if (this.roll === 1) {
        this.currentScore = 0;
        swal("OOPS!", "Your turn is over", + this.playerName);
    } else {
        this.currentScore += this.roll;
    }
}
isPlaying.prototype.holdBtn = function () {
    this.totalScore += this.currentScore;
    this.currentScore = 0;
    alert(this.playerName + ",Change player");
}
isPlaying.prototype.theWinner = function () {
    if (this.totalScore >= 100) {
        alert("Bravo! " + this.playerName + ",you are the winner!");
    }
}
isPlaying.prototype.restart = function () {
    this.roll = 0;
    this.currentScore = 0;
    this.totalScore = 0;
    this.playerName = "";
}
var reset = function () {
    $(".player1").val("");
    $(".player2").val("");
}

// reset field
var reset = function () {
    $(".player1").val("");
    $(".player2").val("");
}

//UI interface Logic

$(document).ready(function () {
    $("#play").click(function (event) {
        event.preventDefault();
        firstPlayer = new isPlaying(true);
        secondPlayer = new isPlaying(false);
        var firstPlayerName = $(".player1").val();
        $("#firstPlayerName").text(firstPlayerName);

        var secondPlayerName = $(".player2").val();
        $("#secondPlayerName").text(secondPlayerName);
        firstPlayer.playerName = firstPlayerName;
        secondPlayer.playerName = secondPlayerName;
    });
    $("#player1Turn").click(function (event) {
        firstPlayer.roll = randomDice();
        $("#myDiv1").html("<img class='image-dices' src='img/dice" + firstPlayer.roll + ".png'></img>");
        $("#dice1").text(firstPlayer.roll);
        firstPlayer.firstRoll();
        $("#current1").text(firstPlayer.currentScore);
    });
    $("#player2Turn").click(function (event) {
        secondPlayer.roll = randomDice();
        $("#myDiv2").html("<img class='image-dices'src='img/dice" + secondPlayer.roll + ".png'></img>");
        $("#dice2").text(secondPlayer.roll);
        secondPlayer.firstRoll();
        $("#current2").text(secondPlayer.currentScore);
    });
    $("#player1Hold").click(function (event) {
        firstPlayer.holdBtn();
        $("#roundTotal1").text(firstPlayer.totalScore);
        $("#current1").empty();
        $("#dice1").empty();
        firstPlayer.theWinner();
    });
    $("#player2Hold").click(function (event) {
        secondPlayer.holdBtn();
        $("#roundTotal2").text(secondPlayer.totalScore);
        $("#current2").empty();
        $("#dice2").empty();
        secondPlayer.theWinner();
    });
});