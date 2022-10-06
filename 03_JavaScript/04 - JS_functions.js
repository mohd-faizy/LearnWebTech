// Declaring the JavaScript Functions in the javascript
// Regular way
function onePlusAvg(x, y){
  return 1 + (x +y)/2
};

let a = 1;
let b = 2;
let c = 3;

console.log("One Plus Average of a and b ", onePlusAvg(a, b));
console.log("One Plus Average of b and c ", onePlusAvg(b, c));
console.log("One Plus Average of a and b ", onePlusAvg(a, c));

//---------------------------------------------------------------

// Arrow function
const sum = (p, q)=>{
  return p + q
}
console.log(sum(8, 9));

//---------------------------------------------------------------

const hello = (p, q)=>{
  console.log("Hey hello!!, how are you!")
  return "hi"
}
hello();
let v = hello()
console.log(v)

// -----------------------------------------------------------
// Practice-set: Function    
// -----------------------------------------------------------
// -----------------------------------------------------------
// Que:1 - write a function to find the mean of 5 Numbers?
// -----------------------------------------------------------
const mean = (a, b, c, d)=>{
  return (a + b + c + d) / 4
}
console.log(mean(4, 5, 6, 7))

// another approch to Que:1
const mean=(a,b,c,d,e)=>{
return ((a+b+c+d+e)/5);
}
console.log("Enter any 5 numbers to find the Mean of all five numbers :");
let a1=prompt("Enter 1st number : ");
a1=Number.parseInt(a1);
let a2=prompt("Enter 2nd number : ");
a2=Number.parseInt(a2);
let a3=prompt("Enter 3rd number : ");
a3=Number.parseInt(a3);
let a4=prompt("Enter 4th number : ");
a4=Number.parseInt(a4);
let a5=prompt("Enter 5th number : ");
a5=Number.parseInt(a5);

console.log("Mean of {"+a1+ ","+a2+ ","+a3+ ","+a4+ ","+a5+ "} = "+mean(a1, a2, a3, a4, a5))