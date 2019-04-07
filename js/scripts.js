
$(document).ready(function(){
    $("#btn1").click(function(){
        var num = Math.floor(1 + Math.random()*6);
        $("#myDiv1").html("<img src='img/dice" + num + ".png'></img>");
        if (num!==1){
            num += num;
            $("#value").text(num);
        }
        else{
            num = 0;
            $("#value").text("over");
        }
    });
});


/*
function person2(){
    $(document).ready(function(){
        $("#btn2").click(function(){
            var num = Math.floor(1 + Math.random()*6);
            $("#myDiv2").html("<img src='img/dice" + num + ".png'></img>");
        });
    });
}*/
