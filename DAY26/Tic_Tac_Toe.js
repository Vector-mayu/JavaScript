const board = document.querySelector('.board');
let turn = 'O';

let winner = [
	[0,1,2],[3,4,5],[6,7,8],
	[0,3,6],[1,4,7],[2,5,8],
	[0,4,8],[2,4,6]
]

let tictactoe = new Array(9).fill('E');

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

board.addEventListener('click', (event) => {
	const element = event.target;
	
	if(tictactoe[element.id] === 'E')
	{
		if(turn === 'O')
		{
			element.innerText = 'O';
			tictactoe[element.id] = 'O';
			if(CheckWinner())
			{
				document.querySelector('.winning-message').innerHTML = "Winner O"
			}
			turn = 'X';
		}
		else{
			element.innerText = 'X';
			tictactoe[element.id] = 'X'
			if(CheckWinner())
			{
				document.querySelector('.winning-message').innerHTML = "Winner X";
			}
			turn = 'O';
		}
	}
});

