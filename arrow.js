// normally jevabe kori
function add(a, b){
    const result = a + b;
    return result;
}

// easy way (function expression)
const add2 = function(a, b){
    return a + b;
}

// Arrow function
const add3 = (a, b) => a + b;

// main function (function call)
const sum = add3(15,90);
console.log(`Sum = ${sum}`);

// call a object property using arrow function
const getAge = (person) => person.age;

const student = {name: 'ananta', age: 45}
const age = getAge(student);
console.log(`Age is ${age}`);


// Function for getting tird element of an array
const getThird = numbers => numbers[2];  // single parameter e bracket na dileo hoy

const third = getThird([5, 8, 9, 0, 2]);
console.log(`third element is ${third}`);

// Large arrow function --> ekhetre return keyword likhe return korte hobe
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}