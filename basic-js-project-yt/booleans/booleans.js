console.log(2 > 3); // false
console.log(typeof "Hello"); // string

if (false) {
    console.log('hello')
} else {
    console.log('else')
}

const age = 15;

// check if the person is old enough to drive (min 16 yrs). Statement: the age is more than or equal to 16.
if (age >= 16) {
    console.log('You can drive!')
} else if (age >= 14) {
  console.log('Almost old enough!')
} else {
    console.log('You can not drive.')
}