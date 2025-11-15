// Promises :- 

// Senior Dev Code :)
fetch('https://api.weatherapi.com/v1/current.json?key=35343777e89941e58a375445251011&q=mumbai&aqi=no')
.then(response=>response.json())
.then(data=> {
  console.log(`Current temp of Mumbai : ${data.current.temp_c}`);
  console.log(data.current.temp_f)
}
)
.catch(error=>console.log(error));


// junior DEVELOPER
// promise.then((response)=>{ // this is async task which is promise
// 	const res = response.json(); // hence this is also a promise

// 	res.then((data)=>{
// 		console.log(data);
// 	})
// })
// .catch((error)=>{
// 	console.log(error);
// })



// there are 3 states in promises 
// 1. pending
// 2. resolved
// 3. rejected

