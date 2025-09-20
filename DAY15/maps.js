//   Maps (using maps now we can modify the answer)
// Filter never modify the final answer it just filters and prints

const arr = [1,2,3,4,5];
const result = arr.map((num) => num*num);
console.log(result);
console.log(arr); // Og array is not modified 

// Using map and filter together

const res = arr.filter((num) => num%2==0).map((num1) => num1*num1);// this is called chaining
// U can add more maps ahead
console.log(res);

let resu = arr.reduce();
console.log(resu);
