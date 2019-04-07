var total1 = 0;
var total2 = 0;


function player1() {
    $(document).ready(function () {
        var score = 0;


        /*var playerInActive = function(){
            $("#btn2").click(function () {
                $("#myDiv2").text(total);
            })
        }*/
        $("#btn1").click(function () {
            var num = Math.floor(1 + Math.random() * 6);
            $("#myDiv1").html("<img src='img/dice" + num + ".png'></img>");
            if (num !== 1) {
                score += num;
                total1 = score;
                
                
                $("#value1").text(score);
                
                ($("#btn2").click(function () {

                    $("#myDiv2").text(total1);
                    disable();
                    player2();
                    enable(); //enable btn2
                }));



            } else {
                score = 0;
                $("#value1").html("<p>loser</p>");
                ($("#btn2").click(function () {

                    $("#myDiv2").text(total1=0);
                }));
                disable();
                player2();
                enable();

            }
        });

        function disable() {
            //added to disable button to enable place false instead of true
            $("#btn1").prop("disabled", true);
        }

        function enable() {
            //added to disable button to enable place false instead of true
            $("#btn3").prop("disabled", false);
        }
    });



}


function player2() {
    $(document).ready(function () {
        var score = 0;
        $("#btn3").click(function () {
            var num = Math.floor(1 + Math.random() * 6);
            $("#myDiv3").html("<img src='img/dice" + num + ".png'></img>");
            if (num !== 1) {
                score += num;
                total2 = score;

                //var array = [];
                //array.push(num);
                $("#value3").text(score); //changed from score to num so it gives un added numbers
                $("#btn4").click(function () {
                    $("#myDiv4").text(total2);
                    disable();
                    player1();
                    enable();

                });
            } else {
                score = 0;
                $("#value3").html("<p>loser</p>");
                ($("#btn4").click(function () {

                    $("#myDiv4").text(total1=0);
                }));
                disable();
                player1();
                enable();

            }
        });

        function disable() {
            //added to disable button to enable place false instead of true
            $("#btn3").prop("disabled", true);
        }

        function enable() {
            //added to disable button to enable place false instead of true
            $("#btn1").prop("disabled", false); //enable btn1
        }
    });


}
player1();

if (total1 === 100 && total2 < 100) {
    alert(" player1 Wins");
} else if (total2 === 100 && total1 < 100) {
    alert("player2 wins");
}
/*
function person2(){
    $(document).ready(function(){
        $("#btn2").click(function(){
            var num = Math.floor(1 + Math.random()*6);
            $("#myDiv2").html("<img src='img/dice" + num + ".png'></img>");
        });
    });
}*/