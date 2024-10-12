const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true     // name,color,price egulo key...glass, golden, 12 egulo value
}

console.log(glass);

//get the properties
const keys = Object.keys(glass);
console.log(keys);

//get the values
const values = Object.values(glass);
console.log(values);

//get the key & value as pair
const pair = Object.entries(glass);
console.log(pair);

//delete key from objct
delete glass.isCleaned;
console.log(glass);

//freeze -- > freeze kore dile oi object ta change kora jabe na
Object.freeze(glass)