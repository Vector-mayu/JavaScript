// Maps in JS

const map1 = new Map([
  [`mayu`, 31],
  [`shreyash`, 32],
  [`sagar`, 67]
])
console.log(map1);

// Printing map using For-Of loop
for(let [key, value] of map1)// key and value are variable names
  console.log(key, value);