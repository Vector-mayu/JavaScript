// call back Function

// 1.Normal Function
function morning() {
  console.log(`Good Morning`);
}

function afternoon(){
  console.log(`Good Afternoon`);
}

morning();
afternoon();


//Call Back Function

function evening(after){
  afternoon()
  console.log(`Good Evening`);
}
evening(afternoon); 
// In call back function we pass function as a argument into a function  
 

// fetchData and setInterval using CALL BACK function

function fetchData(){
  console.log(`Fetching Data...`);
}

//setInterval(fetchData, 2000);// setInterval is predefined function and 2000 is -> 2sec


// For Each LOOP (call back Function principle)

let arr = [12,23,45,56,66];

arr.forEach( function (num) {
  console.log(`Absent roll Number : ${num} `);
})

// For each using arrow function
arr.forEach((num,index) => console.log(index,num));

arr.forEach((num,index,array) => {
  console.log(array[index]*2);
});

// Syntax Types 

// 1. arr.forEach(num) => single argument (value)
// 2. arr.forEach(num, index) => double argument (value, index number)
// 3. arr.forEach(num,index,array) => triple argument(value, index, array itself is passed)


// Filtering values 

let arr1 = [24,55,67,80,95];

const result = arr.filter( (num) =>{
  return num%2 == 0; // filters out even number from arr1
}) 
console.log(arr1); // All values
console.log(result); // Even Numbers


// Calculate marks beyond 60

const students = [
  {name:`Shreyash`, rank:103, marks:58},
  {name:`kaustubh`, rank:23, marks:81},
  {name:`tanishka`, rank:113, marks:45},
  {name:`anushka`, rank:29, marks:78},
  {name:`virat`, rank:268, marks:35},
  {name:`vikramaditya`, rank:455, marks:12},
  {name:`aniket`, rank:1, marks:99},
];

const res = students.filter((val) => val.marks > 60);
console.log(res);

//destructuring method

const resu = students.filter( ({marks}) => marks<50); // we destructured the arrays object
console.log(resu);