//there is a max of 7 numbers generated.

var myObject = {
    wins: 0,
    losses: 0,
    happyNumber: Math.floor(Math.random() * 12 + 1),
    screamingNumber: Math.floor(Math.random() * 12 +1),
    faceNumber: Math.floor(Math.random() * 12 +1),
    woahNumber: Math.floor(Math.random() * 12 +1),
    total: 0
}




var totalScore =
    document.getElementById("totalpoints").innerHTML = total;
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
    document.getElementById("losses").innerHTML = myObject.losses;

var total = 0;


function updateTotalHappy () {
    total += myObject.happyNumber;
    console.log (total);

    if (total === generateNumber ) {
    alert("You Win!")
    wins++;
    restart()
} else if (total > generateNumber) {
    losses++;
    alert("You Lose!")
    restart()
}
}

function updateTotalScreaming () {
    total += myObject.screamingNumber;
    console.log (total);

      if (total === generateNumber ) {
    alert("You Win!")
    wins++;
    restart()
} else if (total > generateNumber) {
    losses++;
    alert("You Lose!")
    restart()
}
}

function updateTotalFace () {
    total += myObject.faceNumber;
    console.log (total);
      if (total === generateNumber ) {
    alert("You Win!")
    wins++;
    restart()
} else if (total > generateNumber) {
    losses++;
    alert("You Lose!")
    restart()
}

}

function updateTotalWoah () {
    total += myObject.woahNumber;
    console.log (total);
      if (total === generateNumber ) {
    alert("You Win!")
    wins++;
    restart()
} else if (total > generateNumber) {
    losses++;
    alert("You Lose!")
    restart()
}
}
// the following are pictures that generate a number 1-12 when clicked.
$("#happy").on("click", function generateHappyNumber() {
    audio.play();
    console.log(myObject.happyNumber);
    updateTotalHappy();

})


$("#screaming").on("click", function generateScreamingNumber() {
    audio.play();
      console.log(myObject.screamingNumber);
      updateTotalScreaming();
    
})

$("#face").on("click", function generateFaceNumber() {
     audio.play();
      console.log(myObject.faceNumber);
        updateTotalFace();
})

$("#woah").on("click", function generateWoahNumber() {
     audio.play();
      console.log(myObject.woahNumber);
      updateTotalWoah ();
   
})



// if else for wins / losses.  updates counter, calls restart function.
if (total === generateNumber ) {
    alert("You Win!")
    wins++;
    restart()
} else if (total > generateNumber) {
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