// Creating an array by manually instantiating the Array class
let numArr3 = new Array(4);

// Creating an array normally
let a = [];

console.log(a);

// // 1. Create a student object with three properties, firstName, lastname and age. Create a function studentGeneration that takes an object as an argument and has some logic that prints whether the student is an alpha, a GenZ, a millennial, or a boomer.

let allElements = [
  {
    firstName: "Bruce",
    lastName: "Wayne",
    age: 40,
  },

  {
    firstName: "Will",
    lastName: "Smith",
    age: 18,
  },

  {
    firstName: "Agent",
    lastName: "H",
    age: 67,
  },
];

function studentGeneration(s) {
  if (s.age <= 12) {
    console.log(`${s.firstName} ${s.lastName} is an Alpha`);
  } else if (s.age <= 24) {
    console.log(`${s.firstName} ${s.lastName} is a GenZ`);
  } else if (s.age <= 38) {
    console.log(`${s.firstName} ${s.lastName} is a Millennial`);
  } else {
    console.log(`${s.firstName} ${s.lastName} is a Boomer`);
  }
}
studentGeneration(allElements);

// Create a function that takes an array of numbers as an argument, and returns an array of the square roots of each of the numbers in the array. Print each of the returned square roots on the console in the following format:

// 4: 2
// 9: 3
// 16: 4

// where the number on the left is an element in the array passed to the function, and the number on the right is its corresponding square root in the returned array.

//MAP
let numberss = [4, 9, 16, 25, 36, 49, 64, 81];

function someArr(oriArr) {
  const newArr = oriArr.map((num) => Math.sqrt(num)); // .map() iterates over each element in the original array [oriArr],and returns a square root to each element[num] by applying the Math.sqrt(), and then returns a new array [newArr] containing the resulting square root values as the new elements.
  //newArr = []

  for (i = 0; i < oriArr.length; i++) {
    console.log(`${oriArr[i]}: ${newArr[i]}`);
  }

  console.log(newArr);
  return newArr;
}

someArr(numberss);

//FOR EACH
function getSquareRoots(arr) {
  let resultArr = [];

  arr.forEach((num) => resultArr.push(Math.sqrt(num))); //[forEach() does not return a new array].This method iterates over each element in the array, calculates the square root of each element using the Math.sqrt function, and then reuturns the result to a new array.
  //function(num){
  //resultArr.push(Math.sqrt(num))}

  for (i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}: ${resultArr[i]}`);
  }
  return resultArr;
}

getSquareRoots(numbers);

//FLATMAP
let numbers = [
  [4, 9],
  [16, 25],
  [36, 49],
  [64, 81],
]; //sub-arrays in an array

function getSqrt(arr) {
  const newArr = arr.flatMap((subEl) => subEl); //The flatMap method takes in a function that operates on each element (subEl) of the arr array and returns these elements as a new flattened array stored in newArr.The method iterates over each subarray element in the original arr and then flattens the resulting array into a new array. (subEl) => subEl is taking each element of the original array arr (which are subarrays) and returning them.
  console.log("NEW ARRAY:", newArr);
  const newNew = newArr.map((num) => Math.sqrt(num));
  console.log(newNew);

  for (let i = 0; i < newArr.length; i++) {
    console.log(`${newArr[i]}: ${newNew[i]}`);
  }

  return newArr;
}

getSqrt(numbers);

//FILTER
let number = [4, 9, 16, 25, 36, 49, 64, 81];
//getting square roots of elements which are above a given value
function getSqrt(arr) {
  let newArr = arr.filter((num) => num > 5); //[filter() creates a new array which fit the 'condition'(num > 5)]
  console.log(newArr);
  let newNew = newArr.map((num) => Math.sqrt(num)); //[map() creates a new array whose elements{each} have undergone a function] map over the new array and return a new array of square root of all the elements
  console.log(newNew);

  //  let newArr = arr.filter((num) => num >= 0).map((num) => Math.sqrt(num)) //this is the shorter version of the above if the variable name is not to be changed

  for (let i = 0; i < newArr.length; i++) {
    console.log(`${newArr[i]}: ${newNew[i]}`);
  }

  return newNew;
}
getSqrt(number);

// - Create a function that takes an array of numbers as an argument, and returns an array of the square roots of those numbers that are even. So for instance if you have an array [4, 9, 16, 25], the function should return [2, 4].

let newNumbers = [4, 9, 16, 25, 36, 49, 64, 81, 100];

function someFunction(arr) {
  const upArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      //% is used as the modulus operator[used to find remainder after divinding], which returns the remainder of a division operation. (if the remainder when divided by 2 is equal to 0)
      upArr.push(Math.sqrt(arr[i]));
    }
  }
  console.log(upArr);
  return upArr;
}

someFunction(newNumbers);

// - Create a function that takes an array of numbers and a number x as arguments, and returns an array of the square roots (of those numbers) that are greater than x. So for instance if you have an array [4, 9, 16, 25, 36], and x is 3, then the function should return [4, 5, 6].

let moreNumbers = [4, 9, 16, 25, 36, 49, 64, 81, 100];
let x = 5;

function someFunc(moreArr, xVal) {
  let newNew = moreArr.map((num) => Math.sqrt(num));

  const newArr = [];

  for (let i = 0; i < moreArr.length; i++) {
    if (newNew[i] >= xVal) {
      newArr.push(newNew[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

someFunc(moreNumbers, x);
