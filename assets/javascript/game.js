var wins = 0;
var losses = 0;
var total = happyNumber + screamingNumber + faceNumber + woahNumber;
var counter = 0;
var randomNumber = "";
var happyNumber = "";
var screamingNumber = "";
var faceNumber = "";
var woahNumber = "";

console.log(total)
// random saved code
// counter++;
// document.getElementById("clicked").innerHTML = counter;

// this generates a random number between 19 and 120 for the user to guess.
var generateNumber = Math.floor((Math.random() * 120) + 19);
// console.log(generateNumber);

// this displays the number for the user to see.
var randomNumber =
    document.getElementById("numberToGuess").innerHTML = generateNumber;


// the following are pictures that generate a number 1-12 when clicked.
$("#happy").on("click", function generateHappyNumber() {
    var happyNumber =
        Math.floor(Math.random() * 12) + 1;
    console.log(happyNumber);
})


$("#screaming").on("click", function generateScreamingNumber() {
    var screamingNumber =
        Math.floor(Math.random() * 12) + 1;
    console.log(screamingNumber);
})

$("#face").on("click", function generateFaceNumber() {
    var faceNumber =
        Math.floor(Math.random() * 12) + 1;
    console.log(faceNumber)
})

$("#woah").on("click", function generateWoahNumber() {
    var woahNumber =
        Math.floor(Math.random() * 12) + 1;
    console.log(woahNumber)
})

