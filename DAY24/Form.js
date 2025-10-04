
const form = document.querySelector('form');

form.addEventListener('submit', (event) =>{

	event.preventDefault();

	const data = new FormData(form);
	
	// We are using For of loop
	for(let [key, value] of data.entries()) // Here we used Destructuring []
	{
		console.log(key, value);
	}
})
