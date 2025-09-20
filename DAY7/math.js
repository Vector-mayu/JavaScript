// Maths is also object in JavaScript

console.log(Math.E); // Here E represents log base e(10)
console.log(Math.LN10); //ln10 = loge10
console.log(Math.PI.toPrecision(3));


// Generation of random value 
console.log(Math.random); // this value is 0 <= vlaue <=1


//Convert it into normal number
console.log(Math.random()*10)


//Floor and Ceil

let m = 143.16;
console.log(Math.floor(m)); // gives only before point value
console.log(Math.ceil(m)); // give +1 value if point exist


// Floor + random function

console.log(Math.floor(Math.random()*10)); // 0-9
console.log(Math.floor(Math.random()*10)+1);


// min 40 max 50
console.log(Math.floor(Math.random()*(11+1))+40);
//formula Math.random((max-min)+1 + min))


// 0-10(11 types)
console.log(Math.floor(Math.random()*11)+0);


// 30-40(11 types)
console.log(Math.floor(Math.random()*11)+30);


//Ludo 1-6
console.log(Math.floor(Math.random()*6)+1); // not used for OTP
