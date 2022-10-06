//-----------------------------------------------------------
// loop in javaScript  
//-----------------------------------------------------------

// for loop
//-----------------------------------------------------------
let sum = 0
let n =  prompt("Enter the value of n ")
n =  Number.parseInt(n)
for(let i=0; i<=n; i++){
  sum += i
}
console.log("sum of first "+ n + " natural numbers is "+ sum)

// for-in loop
//-----------------------------------------------------------
let obj = { 
  harry:60,
  aakash:70,
  vijay:45,
  rahul:37,
  ritu:35,
}
for (let a in obj){
  console.log("Marks of "+ a + " are "+ obj[a])
}

// for-of loop
//-----------------------------------------------------------
for (let i of "apple"){
  console.log(i)
}


// while loop
//-----------------------------------------------------------
let n = prompt("Enter the value of n ")
n = Number.parseInt(n)
let i = 0
while(i<n){
  console.log(i)
  i++
}

// do-while loop 
//-----------------------------------------------------------
let n = prompt("Enter the value of n ");
n = Number.parseInt(n);
let i = 0;
do{
  console.log(i)
  i++;
}
while(i<n)

// -----------------------------------------------------------
// Practice-set: loops   
// -----------------------------------------------------------
// -----------------------------------------------------------
// Que:1 - write a program to print the marks of a student in
// an object using the for-loop?
// -----------------------------------------------------------
let marks = {
  harry: 98,
  rohan: 70,
  aakash: 68,
  monika: 51,
}

for (let i=0; i<Object.keys(marks).length; i++){
  console.log("The marks of "+ Object.keys(marks)[i] + " are "+ marks[Object.keys(marks)[i]])
}

// -----------------------------------------------------------
// Que:2 - Write the program in the Que-1 using for-in loop? 
// -----------------------------------------------------------
for(let keys in marks){
  console.log("The marks of " + keys + " are " + marks[keys])
}

// -----------------------------------------------------------
// Que:3 - Write the program to print "Try Again" until the user
// the user enters the correct number? 
// -----------------------------------------------------------
let cn = 5;
let i;
i = prompt("Enter the correct number");

while (i != cn) {
  if (i != cn) {
    console.log("Try Again");
    i = prompt("Enter the correct number");
}
}  
console.log("You have entered the correct number");