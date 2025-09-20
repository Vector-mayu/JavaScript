//static vs dynamic(heap)

let num1 = 143;
let num2 = new Number(143);
let num3 = new Number(143);
console.log(num1 == num2);
console.log(num2 == num3);


let n = 143.456;
console.log(n.toFixed(1)); // how many numbers after point
console.log(n.toPrecision(4)); // Roundoff 
console.log(n.toExponential(1)); // Converts in exponential
console.log(n.toString()); // Coverts into string
console.log(typeof n.toString());
