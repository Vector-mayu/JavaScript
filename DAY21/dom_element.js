//  Adding Elements using JS

function attach(content) // S5
{
	const element = document.createElement('li'); // S1
	element.innerHTML = content; // S2

	const element1 = document.createElement('li');
	element1.innerHTML = content + ' V2.O'

	const parent = document.getElementById('list'); // S3
	//parent.appendChild(element) // S4 Here we can only attach only 1 Statement
	parent.append(element, element1);
}

attach('GitHub');
attach('HTML');
attach('CSS');


// ************** Get And Set Attribute **************

const target = document.getElementById('list'); // Check this in terminal
console.log(target.getAttribute('id')); // Getter
target.setAttribute("class", "Mayuresh"); // Check on Chrome Inspect
target.removeAttribute('class'); // Removes the particular Attribute


// Insert Adjacent Elements

const parent = document.getElementById("list");

const element2 = document.createElement("div");
element2.innerHTML = "Hello Coder Army";

parent.insertAdjacentElement("beforebegin", element2);
// parent.insertAdjacentElement("afterbegin", element2);
// parent.insertAdjacentElement("beforeend", element2);
// parent.insertAdjacentElement("afterend", element2);


// Remove Any Child using .remove

document.querySelector('li').remove() // C++ is Removed or Element.remove()



