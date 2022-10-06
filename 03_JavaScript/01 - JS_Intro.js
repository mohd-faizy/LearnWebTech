// -------------------------------------------------------------------------------
//                                Add three numbers
// -------------------------------------------------------------------------------
console.log("Note: View Files from this Repl to Access the Source Code")
console.log("This program adds 1, 2 and 54")

function addThreeNumbers(a, b, c) {
    return a + b + c;
}
let c = addThreeNumbers(1, 2, 54)
console.log(c)


// -------------------------------------------------------------------------------
//                                   Varible
// -------------------------------------------------------------------------------

console.log("This repl contains code for the Ultimate JavaScript course video no 2")
var a = 67         // a contains 67
console.log(a)
a = "harry"
console.log(a)
// let 8harry = 7  // Not allowed this will throw an error
// let var = 7




// -------------------------------------------------------------------------------
//                                var-let-const
// -------------------------------------------------------------------------------

console.log("JavaScript var, let and const")
var a = 45; 
var a = "p";

/*
Que: Can you declare a variable multiple times?
Ans: Yes! but declaring multiple `var` in a single declaration can cause confusion.
*/


let b = "Harry";
let b = 4;
/* 
We cannot declare the same variable multiple times if one of them is declared 
using `let` and `const`
*/



const author = "Harry";
const author = 5       // Throws an error because constant cannot be changed


// -------------using let  for declaring same varible multiple times------------
let c = 4;
{
  let c = 'this'
  console.log(c)
}
console.log(c)
// -------------------------------------------------------------------------------



// ------------------------following code is allowed is js------------------------
const harry = 0;
let d = null
let e  = undefined



// --------------------------- Primitives DataType in Js--------------------------
/*
----- BBNNSSU -----
- boolean
- BigInt
- null
- number
- string
- symbol
- undefined
*/
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3")
let e = "Harry"
let f = Symbol("I am a nice symbol")
let g
console.log(a, b, c , d, e, f, g)
console.log(typeof c)

// -------------------- Non Primitive Data Type - Objects in Js --------------------
const item = {
  "Harry": true,
  "Shubh": false,
  "Lovish": 67,
  "Rohan": undefined
}
console.log(item["Shubh"])



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
// _______________________________________________________________________________|
//                                Practice Set                                    |
// _______________________________________________________________________________|
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|

// -------------------------------------------------------------------------------
/* Que:1 Create a varible of type string and try to add a number to it?*/ 
// -------------------------------------------------------------------------------
let a = "Harry"
let b = 6
console.log(a + b)

// -------------------------------------------------------------------------------
/* Que:2 Use `typeof` Operator to find the datatype of the string in -->Que:1?*/ 
// -------------------------------------------------------------------------------
console.log(typeof a+b)

// -------------------------------------------------------------------------------
/*  Que:3 Create a const object in js & change it to hold a number later? */
// -------------------------------------------------------------------------------
const a1 = {
  name: "Harry",
  section: 1,
  isPrincipal: false
}
a1 = 45
a1 = {}

// -------------------------------------------------------------------------------
/* Que:4 Add a new key to the const object `a1` in Que:3?*/  
// -------------------------------------------------------------------------------
a1['friend'] = "Shubham"  
a1['name'] = "Lovish"  
console.log(a1)

// -------------------------------------------------------------------------------
/* Que:5 Write a JS program to create a word-meaning dictionary of 5 words? */
// -------------------------------------------------------------------------------
const dict = {
  schizophrenia: "A disorder that affects a person's ability to think",
  paranoid: "wrongly believing that other people are trying to harm you",
  optimism: "refers to a hopeful disposition",
  muzzling: "the freedom of Expression",
  voyage: "a long journey involving travel by sea or space",
  baffling: "impossible to understand; perplexing"
};
console.log(dict['voyage'])