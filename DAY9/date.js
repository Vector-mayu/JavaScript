// Date in JavaScript

const d = new Date();
console.log(d);
console.log(d.toDateString());
console.log(d.toString()); // Important
console.log(d.toISOString());
// Date is Object type
console.log(typeof d);

// operations of dates

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMilliseconds());
console.log(d.getMinutes());
console.log(d.getSeconds());


// Timer 

const date1 = new Date();
const date2 = new Date("2025-08-16T00:00:00");

const date = date2-date1;
const days = Math.floor(date/(1000*60*60*24));
const hours = Math.floor(date/(1000*60*60)%24);
const minutes = Math.floor(date/(1000*60)%60);
const seconds = Math.floor(date/(1000)%60);


console.log(`For Tommorow :- ${hours} Hrs : ${minutes} Mins : ${seconds} secs Remaining...`);