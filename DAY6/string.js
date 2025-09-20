// Strings in JavaScript 

let str1 = "Mayuresh Dandekar";
let str2 = 'Namaste duniya kaise ho app sabh';
let str3 = `Welcome to coder army DSA + WebDev`;

console.log(str1);
console.log(str2);
console.log(str3);

let price = 5500;
console.log(`price of NEXUS cource is ${price} Buy it Asap`);
console.log(`This Cource Include everything u need to know in just ${price}`);

//String concatenation

let s1 = `Meet You`;
let s2 = ` Soon`;
let s3 = s1 + s2;
console.log(s3);
console.log(`"Yes I will Come"`);
console.log(s3.length);
console.log(`Hence we learnt Concatenation in JS \nnow will go ahead with great Momentum`)

//Upper to lowe and vice versa

let user_name = `Ronaldo`;
let search = user_name.toUpperCase();
console.log(user_name);
console.log(search);

let temp = `Make this code concise always Make`;
console.log(temp.indexOf(`code`)+1);
console.log(temp.includes(`mayu`));
console.log(temp.lastIndexOf(`Make`));
console.log(temp.indexOf(`Mayu`));

//Extracting Substring

let new1 = `MAv1Ac1qoI9`;
console.log(new1.slice(3,9));
console.log(new1.substring(3,9));
console.log(new1.substr(0,5));

//Replacing Substring

let greet = `Welcome User`;
console.log(greet);
console.log(greet.replace(`User`, `Back Mayuresh`));
let greet1 = `Saa Dha Gaa Maa Saa`;
console.log(greet1);
console.log(greet1.replaceAll(`Saa`, `Ree`));

//Splitting String

let str10 = `Money always Worth`;
console.log(str10.split(``));

//Trim 

let ma = `   Lemme Convey    `;
console.log(ma.trim());
console.log(ma.trim().length);

//New Keyword for string creation

let NewStringIs = new String(`Great ways never lies`); 
//this will be saved in HEAP
console.log(NewStringIs);
console.log(typeof NewStringIs);
