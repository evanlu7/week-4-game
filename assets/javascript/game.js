var wins=0;
var losses=0;
var total=0;
var counter=0;
var randomNumber= "";

$(".happy").on("click", function() {
  counter++;
  console.log (counter);
  document.getElementById("clicked").innerHTML=counter;

});

$(".screaming").on("click", function() {
  counter++;
  console.log (counter);
  document.getElementById("clicked").innerHTML=counter;
});

$(".face").on("click", function() {
  counter++;
  console.log (counter);
  document.getElementById("clicked").innerHTML=counter;
}); 

$(".woah").on("click", function() {
  counter++;
  console.log (counter);
  document.getElementById("clicked").innerHTML=counter;
});

var generateNumber = Math.floor((Math.random() * 120) +19);
console.log(generateNumber);

var randomNumber = 
document.getElementById("numberToGuess").innerHTML=generateNumber;





