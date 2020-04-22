var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = Number($("#reward").text());


//Winning Score: change by value of input
$("input").on('keyup mouseup', function () {
    var coins = $("#coins").val();
    $("#reward").text(coins);
    console.log($("#reward").text())
    console.log(coins)
}).trigger('mouseup');


//RESET button resets score display
$("#reset").on("click", function() {
    $("#p1Score").text(0);
    p1Score = 0;
    $("#p2Score").text(0);
    p2Score = 0;
    gameOver = false;
});


//When clicked on button Player 1 add + 1 to #p1Score
$("#p1Btn").on("click", function() {
    if(!gameOver) {
        p1Score++;
        if(p1Score === winningScore) {
            gameOver = true;
        }
        $("#p1Score").text(p1Score)
    }
});

//When clicked on button Player 2 add + 1 to #p2Score
$("#p2Btn").on("click", function() {
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            gameOver = true;
            console.log("you won !")
        }
        $("#p2Score").text(p2Score)
    }
});

$("input").change(function(){
    $("#reward").text($("input").val())
    winningScore = Number($("#reward").text());
    console.log(winningScore)
});


