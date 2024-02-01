const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
const slice = (beginning, end) => foods.slice(beginning, end - 1);

// Progression 2:
const spliced = () => {
  foods.splice(2, 0, 'noodles', 'icecream');
  return foods;
};

// Progression 3:
const isEven = number => number % 2 === 0;
const isPrime = number => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++)
    if (number % i === 0) return false;
  return number > 1;
};
const checkNumber = (numberArray, operation) => numberArray.filter(operation);

// Progression 4:
const reject = numberArray => numberArray.filter(number => !isPrime(number));
const nonPrime = numberArray => reject(numberArray);

// Progression 5:
const isEvenUsingLambda = number => number % 2 === 0;

// Progression 6:
const square = number => number * number;
const findSquareOfNumbers = myArray => myArray.map(square);

// Progression 7:
const multiply = myArray => myArray.reduce((mul, number) => mul * number, 1);
const sumOfSquares = myArray => myArray.map(square).reduce((sum, number) => sum + number, 0);
