// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// |                          Strings In JavaScript                                 |
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let name = 'harry';
console.log(name)

// ---------------------------Template literals--------------------------------------
let boy1 = "harry";
let boy2 = "carry";
let sentence = `${boy1} is a frinend of ${boy2}`;
console.log(sentence);


//-----------------------Escape Sequence Characters---------------------------------
/*
- \n: Newline
- \t: Tab
- \r: Carriage Return
*/ 

let fruit = 'Bana\'na';
console.log(fruit);
console.log(fruit.length);

let fruit = 'Bana\"na';
console.log(fruit);

//-----------------------JavaScript String Methods----------------------------------

let name = 'HaRRy';
console.log(name.length);         // `.lenght` is  a property 
console.log(name.toUpperCase());  // `.toUpperCase()` is a funtion
console.log(name.toLowerCase());  // `.toLowerCase()` is a funtion


//-------------------------Indexing and Slicing-------------------------------------

let name = 'javascript';
// --------Indexing-------------
console.log(name[0]);
console.log(name[2]);
console.log(name[4]);

// --------Slicing--------------
console.log(name.slice(2, 4));
console.log(name.slice(2));

// --------Replace--------------
console.log(name.replace("java", "type"));

// --------Concat--------------
let name1 ="java";
let name2 ="script";
let name3 = name1.concat(name2, " is Awesome");
console.log(name3);

// --------Trim--------------
let name4 = "          javascript          ";
console.log(name4);
console.log(name4.trim()); // removes whitespace from both sides of a string

// --------------------------------------------------------------------------
// QuickQuiz: Use a for loop to print a string?
// --------------------------------------------------------------------------

let lang = "javascript";
for(i=0; i<=lang.length; i++){
  console.log(lang[i])
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// |                                   Practice Set                                       |  
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ------------------------------------------------------------------------------------
/* Que:1 What will the output of the following JS code `console.log("har\"".length)`?*/ 
// ------------------------------------------------------------------------------------

let str = "har\"";
console.log(str.length) // `4` Escape Sequence Characters is included



// ------------------------------------------------------------------------------------
/* Que:2 Explore the `.includes()`, `.startWith()` & `.endswith()` functions of a string?*/ 
// ------------------------------------------------------------------------------------

// -----`.includes()`-----
const sentence = 'Quick Brown Fox Jumps Over The Lazy Dog.';
const word = 'fox';
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// -----`.startWith()`-----
console.log(sentence.startsWith('Quick'));

// -----`.endswith()`-----
console.log(sentence.endsWith('dog'));



// ------------------------------------------------------------------------------------
/* Que:3 Write a program to convert a given string to lowercase?*/ 
// ------------------------------------------------------------------------------------

console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());



// ------------------------------------------------------------------------------------
/* Que:4 Extract the ammount out this string "The amount is Rs 1000"?*/ 
// ------------------------------------------------------------------------------------

let str = "The amount is Rs 1000";
let amount = Number.parseInt(str.slice(17));
console.log(amount);
console.log(typeof amount);


// ------------------------------------------------------------------------------------
/* Que:5 Try to change the 1st character of the string?*/ 
// ------------------------------------------------------------------------------------

let name = "harry"
name[0] = "c"
console.log(name)  // name is not change since strings in JavaScript are immutable. 