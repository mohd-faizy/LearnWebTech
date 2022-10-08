// ================================Problem=======================================
/* Write a JS Program to generate a Random Number and store it in a variable. the
   Program then take an input from the user to them whether the guess was correct
   , greater or lesser than the original number?*/

/* 100 - (number of guesses) is  the score of the user, the program is expected to
   terminate once the user guessed the number correctly) */

/* The Number should be between 1 - 100*/ 
// ==============================================================================
// ===============================[Approch-1]====================================


console.log("JS GAME: Guess the Correct Number Correctly.\n"); // Print this

let range = Number.parseInt(prompt("Enter the upper limit of the number to generate"));

// A random whole number between 1 and 100
let num = (Math.random() * range) + 1;
num = Math.floor(num);
// settng up the Counter and number of chances
let counter = 1;
let chance = Math.floor(range / 10);
console.log(`You Have total ${chance} chances to guess the number`);

// Main logic
while (true) {
  let guessed_num = Number.parseInt(prompt("Guess the number:"));
  if (num > guessed_num) {
    console.log("\nThe Number generated is greater");
    counter++;
  }
  else if (num < guessed_num) {
    console.log("\nThe Number generated is smaller");
    counter++;
  }
  else {
    console.log(`\nYou guessed the correct number in ${counter} chances :)`);
    counter++;
    break;
  }
  if (counter === chance) {
    console.log("\nYour Chances are Over. Try Again :(");
    break;
  }
}


// ===============================[Approch-2]====================================
let a = Math.random() * 100;
a = Number.parseInt(a)
let inp;
let score = 100;

while (inp != a) {
  score = score - 1;
  inp = prompt("Enter the Number : ");
  if (inp == a) {
    console.log("Congradulation! You guess the correct number.")
    console.log(`You guess the actual number in ${100 - score} chances.`)
  }
  else if (inp > a && inp < 100) {
    console.log("your number is greater than the actual number.")
  }
  else if (inp < a && inp > 0) {
    console.log("your number is smaller than the actual number.")
  }
  else {
    console.log("Enter number between 1 to 100")
  }
}





// Random Number generation in JS:
// --------------------------------------------------
// Return a random number between 0 and 100: 
console.log(Math.random() * 100);              // Sample Output: 16.19982094546135
console.log(Math.floor(Math.random() * 100))   // Sample Output: 16
// A random whole number between 1 and 100:
console.log(Math.floor(Math.random() * 100) + 1);
// --------------------------------------------------
