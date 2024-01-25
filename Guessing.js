let secret = 7;
let answer = prompt ("Please guess the secret number (1-20)");
// Convert the string guess to an integer so that we can compare
var guess = parseInt (answer);

 if (guess === secret) {
    alert("Correct Guess!");
    // parseInt converts string a number
   if (guess !== secret ) {
    alert("Sorry, incorrect Guess!");
    

   }
}


