// Non primitive Datatypes 

//Array

let arr = [10, 20, 30, 40];
let arr1 = ['mayuresh', 31, 'Aditya', 46];

console.log(arr);
console.log(arr1);
console.log(typeof arr);
console.log(typeof arr1);

//Creation of Object in JS

let obj = {
  accont_number: 77,
  account_name: 'Mayuresh Dandekar',
  Balance: 1452301,
  Password: 'MayuD@5684'
}
console.log(obj);

// when we request data from backend this object provides advantage of
// returing all values at once with key and value instead of array 
// this method is more better


// TYPE Conversion

let account_number = "100000";
let num = Number(account_number); // String is converted into number(Number)
console.log(typeof account_number);
console.log(typeof num);
console.log(num + 50);

// Boolean Into Number

let pros = true;
console.log(Number(pros));

// String To Number

let n = 14;
console.log(String(n));
console.log(typeof n);
