// For Of loop 
//Syntax for(let variable_name of datatype)

let arr = [1,2,3,4,5];
for(let value of arr)
{
  console.log(value);
}
//     NOTE - Object is not iteratable in loops


//How to iterate over object 
let users = {
  name: `Mayuresh`,
  city: `Thane`,
  gender: `Male`
}
for(let val of Object.keys(users))// Object.keys stores all the values of the keys in array
{
  console.log(val, users[val]);
}


 
