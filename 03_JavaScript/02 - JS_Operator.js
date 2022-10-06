
77;
"Harry bhai"
false
// the code above won't genrate the error

// -----------------------------------------------------------------------------
//                            Arithmetic Operators 
// -----------------------------------------------------------------------------
let a = 10;
let b = 4;
console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a / b = ", a / b)
console.log("a ** b = ", a ** b)
console.log("a % b = ", a % b)
console.log("++a = ", ++a)
console.log("a++ = ", a++)
console.log("--a = ", --a)
console.log("a-- = ", a--)
console.log("a = ", a)
console.log("a-- = ", a--)


// -----------------------------------------------------------------------------
//                            Assignment Operators 
// -----------------------------------------------------------------------------
let assignment = 1;
assignment += 5 // same as assignment = assignment + 5
console.log("a is now = ", a)
assignment -= 5 // same as assignment = assignment - 5
console.log("a is now = ", a)
assignment *= 5 // same as assignment = assignment * 5
console.log("a is now = ", a)
assignment /= 5 // same as assignment = assignment / 5
console.log("a is now = ", a)

// -----------------------------------------------------------------------------
//                            Comparison Operators 
// -----------------------------------------------------------------------------
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)

// -----------------------------------------------------------------------------
//                            Logical Operators
// -----------------------------------------------------------------------------
let x = 5;
let y = 6;
console.log(x<y && x==5)
console.log(x>y || x==5)
console.log(!false)
console.log(!true)


// -----------------------------------------------------------------------------

let a = prompt("Hey whats you age?");
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")
console.log("You can", (a<18? "not drive" :"drive"))


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                             Practice set
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 


// -----------------------------------------------------------------------------
/* Que:1 Use logical Operator to find whether the age o a person lies between 10
         and 20? */ 
// -----------------------------------------------------------------------------

let age = prompt("What is your age?")
age = Number.parseInt(age)
if (age > 10 && age < 20) {
  console.log("Your age lies between 10 and 20")
}
else {
  console.log("Your age doesnt lies between 10 and 20")
}



// -----------------------------------------------------------------------------
/* Que:2 demonstrate the use of switch case statement in the javascript */ 
// -----------------------------------------------------------------------------

let age = prompt("What is your age?")
switch (age) {
  case '12':
    console.log("Your age is 12")
    break
  case '13':
    console.log("Your age is 13")
    break
  case '14':
    console.log("Your age is 14")
    break
  case '15':
    console.log("Your age is 15")
    break
  default:
    console.log("Your age is not special")
}


// -----------------------------------------------------------------------------
/* Que:3 write a JS program to find whether the number is divisible by 2 and 3 */ 
// -----------------------------------------------------------------------------

let num = prompt("What is your age?")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")
}
else {
  console.log("Your number is not divisible by 2 and 3")
}



// -----------------------------------------------------------------------------
/* Que:4 write a JS program to find whether the number is divisible by 2 or 3 */ 
// -----------------------------------------------------------------------------

let num = prompt("Enter the Number: ")
num = Number.parseFloat(num)
if (num % 2 == 0 || num % 3 == 0) {
  if(num % 2 == 0 && num % 3 != 0){
    console.log("Your number is divisible by 2")
  }
  else if (num % 2 != 0 && num % 3 == 0){
    console.log("Your number is divisible by 3")
  }
  else if(num % 2 == 0 && num % 3 == 0){
    console.log("Your number is divisible by 2 and 3 both")
  }
}
else {
  console.log("Your number is not divisible by 2 or 3")
}

// -----------------------------------------------------------------------------
/* Que:5 Print "you can drive" or "you cannot drive" based on age being greater
         than 18 using the ternary operator */ 
// -----------------------------------------------------------------------------

let age = 19
let a = age > 18 ? "You can drive" : "You cannot drive"
console.log(a)