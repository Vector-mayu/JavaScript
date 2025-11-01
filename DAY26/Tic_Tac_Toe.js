// Winner Array 

// let winner = [
//   [0, 1, 2], top row
//   [3, 4, 5], middle row
//   [6, 7, 8], bottom row
//   [0, 3, 6], left column
//   [1, 4, 7], middle column
//   [2, 5, 8], right column
//   [0, 4, 8], main diagonal
//   [2, 4, 6]  anti diagonal
// ];


const board = document.querySelector('.board'); // selecting the element from HTML
let turn = 'O'; // 1st Turn should be for O
let total_turns = 0;

const winner = [
	[0,1,2],[3,4,5],[6,7,8],
	[0,3,6],[1,4,7],[2,5,8],
	[0,4,8],[2,4,6]
] // 2-D Array for winning Condition

let tictactoe = new Array(9).fill('E'); // Create an array of size 9 and initially fill all index with E

function CheckWinner(){
	for(let [index0, index1, index2] of winner)
	{
		if(tictactoe[index0]!='E' && tictactoe[index0]===tictactoe[index1] && tictactoe[index1]===tictactoe[index2])
		{
			return 1;
		}
	}

	return 0;
}

let callgame = (event) => {
	const element = event.target;
	
	if(tictactoe[element.id] === 'E')
	{
		total_turns++;
		if(turn === 'O')
		{
			element.innerText = 'O';
			tictactoe[element.id] = 'O';
			element.style.color = 'rgb(68, 137, 240)';
			if(CheckWinner())
			{
				let msg = document.querySelector('.winning-message');
				msg.style.color = 'rgb(68, 137, 240)';
				msg.innerText = `Winner O`;
				board.removeEventListener('click', callgame);
				return;
			}
			turn = 'X';
		}
		else{
			element.innerText = 'X';
			tictactoe[element.id] = 'X'
			element.style.color = 'rgba(243, 60, 63, 1)';
			if(CheckWinner())
			{
				let msg = document.querySelector('.winning-message');
				msg.style.color = 'rgba(243, 60, 63, 1)';
				msg.innerText = `Winner X`;
				board.removeEventListener('click', callgame);
				return;
			}
			turn = 'O';
		}
	}

	if(total_turns === 9)
	{
		document.querySelector('.winning-message').innerHTML = `Match Draw`;
	}
}

board.addEventListener('click', callgame);

let Restart = document.getElementById('restartButton');
Restart.addEventListener('click', (event) => {
	const cell = document.getElementsByClassName('cell');

	Array.from(cell).forEach((value)=>{
		value.innerHTML = '';
	})

	turn = 'O';
	total_turns = 0;
	tictactoe = new Array(9).fill('E');
	board.addEventListener('click', callgame);
	document.getElementById('winningMessage').innerHTML = ' ';
})


