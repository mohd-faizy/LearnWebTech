console.log("This is a simple game developed using javascript.\nYou will enter a range to generate a random number.\nThen computer will generate a random number within the range.\nYou have to guess the number.\n");

let range = Number(prompt("Enter the upper limit of the number to generate"));
let num = (Math.random() * range) + 1;
num = Math.floor(num);
let counter = 1;
let chance = Math.floor(range / 2);
console.log(`You Have total ${chance} chances to guess the number`);
while (true) {
  let guessed_num = Number(prompt("Guess the number generated"));
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