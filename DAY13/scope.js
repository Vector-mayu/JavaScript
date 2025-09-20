//Global Scope vs Local Scope/Functional Scope

// Global Scope
let a = 10;
const b = 20;
var c = 30;

console.log(a,b,c);

// Functional/Local scope
function greet(){
	let m = 20;
	console.log(`here m = 20 is local scope`);
}
greet();
// console.log(m);  ERROR marega


// Scope types 
let alpha = 20;
if(true)
{
	let alpha = 30;
	console.log(alpha); // prints 30 cuz in its scope
}
console.log(alpha); // Globally declared


// While Loop 
let i = 1;
while(i<6)
{
	if(i==5){
		console.log(`${5} is very close and less than 6`);
		i++;
	}
	else{
		console.log(`${i} is Less than 6`);
		i++;
	}
}


// Print array using Loops

let arr = [12,13,14,15,16];
for(let i=0; i<arr.length; i++)
{
	console.log(`${arr[i]} is on position ${i+1}`);
} 
 

// Objects in loops
let user = {
	name: `Mayuresh`,
	city: `Thane`,
	phone: 9834676721
}

const key = Object.keys(user); // Stores all the keys in a Array
// Lets Access values using keys form objets

for(let i = 0; i<key.length; i++)
{
	console.log(`${key[i]} : ${user[key[i]]}`);
}




