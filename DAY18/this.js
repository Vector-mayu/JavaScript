// This is same as Window
// console.log(this);
//console.log(window === this); // True

// How to use Strict Mode

// "use strict"

let user = {
  name : `mayuresh`
}

Object.freeze(user);
user.name = `Mayuresh`;
console.log(user);

// Unused Strict Mode (point karega window object ko)
//   -> We Freezed the object and ofc he didnt changed the name but didny gave error in terminal 

// Used Strict Mode (Points undefinied)
//   -> Here it showed error on termial


// Object in this keyword

let obj1 = {
  name : `mayuresh`,
  age : 19,
  greet : () => {
    console.log(this.name);
  }
}
obj1.greet();

function meet(){
  console.log('Shreyash')
}
window.meet();




