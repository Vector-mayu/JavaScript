// Functions in JS

function Mul(num1, num2)
{
  let num = num1 * num2;
  return num; // we can use return or console to print directly form function
}

console.log(Mul(10,14));


// How to store any function using let or const

const fun1 = function(){
  console.log(`This function stores in Heap`);
  console.log(`prints function any given variable`);
  return;
} 

console.log(fun1());


//Arrow Function =>

let fun2 = () =>{
  console.log(`This is a shortcut method`);
}
fun2();

// Arrow function dosent need RETURN function

let add = (n1, n2) => n1+n2; // Most used 
console.log(add(9,5)); 

// Arrow function EXAMPLE

const cube = number1 => number1*number1*number1;
console.log(cube(2));


// Rest operator in Function

const sum2 = (...number) => console.log(number);
console.log(sum2(1,4,5,6));

// (...) is called REST operator ... it can deal with huge inputs 
// ... converts into ARRAY using for loop we can calculate the operation


// Collab of OBJECT and FUNCTION [NORMAL METHOD]

let user = {
  name : `Mayuresh`,
  age : 20,
  id : 2323
}

function user1(user){ // we passed the user OBJECT 
  console.log(user1.name, user1.age, user1.id);
}
console.log(user1());

// Collab of OBJECT and FUNCTION [DESTRUCTURUING METHOD]

function user2({name, id})
{
  console.log(name, id);
}
user2(user); // IMPORTANT