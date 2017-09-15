//there is a max of 7 numbers generated.

var myObject = {
    wins: 0,
    losses: 0,
    total: 0,
    counter: 0,
    randomNumber: 0,
    happyNumber: Math.floor(Math.random() * 12 + 1),
    screamingNumber: 0,
    faceNumber: 0,
    woahNumber: 0
}
// var happyNumber = ;
// var screamingNumber = ;
// var faceNumber = ;
// var woahNumber = ;


//outputs total score
var totalScore =
    document.getElementById("totalpoints").innerHTML = 0 + this.total
// this generates a random number between 19 and 120 for the user to guess.
var generateNumber = Math.floor((Math.random() * 120) + 19);
console.log(generateNumber);

// this displays the number for the user to see.
var randomNumber =
    document.getElementById("numberToGuess").innerHTML = generateNumber;

// outputs wins
var wins =
    document.getElementById("wins").innerHTML = myObject.wins;

//outputs losses
var losses =
    document.getElementById("losses").innerHTML = myObject.losses


// the following are pictures that generate a number 1-12 when clicked.

$("#happy").on("click", function generateHappyNumber() {
    audio.play();
    console.log(myObject.happyNumber);
})


$("#screaming").on("click", function generateScreamingNumber() {
    var screamingNumber =
        Math.floor(Math.random() * 12) + 1;
    console.log(screamingNumber);
    audio.play();
})

$("#face").on("click", function generateFaceNumber() {
    var faceNumber =
        Math.floor(Math.random() * 12) + 1;
    // console.log(faceNumber);
    audio.play();
    updateTotal();
})

$("#woah").on("click", function generateWoahNumber() {
    var woahNumber =
        Math.floor(Math.random() * 12) + 1;
    // console.log(woahNumber);
    audio.play();
    updateTotal();
})



// if else for wins / losses.  updates counter, calls restart function.
if (myObject.updateTotal === myObject.randomNumber) {
    alert("You Win!")
    wins++;
    restart()
} else if (myObject.updateTotal > myObject.randomNumber) {
    losses++;
    alert("You Lose!")
    restart()
}
// restart function
function restart() {
    var myObject = {
        wins: 0,
        losses: 0,
        total: 0,
        counter: 0,
        randomNumber: 0,
        happyNumber: 0,
        screamingNumber: 0,
        faceNumber: 0,
        woahNumber: 0,
        total: 0,
    }
// audio click
function play() {
    var audio = document.getElementById("audio");
}
}