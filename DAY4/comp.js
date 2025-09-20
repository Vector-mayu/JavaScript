//TYPE CONVERSION IN JAVASCRIPT

//Property 1

let mayu = 12;
let shreyash = "12";
console.log(mayu == shreyash);
// Javascript engine will make both number and then compare them
//thats why we get answer as true

// Type check using (===)

let a = 10;
let b = "10"
console.log(a===b); // check the type of and b 
// Pehle woh type dekhega agar same hui to phir woh condition check karega 

//Property 2

console.log(null == undefined) //True(0) // only case where null is equal to someone 
console.log(null === undefined) //False

console.log(null == 0) //false
console.log(null < 0) //false
console.log(null > 0) //false
console.log(null <= 0) //true
console.log(null >= 0) //true

console.log(undefined == 0) //false
console.log(undefined < 0) //false
console.log(undefined > 0) //false
console.log(undefined <= 0) //false
console.log(undefined >= 0) //false

console.log(NaN == NaN) //false