// // Method 1

// const original_answer = ['Sachin Tendulkar', 'West Indies', 'Sachin Tendulkar', '264', 'Muttiah Muralitharan'];
// const form = document.querySelector('form');

// form.addEventListener('submit', (event) =>{
// 	event.preventDefault(); // Stops console from refreshing

// 	const data = new FormData(form); // Created a data which stores all data came from form
// 	const answer = Array.from(data.values()); // We converted that formData into array

// 	let result = 0;

// 	for(let i=0; i<answer.length; i++) // Iterated it and checked all individually
// 	{
// 		if(original_answer[i] === answer[i])
// 		{
// 			result++;
// 		}
// 	}

// 	const res = document.getElementById('result');
// 	res.innerText = `${result} out of 5 are correct`;
// })


// CODE OPTIMIZATION USING Objects for comparing the answers

const original_answer = {
	q1 : 'Sachin Tendulkar',
	q2 : 'West Indies',
	q3 : 'Sachin Tendulkar',
	q4 : '264',
	q5 : 'Muttiah Muralitharan' 
};

const form = document.querySelector('form');

form.addEventListener('submit', (event) =>{

	event.preventDefault(); // Dosent Refresh Console every time
	const data = new FormData(form); // Its an API which bring all the info on the form ans stores it

	let result = 0;

	for(let [key, value] of data.entries()) // [] we used for Destructuring the object
	{ // Here data.entries() is a Iterator which is store in [key, value] format
		if(value === original_answer[key])
		{
			result++;
		}
	}

	const output = document.getElementById('result');
	output.innerText = `${result} out of 5 are Correct`;
})
