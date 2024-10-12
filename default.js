//Default function -- > value gulo 0 assign kore dile function e value na dileo 0 dhore output dibe

function add(n1 = 0, n2 = 0){
    const result = n1 + n2;
    
    console.log(n1, n2, result);
    return result;
}

let result = add();
result = add(5);
result = add(5, 10);

// string er jonno empty variable dite hobe
function fullName(first = '', last = ''){

}

// Array er jonno empty array
function numbers(nmbrs = []){

}