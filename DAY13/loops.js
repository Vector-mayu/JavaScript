// IF ELSE LOOPS IN JS

let age = 500;

if (age >= 18) {
  console.log(`Is eligible for Voting`);
} else if (age >= 30) {
  console.log(`U are litrally getting old man/women`);
} else {
  console.log(`Not eligible for vote`);
}

// Number to weekday

console.log(new Date().getDay()); // .getDay turns sunday to monday into numbers (0-6)

// Real Code for the same

switch (new Date().getDay()) {
  case 0:
    console.log(`SUNDAY`);
    break;
  case 1:
    console.log(`MONDAY`);
    break;
  case 2:
    console.log(`TUESDAY`);
    break;
  case 3:
    console.log(`WEDNEDAY`);
    break;
  case 4:
    console.log(`THRUSDAY`);
    break;
  case 5:
    console.log(`FRIDAY`);
    break;
  case 6:
    console.log(`SATURDAY`);
    break;
}

// for (let i = 1; i<=20; i++)
// {
//   console.log(`Hello Coder Army!!!!`);
// }

let result ="";
for(let i=0; i<5; i++)
{
  for(let j=1; j<6; j++)
  {
    result += j + ` `;
  }
  result += `\n`;
}
console.log(result);
