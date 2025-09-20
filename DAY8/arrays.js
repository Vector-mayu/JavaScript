// Arrays

let arr = [1,2,3,4,`Mayuresh`];
console.log(arr);
console.log(arr.length);
console.log(arr[3]); //prints the value at index 3
console.log(arr.at(1)); // Prints like upper one 
// AT is the latest one to use and can print -ve indexes

// newarr vs arr

const newarr = arr // call by reference 
console.log(newarr == arr); // True
// Here arr is stored in heap and the reference is stored in stack
// When we say newarr == arr its true bcuz newarr will get referenece location which is always equal to arr cuz both are a reference 


//Structured Clone

let Visited = [`California`, `Uganda`, `Mumbai`, 23, `Denmark`];
const NonVisited = structuredClone(Visited); // It creates exact copy of Visited with new Address
console.log(NonVisited);
console.log(Visited == NonVisited); // False bcuz now they have difference Reference address


//Push Pop opeartions in JavaScript

let navi = [1,2,3,4,5];
navi.push(6);
console.log(navi);
navi.pop();
navi.pop();
console.log(navi);


// Pushing at Start in Array

navi.unshift(`Added`);
console.log(navi);

// Deleting At start in Array

navi.shift();
console.log(navi);


// Creating A hole in array

let arr1 = [1,2,3,4,`Here`,6];
delete arr1[0]; // Deletes element but creates a hole 
console.log(arr1); // One empty space

//Index of
console.log(arr1.indexOf(`Here`));
console.log(arr1.includes(`Here`)); // True


//Slice In Array

let sru = [`Mayuresh`,`Aditya`,`Suraj`, `Ayush`, `Siddesh`, `Om`, `Pranay`];
console.log(sru);
console.log(sru.slice(0,4));
// ---Original Array is not sliced---


//Splice In Array

console.log(sru.splice(0,6)); // Starts from 0 till next 6 indexes
// ---Splice Changes will reflected into original Array---
  // splice(staring_index, total_elements_to_spliced);
console.log(sru);


//Joins in JS

let l = [`dark`,21,`WebSeries`];
console.log(l.join(`---`)); // Converts into String a `---` is used btwn the elements of array


//Concatenation in Arrays

let m1 = [`MAyBach21`, `IsAdding`];
let m2 = [`Yes`, `Of Cource`];
let m3 = [`Price`, `1245777`];
let m4 = m1.concat(m2,m3);
console.log(m4);


m3.push(m1);
console.log(m3); // 2D arays is created 
console.log(m3[2][0])


//2D Arrays

let d2 = [[1,2,3],[4,5,6],[7,8,9]];
console.log(d2);
console.log(d2[0][0]);
console.log(d2[1][0]);
console.log(d2[2][0]);


// Convert 1D array into 2D

let newd2 = d2.flat(); // Infinity bcuz we can convert ND array into 1D array
console.log(newd2);


// How to know it Array or not

console.log(Array.isArray(newd2));