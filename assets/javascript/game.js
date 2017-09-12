var wins = 0;
var losses = 0;
var total = 0;
var counter = 0;
var randomNumber = "";


// this generates a random number between 19 and 120 for the user to guess.
var generateNumber = Math.floor((Math.random() * 120) + 19);
// console.log(generateNumber);

// this displays the number for the user to see.
var randomNumber =
    document.getElementById("numberToGuess").innerHTML = generateNumber;


// the following are pictures that generate a number 1-12 when clicked.
$(".clickme").on("click", function() {
	counter ++;
    // console.log (counter);
    document.getElementById("clicked").innerHTML = counter;
    var firstNumber =
        Math.floor((Math.random() * 12) + 1);
     console.log(firstNumber);
    if (counter===2) {
        $(".clickme").on("click", function() {
            document.getElementById("clicked").innerHTML = counter;
            var secondNumber =
                Math.floor((Math.random() * 12) + 1);
            var total = secondNumber + firstNumber;
            console.log (total)

        })


    }
})




//             if (firstNumber === generateNumber) {
//                 alert("you win");
//             }; 
// }
// else {
//     $(".clickme").on("click", function() {
//                 var secondNumber =
//                     Math.floor((Math.random() * 12) + 1);
//                 console.log(secondNumber)
//                 var total = firstNumber + secondNumber;
//                 console.log(total)

//           } }) };