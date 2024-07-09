// Write a function that prints all the leap years in the 20th century
//  For Loop
function leapYears() {
  for (let i = 1901; i <= 2000; i++) {
    if (i % 4 === 0) {
      console.log(i);
    }
  }
}
leapYears();

// while loop
function leapYears2() {
  let someVar = 1901;
  while (someVar <= 2000) {
    if (someVar % 4 === 0) {
      console.log(someVar);
    }
    someVar++;
  }
}
leapYears2();

// do while
function leapYears3() {
  let i = 1901;
  do {
    if (i % 4 === 0) {
      console.log(i);
    }
    i++;
  } while (i <= 2000);
}
leapYears3();

/* Given the age of a person who was born on February 29th,
 write a function that returns
 how many times the person has celebrated
  their birthday on the date that they were born.*/
//   for loop
function leapYearBirthday() {
  let currentyr = 2024;
  let age = 80;
  for (let i = currentyr - age; i <= currentyr; i++) {
    if (i % 4 === 0) {
      console.log(i);
    }
  }
}
leapYearBirthday();

// while loop
function leapYearBirthday2() {
  let currentyr = 2024;
  let age = 80;
  let someVar = currentyr - age;
  while (someVar <= currentyr) {
    if (someVar % 4 === 0) {
      console.log(someVar);
    }
    someVar++;
  }
}
leapYearBirthday2();

// do while
function leapYearBirthday3() {
  let currentyr = 2024;
  let age = 80;
  let i = currentyr - age;
  do {
    if (i % 4 === 0) {
      console.log(i);
    }
    i++;
  } while (i <= currentyr);
}
