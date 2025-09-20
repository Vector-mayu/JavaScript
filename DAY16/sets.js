// Sets in JavaScript

const set1 = new Set();
// Adittion In Set 
set1.add(1);
set1.add(`Mayuresh`);
console.log(set1.size, set1, typeof(set1)); // Set is also an object


// Checking Insta unique user_id
const user_id = new Set([`Rohit_negi`, `Dandekar@143`, `Mayu14`, `dandekarmayu`]);
let new_user = `dandekarmayu`;
console.log(user_id.has(new_user)); // Checks if `dandekarmayu exists or not`[TRUE]

// Delete info from set
user_id.clear();
console.log(user_id);

// Operations on Sets 

//Union Opearation

let set2 = new Set([10,20,30,40,60]);
let set3 = new Set([60,70,80,90,100]);

let union = new Set([...set2, ...set3]);// We used Spread Operator
// Due to spread operations we can individually push all the values into the set
console.log(union);

// Intersection Operation

let inter = new Set([...set2].filter((num) => set3.has(num))); // Pushes common values into set 
console.log(inter);
 