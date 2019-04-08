
//Business Logic
var firstPlayer;
var secondPlayer;

var randomDice=function(){
  return Math.floor(Math.random()*6)+1;
}
function IsPlaying(){
  this.roll=0;
  this.currentScore=0;
  this.globalScore=0;
  //this.round=round;
  this.playerName;
}
IsPlaying.prototype.firstRoll=function(){
  if (this.roll===1) {
    this.currentScore=0;
    alert(this.playerName+",your roll is a 1! Your turn is over!!")
  }
  else {
    this.currentScore+=this.roll;
  }
}
IsPlaying.prototype.holdBtn=function(){
  this.globalScore += this.currentScore;
  this.currentScore=0;
  alert(this.playerName+",Change player");
}
IsPlaying.prototype.theWinner=function(){
  if(this.globalScore>=100){
    alert("Bravo! "+this.playerName+",you are the winner!");
  }
}
IsPlaying.prototype.restart=function(){
  this.roll=0;
  this.currentScore=0;
  this.globalScore=0;
  this.playerName="";
}
var reset=function(){
  $(".player1").val("");
  $(".player2").val("");
}

//UI interface Logic

$(document).ready(function(){
  $("#play").click(function(event){
    event.preventDefault();
    firstPlayer= new IsPlaying(true);
    secondPlayer= new IsPlaying(false);
    var firstPlayerName=$(".player1").val();
    $("#firstPlayerName").text(firstPlayerName);

    var secondPlayerName=$(".player2").val();
    $("#secondPlayerName").text(secondPlayerName);
    firstPlayer.playerName=firstPlayerName;
    secondPlayer.playerName=secondPlayerName;
  });
  $("#playerOneTurn").click(function(event){
    firstPlayer.roll=randomDice();
    $("#dice1").text(firstPlayer.roll);
    firstPlayer.firstRoll();
    $("#current1").text(firstPlayer.currentScore);
  });
  $("#playerTwoTurn").click(function(event){
    secondPlayer.roll=randomDice();
    $("#dice2").text(secondPlayer.roll);
    secondPlayer.firstRoll();
    $("#current2").text(secondPlayer.currentScore);
  });
  $("#player1Hold").click(function(event){
    firstPlayer.holdBtn();
    $("#roundTotal1").text(firstPlayer.globalScore);
    $("#current1").empty();
    $("#dice1").empty();
    firstPlayer.theWinner();
  });
  $("#player2Hold").click(function(event){
    secondPlayer.holdBtn();
    $("#roundTotal2").text(secondPlayer.globalScore);
    $("#current2").empty();
    $("#dice1").empty();
    secondPlayer.theWinner();
  });
});