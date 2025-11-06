function connect(callback)
{
	console.log(`Connecting with Dominos...`);

	setTimeout(()=>{
		console.log(`Welcome to Dominos Mayuresh`);
		callback();
	}, 4000)
}

function placeOrder(callback)
{
	console.log(`Placing Your Order 2 Cheese Pizaa...`);

	setTimeout(()=>{
		console.log(`Order Placed Successfully`);
		callback();
	}, 3000)
}

function preparingOrder(callback)
{
	console.log(`Adding the best toppings for u...`);

	setTimeout(()=>{
		console.log(`Your Cheese Pizza is ready yum!!!`);
		callback();
	},6000)
}

function pickupOrder(callback)
{
	console.log(`Rider is picking your Pizza...`);

	setTimeout(()=>{
		console.log(`Order Picked Successfully`);
		callback();
	}, 3000)
}

function deliverOrder(callback)
{
	console.log(`Get ready to grab your cheese pizza...`);

	setTimeout(()=>{
		console.log(`Order delivered Succesfully`);
		callback();
	}, 5000)
}

// Actual callback Hell

connect(()=>{
	placeOrder(()=>{
		preparingOrder(()=>{
			pickupOrder(()=>{
				deliverOrder(()=>{
				})
			})
		})
	})
})