//How to Store objects in JS

const obj = {
  name: `Mayuresh`,
  gender: `Male`,
  age: 19,
  account_balance: 4190055
}; //Obj consist of KEY and VALUE

console.log(obj);

// Ways to access any key and value
console.log(obj.name);
console.log(obj[`account_balance`]);


// Using number as KEY in OBJ

const obj1 = {
  0: 21,
  2: 22,
  3: 23
};

console.log(obj1[`0`]);
console.log(obj1[0]);


//Creating class and giving properties 1 by 1

const person = new Object(); // Object here is Constructor
//Propety add karo
person.name = `Mayuresh`;
person.age = 20;
person.gender = `Male`;
person.score = 1671;
person.years = 5;
console.log(person);

// Property Delete karo
delete person.status;
console.log(person);

// Modify or Update
person.name = `Mayuresh Dandekar`;
console.log(person);


// Best way to create a class

class People{
  constructor(name, age, gender)
  {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

let people1 = new People(`Shreyash`, 14, `Male`);
let people2 = new People(`Ganesh`, 51, `Male`);
console.log(People);
console.log(people1);
console.log(people2);

// Print key in any Object using arrays
const arr = Object.keys(people1);
console.log(arr);

//Print values in any object using arrays



