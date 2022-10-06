// -----------------------------------------------------------------
// -----------------------------------------------------------------
// Table of Contents
// 1. Regular Function declaration
// 2. Function expression
// ----2.1 Named function expression
// 3. Computed property names and methods
// 4. Arrow function
// 5. Generator function
// 6. One more thing: new Function
// -----------------------------------------------------------------
// -----------------------------------------------------------------


// -----------------------------------------------------------------
// 1. Regular Function declaration
// -----------------------------------------------------------------

// ---------------------------even/odd------------------------------
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(24)); // -> true
console.log(isEven(11)); // -> false



// ----------------------------sum----------------------------------
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 6));            // -> 11
console.log(([3, 7]).reduce(sum)); // -> 10


// ----------------------------factorial-----------------------------
let n = prompt("Enter the Number: ")
n = Number.parseInt(n)
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(n)); 



// -----------------------------------------------------------------
// 2. Function expression
// -----------------------------------------------------------------

const count = function(array) { // Function expression
  return array.length;
}
const methods = {
  numbers: [1, 5, 8],
  sum: function() { // Function expression
    return this.numbers.reduce(function(acc, num) { // func. expression
      return acc + num;
    });
  }
}
console.log(count([5, 7, 8])); // -> 3
console.log(methods.sum());    // -> 14

// ----2.1 Named function expression
// -----------------------------------------------------------------
const getType = function funName(variable) {
  console.log(typeof funName === 'function'); // => true
  return typeof variable;
}
console.log(getType(3));   // -> 'number'
console.log(getType.name); // ->  the property name of the function object holds the name: funName.
console.log(typeof funName); // -> 'undefined'



// -----------------------------------------------------------------
// 3. Computed property names and methods
// -----------------------------------------------------------------


class Star {
  constructor(name) {
    this.name = name;
  }
  getMessage(message) {
    return this.name + message;
  }
}
const sun = new Star('Sun');
console.log(sun.getMessage(' is shining')) // -> 'Sun is shining'



// -----------------------------------------------------------------
const addMethod = 'add',
  getMethod = 'get';
const console.log(collection = {
  items: [],
  [addMethod](...items) {
    this.items.push(...items);
  },
  [getMethod](index) {
    return this.items[index];
  }
};
console.log(collection[addMethod]('C', 'Java', 'PHP'));
console.log(collection[getMethod](1)) // -> 'Java'



// -----------------------------------------------------------------
// 4. Arrow function
// -----------------------------------------------------------------


// --------------------------absValue-------------------------------
const absValue = (number) => {
  if (number < 0) {
    return -(number);
  }
  else{
    return number;
  }
}    
console.log(absValue(-10)); // => 10
console.log(absValue(5));   // => 5



// -------------------------------------------------------------------
// This is nice because we don't have to use .bind(this) or store the 
// context `var self = this` when a function needs the enclosing context.
// -------------------------------------------------------------------
class Numbers {
  constructor(array) {
    this.array = array;
  }
  addNumber(number) {
    if (number !== undefined) {
       this.array.push(number);
    } 
    else{
      return (number) => {
        console.log(this === numbersObject); // -> true
        this.array.push(number);
      }
    };
  }
}
const numbersObject = new Numbers([]);
const addMethod = numbersObject.addNumber();
addMethod(1);
addMethod(5);
console.log(numbersObject.array); // -> [1, 5]



// -------------------------------------------------------------------
// Let's make a function that finds if an array contains 0:
const numbers = [1, 5, 10, 0];
console.log(numbers.some(item => item === 0)); // => true



// -------------------------------------------------------------------
// 5. Generator function
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------

// a. Function declaration form function* <name>():
// -------------------------------------------------------------------

function* indexGenerator(){
  var index = 0;
  while(true) {
    yield index++;
  }
}
const g = indexGenerator();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1

// b. Function expression form function* ():
// -------------------------------------------------------------------

const indexGenerator = function* () {
  let index = 0;
  while(true) {
    yield index++;
  }
};
const g = indexGenerator();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1

// c. Shorthand method definition form *<name>():
// -------------------------------------------------------------------

const obj = {
  *indexGenerator() {
    var index = 0;
    while(true) {
      yield index++;
    }
  }
}
const g = obj.indexGenerator();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1

// -------------------------------------------------------------------
// 6. One more thing: new Function
// -------------------------------------------------------------------
function sum1(a, b) {
  return a + b;
}
const sum2 = function(a, b) {
  return a + b;
}
const sum3 = (a, b) => a + b;
console.log(typeof sum1 === 'function'); // => true
console.log(typeof sum2 === 'function'); // => true
console.log(typeof sum3 === 'function'); // => true