// Reduce is  Array Method

// It conrtains a Accumlator and A Current
const arr = [10,20,30,40,50];
//Syntax of Reduce
// const res = arr.reduce(CALLBACK FUN, INITIALIZATION)

const result = arr.reduce((acc, curr)=>{
  console.log(acc, curr);
  acc = acc + curr;
  return acc;
},   0 ); // Here 0 at last is the initial value of Accumlator

console.log(result);

// Alternate Method

const res = arr.reduce((acc, curr)=> acc+curr , 0);
console.log(res);


//

const fruits =[`orange`, `mango`, `orange`, `banana`, `peer`, `mango`, `pineapple`, `orange`, `mango`, `pineapple`];

const bucket = fruits.reduce((acc, curr) => {
  if(acc.hasOwnProperty(curr)) // Checks if any fruit is alredy in there
  {
    acc[curr]++;
  }
  else
  {
    acc[curr] = 1; // Else not presnt initialize it 1
  }
  return acc;
}, {}) // Here {} is and empty object as initialiazer

console.log(bucket);