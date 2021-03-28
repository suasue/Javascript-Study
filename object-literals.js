// Objects
// Objects are collections of properties
// Properties are a key-value pair
// Rather than accessing data using an index, we use custom keys.

console.log(typeof []); // object


// Creating Object Literal : {} curly braces
const person = {firstName: 'Sua', lastName: 'Cho'};
console.log(person);

// All types welcome!
let comment = {
  username : 'ssgoose240',
  downVotes : 19,
  upVotes : 214,
  commentText : 'Tastes like chicken lol',
  tags : ['#hilarious', '#funny', '#silly'],
  isGilded : false
};

let product = {
  "name": "Gummy Bears",
  "inStock": true,
  "price": 1.99,
  "flavors": ["grape", "apple", "cherry"]
};


// Accessing Data Out of Objects
// using square brackets and dot
console.log(person["firstName"]);
console.log(product["inStock"]);

console.log(person.firstName);

// Difference between two options
// Valid Keys : All Keys are converted to strings (Except for Symbols, which we haven't covered yet)
const years = {1999: 'GOOD', 2020: 'BAD'};
console.log(years["1999"]); // GOOD
console.log(years[2020]); // BAD

// console.log(year.1999); // ReferenceError

const dumb = {true: 'dat', null: 'abc'};
console.log(dumb["true"]); // dat
console.log(dumb["null"]); // abc

// console.log(person[firstName]) // ReferenceError
console.log(person['first' + 'Name']);

let birthYear = 2020;
console.log(years.birthYear); // undefined
console.log(years[birthYear]); // BAD


// Modifying Objects
const midterns = {danielle: 96, thomas: 78};
midterns.thomas = 79;
console.log(midterns.thomas); // 79
console.log(midterns); // { danielle: 96, thomas: 79 }

midterns.thomas = 'C+'
midterns['danielle'] = 'A'
console.log(midterns); // { danielle: 'A', thomas: 'C+' }

midterns.ezra = 'B+'
midterns['antonio'] = 'A-'
console.log(midterns); // { danielle: 'A', thomas: 'C+', ezra: 'B+', antonio: 'A-' }


// Nesting Arrays & Objects
const comments = [
  {
    username: 'Tammy', 
    text: 'lolololol', 
    votes: 9
  },
  {
    username: 'FishBoi', 
    text: 'glub glub', 
    votes: 1256
  }
];

console.log(comments[1].text); // glub glub

