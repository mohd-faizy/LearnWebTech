// =========================================================================
// =========================================================================
//                              Arrays
// =========================================================================
// =========================================================================

let marks = [91, 82, 63, 84, false, "Not Present"];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);  // Will be undefined because index 6 does not exist
console.log("The length of marks is", marks.length);
marks[6] = 89;          // Adding a new value to the array
marks[0] = 96;          // Changing the value of an array
console.log(marks);
console.log(typeof marks);

// ========================================================================
// ========================================================================
//                          Array Methods 
// ========================================================================
// ========================================================================


// ======.toString()=======================================================
let num = [1, 2, 3, 4]
let a = num.toString() // b is now a string 
console.log(typeof num)
console.log(typeof a)


// ======.join()===========================================================
let b = num.join(" - ")
console.log(b)
console.log(typeof b)


// ++++++Adding element to an array+++++
// ======.unshift()========================================================
let a = [1, 2, 3, 4];
let elm1 = 0;
a.unshift(elm1); // unshift() adds elements at the Beginning of an array
console.log(a);


// ======.push()============================================================
let b = [5, 6, 7, 8];
let elm2 = 9;
b.push(elm2);   // push() method adds elements to the End of an array
console.log(b);


// +++++Removing element from an array+++++
// ======.shift()===========================================================
let c = [11, 22, 33, 44];
let p = c.shift();   // Removes first element from the start of the array
console.log(p, c);


// ======.pop()=============================================================
let d = [11, 22, 33, 44];
let q = d.pop();     // Removes(pop) last element at the end of the array 
console.log(q, d);


// ======delet Operator[Not a method]========================================
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a.length);
delete a[0]; // length of the array will remain the same after delet Operation
console.log(a, a.length);

// ======.concat()===========================================================
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let c = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let newArray = a.concat(b, c); // Dose'nt modify the existing array
console.log(newArray);


// ======.sort()============================================================
let d = [8, 9, 10, 1, 15, 125, 6, 25, 2, 4];
d.sort(); // modify the original array "ALPHABETICALLY"
console.log(d)

// ---Assending Order---
let compareA = (a, b) => {
  return a - b
}
d.sort(compareA); // modify the original array "ALPHABETICALLY"
console.log(d)

// ---Descending order---
let compareD = (a, b) => {
  return b - a
}
d.sort(compareD);
console.log(d)


// ======.reverse()==========================================================
let e = [8, 9, 10, 1, 15, 125, 6, 25, 2, 4];
e.reverse()
console.log(e)

// ======.splice()===========================================================
// Syntax: splice(start, deleteCount, replaceitem1, ""2, ""N) 

let f = [8, 9, 10, 1, 15, 4, 6];
f.splice(2, 3, 1001, 1002, 1003) // modify the original array
console.log(f)

// ======.slice()============================================================
let g = [10, 1, 15, 4, 6, 8, 9];
let newArray1 = g.slice(3);     //Dose'nt modify the existing array
let newArray2 = g.slice(3, 5);
console.log(newArray1);
console.log(newArray2);



// =========================================================================
// =========================================================================
//                          Using Loops Array
// =========================================================================
// =========================================================================

//=====Classical or-Loop=====
let num = [1, 3, 5, 4, 9];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}


// =====forEach-Loop=====
let num = [1, 3, 5, 4, 9];
num.forEach((element) => {
  console.log(element * element);
})


// =====Array.from=====
/*lets you create Arrays from: iterable objects (objects such as Map and Set ); or, if the object is not iterable, array-like objects */
let string = "apple";
let arr = Array.from(string);
console.log(arr);


// =====for-of loop(shortcut method for for loop)=====
let num = [1, 3, 5, 4, 9];
for (let i of num) {
  console.log(num[i])
}


// ========================================================================
// ========================================================================
//                          Map-Filter-Reduce
// ========================================================================
// ========================================================================

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(function(item, index, array) {
  console.log(item, index);
});
or
let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
arr.forEach((item, index, array) => {
  console.log(item, index, array);
});


// ===== Map =====
let arr1 = [45, 23, 21];
let a = arr1.map((value, index, array) => {
  console.log(value, index, array)
  return value + index
})
console.log(a)

// ===== Filter ===== [Dose'nt modify the existing array]
let arr2 = [45, 23, 21, 0, 3, 5];
let a2 = arr2.filter((a) => {
  return a < 10
})
console.log(a2)


// ===== Reduce =====
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((a, b) => {
  return a + b;
});
console.log(sum)

//Or

let numbers = [1, 2, 3, 4, 5];
const sumFunc = (a, b) => {
  return a + b;
};
let newArr = numbers.reduce(sumFunc)
console.log(newArr)


let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)


// ========================================================================
// ========================================================================
//                             Practice Set
// ========================================================================
// ========================================================================

// ========================================================================
// Que:1 Create an array of number and take input from the user to add number
//       at the end of this array? 
// ========================================================================

let arr = [1, 2, 3, 4, 5, 6];
let a = prompt("Enter the Number: ");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);



// ========================================================================
// Que:2 Keep adding the number to the array in Que:1 until the zero is added?
// ========================================================================

let arr = [1, 2, 3, 4, 5];
let a;
do {
  a = prompt("Enter a number");
  a = Number.parseInt(a);
  arr.push(a);
} while (a != 0);
console.log(arr);



// ========================================================================
// Que:3 Filter for numbers divisible by 10 form a given array?
// ========================================================================

let num = [12, 10, 30, 40, 55, 69, 70, 89];
let n = num.filter((x) => {
  return x % 10 == 0
})
console.log(n)



// ========================================================================
// Que:4 Create an array of square of given numbers?
// ========================================================================

let num = [1, 2, 3, 4, 5]
let a = num.map((value, index, array) => {
  return value * value
})
console.log(a)

// Or

let arr = [1, 2, 3, 4, 5]
let n = arr.map((x) => {
  return x * x
})
console.log(n)

// ========================================================================
// Que:5 Use JS `.reduce` method to calculate factorial of a given number
//       from an array of first `n` natural numbers (`n` being the number 
//       whose factorial needs to be calculated)?
// ========================================================================

let arr = [1, 2, 3, 4, 5]
let factArr = arr.reduce((n1, n2) => {
  return n1 * n2
})
console.log(factArr)

// using the map function to find the factorial of an array
let arr = [1, 2, 3, 4, 5]
let a = arr.map(function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
})
console.log(a)