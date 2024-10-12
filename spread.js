const max = Math.max(6, 23, 45, 1, 89, 24);
console.log(max);

// get max from an array using 'Math.max'
const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];

let arraMax = Math.max(numbers);  // NaN output dibe
console.log(arraMax);

arraMax = Math.max(...numbers);  // valid --> array k pass korar jonno surute 3 ta dot dite hoy
console.log(arraMax);

// Use spread operator for copy
let numbers1 = [4, 5, 87, 9];
let numbers2 = numbers1;

// sadharonvabe numbers 2 te jodi kono nmbr push kori tahole seta numbers1 e o push hoye jabe
numbers2.push(12);
console.log(numbers2);
console.log(numbers1);

// ei problem solve korar jonno 'spread operator' use orte hobe

// Advanced --> add extra element with copy 
numbers2 = [...numbers1, 33];
console.log(numbers2);
console.log(numbers1);