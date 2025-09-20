// Writeable enumerable and Configurable

// let obj ={}

// obj.name = `Mayuresh`;
// obj.balance = `12589537`;

// console.log(Object.getOwnPropertyDescriptor(obj, `name`));
// Here
// 1. Writable means we can write and update the name 
// 2. Configurable means we can change writable and enumerable
// Example of Configurable
let obj = {};
Object.defineProperty(obj, `name` , { // Here obj is the object name we took from, `name` is the key we used
	value: `mayu`,
	writable: true,
	enumerable: true,
	configurable: true
});


//WAP for not updating the key of account_number

let mayu = {
	name : `Mayuresh Dandekar`,
	account_number : 65478,
	balance : 580017
}

// By using Object.defineproperty we can change the WRITEABLE of mayu Object

Object.defineProperty(mayu, `account_number`, {
	writable : false
})

mayu.account_number = 23456; // Not applicable now
console.log(mayu.account_number); // hence now account number cannot be updated
console.log(Object.getOwnPropertyDescriptor(mayu ,`account_number`)); // see the configuration for all


// Enumerable 
// It basically hides the enumearbale property which is false
// It hides them when we use for in LOOp
// default enumerable is always TRUE

// example 
let student = {
	name : `om`,
	city: `thane`,
	age: `14`
};
console.log(Object.getOwnPropertyDescriptor(student , `name`)) // for now its true
// Lets name enumerable false
Object.defineProperty(student, `name`, {
	enumerable : false
})
// Wouldnt Print when we use for-in loop

for(let print in student)
	console.log(print) 
console.log(Object.getOwnPropertyDescriptor(student, `name`))
// Now name is hidden but can be directly accessed




