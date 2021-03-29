// Loops
// Loops allows us to repeat code - Print 'hello' 10 times, Sum all numbers in an array
// There are multiple types: for loop, while loop, for ...of loop, for ...in loop

// For Loop Syntax 
/*
for (
  [initialExpression];
  [condition];
  [incrementExpression]
)
*/

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

for(let i = 1; i <= 10; i++) {
  console.log(i);
} 

for (let i = 1; i <= 6; i++) {
  console.log("Da ba dee da ba daa");
}

for(let i = 0; i <= 20; i += 2) {
  console.log(i);
}

for(let i = 100; i >= 0; i -= 10) {
  console.log(i);
}

for(let i = 10; i <= 1000; i *= 10) {
  console.log(i);
}


// The Perils Of Infinite Loops

// DO NOT RUN THIS CODE!
/*
for (let i = 20; i >= 0; i++) {
  console.log(i);
} // BADDDD!!!
*/


// Looping Over Arrays
const animals = ['lions', 'tigers', 'bears'];

for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

for (let i = animals.length - 1; i >= 0; i--) {
  console.log(i, animals[i]);
}


// Nested Lopps
for (let i = 1; i <= 10; i++) {
  console.log(`i is: ${i}`);
  for (let j = 1; j < 4; j++) {
    console.log(`      j is: ${j}`);
  } 
}

const seatingChart = [
  ['a', 'b', 'c'],
  ['1', '2', '3', '4'],
  ['가', '나', '다']
];

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`ROW ${i + 1}`)
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}


// While Loops
// While loops continue runnimg as long as the test condition is true.
let count = 0;
while (count < 10) {
  count++;
  console.log(count);
}

const SECRET = "BabyHippo";

let guess = prompt("enter the secret code...");
while (guess !== SECRET) {
  guess = prompt("enter the secret code...");
}

console.log("CONGRATS YOU GOT THE SECRET!!!");


// The Break Keyword
let input = prompt("Hey, say something!");
while (true) {
  input = prompt(input);
  if (input.toLowerCase() === "stop copying me") break;
}
console.log("OK YOU WIN!")

for (let i = 0; i < 1000; i++) {
  console.log(i);
  if (i === 100) break;
}


// Writing a Guessing Game
let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
  maximum = parseInt(prompt("Enter the valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess == 'q') break;
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Too high! Enter a new guess");
  } else {
    guess = prompt("Too low! Enter a new guess");
  }
}

if (guess === 'q') {
  console.log("OK, YOU QUIT!");
} else {
  console.log("CONGRATS YOU WIN!");
  console.log(`You got it! It took you ${attempts} guesses.`);
}


// For...OF
// A nice and easy way of iterating over arrays (or other iterable objects)
// not support in internet explorer

const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer'];

for (let i = 0; i < subreddits.length; i++) {
  console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

/* 
for (variable of iterable) {
  statement
}
*/

for (let sub of subreddits) {
  console.log(`Visit reddit.com/r/${sub}`);
}

// refactoring seatingChart
for (let row of seatingChart) {
  for (let student of row) {
    console.log(student);
  }
}

for (let char of "hello world") {
  console.log(char)
}


// Iterating Over Objects
const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72
}

for (let person in testScores) {
  console.log(`${person} scored ${testScores[person]}`)
}
// Object.keys(testScores)
// Object.values(testScores)
// Object.entries(TestScores)

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
  total += score;
}

console.log(total / scores.length);
