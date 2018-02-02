var wins = 0;
var losses = 0;
var addition =0;
var total = Math.floor((Math.random() * 100) + 19);
var happyNumber = Math.floor(Math.random() * 12) + 1;
var screamingNumber = Math.floor(Math.random() * 12) + 1;
var faceNumber = Math.floor(Math.random() * 12) + 1;
var woahNumber = Math.floor(Math.random() * 12) + 1;
var addition = 0;
 



var updateAdd = function () {
        $('.addition').empty();
        $('.addition').append(addition);

        $('#wins').empty();
        $('#wins').append(wins);

        $('#losses').empty();
        $('#losses').append(losses);
    }

function setScore(){
    document.getElementById("totalpoints").innerHTML = addition;
}

var generateNumber = Math.floor((Math.random() * 120) + 19);
document.getElementById("randomNumber").innerHTML = generateNumber;



$("#happy").on("click", function generateHappyNumber() {
    audio.play();
    addition = addition + happyNumber;
    setScore()
    game();

})
$("#screaming").on("click", function generateScreamingNumber() {
    audio.play();
    addition = addition + screamingNumber;
    setScore()
    game();

})
$("#face").on("click", function generateFaceNumber() {
    audio.play();
    addition = addition + faceNumber;
    setScore()
    game();

})

$("#woah").on("click", function generateWoahNumber() {
    audio.play();
    addition = addition + woahNumber;
    setScore()
    game();
})


function game() {
    // if else for wins / losses.  updates counter, calls restart function.
    if (addition === total) {
        alert("You Win!")
        wins++;
        restart()
    } else if (addition > total) {
        losses++;
        alert("You Lose!")
        restart()
    } else updateAdd();
}


// restart function
function restart() {
    addition = 0;
    total = Math.floor((Math.random() * 100) + 19);
    var happyNumber= Math.floor(Math.random() * 12) + 1;
    var screamingNumber= Math.floor(Math.random() * 12) + 1;
    var faceNumber= Math.floor(Math.random() * 12) + 1;
    var woahNumber= Math.floor(Math.random() * 12) + 1;
    
    function play() {
        var audio = document.getElementById("audio");
    }
}