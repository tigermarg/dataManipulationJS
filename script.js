// Part One: Math Problems ------------------------------------------------------------

// Starter Code
// The initial numbers that must be verified.
const n1 = 20;
const n2 = 15;
const n3 = 20;
const n4 = 5;
    
// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


//   Check if all numbers are divisible by 5. Cache the result in a variable.
const divByFive = (n1 + n2 + n3 + n4 ) % 5 == 0
console.log(`Are div by five?` , divByFive); // True


//   Check if the first number is larger than the last. Cache the result in a variable.
let largerThan = n1 > n4;
console.log(`First larger than last?`, largerThan); // True

//   Accomplish the following arithmetic chain:

//   Subtract the first number from the second number.
const  secMinusFirst = n2 - n1;
console.log(`Second minus first?` , secMinusFirst); // Equals -5

//   Multiply the result by the third number.
let resTimesThird = ( -5 * n3);
console.log(`Result times third?`, resTimesThird); // Equals -100

//   Find the remainder of dividing the result by the fourth number.
let resDivFourth = (-100 % n4);
console.log(`Result divided by fourth remainder?` , resDivFourth) // Equals 0

//   Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isOver25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25; 
console.log(`Numbers over 25?`, isOver25) // Used && and < 25 for each number for true statement

// Part Two: Practical Math ----------------------------------------------------------
const total = 1500 // trip total miles
const mpg1 = 30 // @55mph = 30mpg
const mpg2 = 28 // @60mph = 28mpg
const mpg3 = 23 // @75mph = 23mpg
const mph1 = 55 
const mph2 = 60
const mph3 = 75
const fuel = 3 // cost per gallon
const budget = 175 // fuel budget

// How many gallons of fuel will you need for the entire trip?
const gallon1 = total / mpg1
console.log(`Gallons at 55mph?`, gallon1) // 50 gallons

const gallon2 = total / mpg2
console.log(`Gallons at 60mph?`, gallon2) // 53.57142857142857 gallons

const gallon3 = total / mpg3
console.log(`Gallons at 75mph?`, gallon3) // 65.21739130434783 gallons

// Will your budget be enough to cover the fuel expense?
const cost1 = gallon1 * fuel
console.log(`Cost at 55mph?`, cost1) // yes, $150 total

const cost2 = gallon2 * fuel
console.log (`Cost at 60mph?`, cost2) // yes, $160.72 total

const cost3 = gallon3 * fuel
console.log (`Cost at 75mph?`, cost3) // no, $195.65 total

// How long will the trip take, in hours?
let time1 = total / mph1
console.log (`Trip time at 55mph?`, time1) // 27.272727272727273 hours

let time2 = total / mph2
console.log (`Trip time at 60mph?`, time2) // 25 hours

let time3 = total / mph3
console.log (`Trip time at 75mph?`, time3) // 20 hours

// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?


// Log the results of your calculations using string concatenation or template literals.



// Part Three: Future Explorations ----------------------------------------------------