// Study of Callback and how to reuse the code insetad of hard-coding it 

function fetchdata(callback){
	console.log(`Fetching User Data...`);
	
	setTimeout(()=>{
		console.log(`User Data Fetched Successfully`);
		const name = `Mayuresh Dandekar`;

		// Callback Function
		callback(name); // mention callback in setTimeout()
	}, 3000)
}

// Actual GetName Function 
function GetName(name){
	console.log(`Hello Mr. Mayuresh Welcome to our Terminal`);
}

fetchdata(GetName); // call GetName Here which is acting as callback function