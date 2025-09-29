document.body.addEventListener("click", (event)=>{ // Here Event is for x and y axis

	const circle = document.createElement('div');
	circle.className = 'circle';

	circle.textContent = "";

	const color = ["red","blue","green","yellow","orange","purple","pink","brown","cyan","magenta","lime","teal","indigo","violet","gold","silver","maroon","navy","olive","coral"];
	circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];

	const x = event.clientX;
	const y = event.clientY;

	circle.style.left = `${x}px`;
	circle.style.top = `${y}px`;

	document.body.appendChild(circle);

	setTimeout(()=>{
		circle.remove();
	}, 5000)
})