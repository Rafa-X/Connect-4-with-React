//This helper file determines when a player won the game or not, checking the winning combinations
//gameBoard -> passed by reference

//move -> id of the circle clicked
export const isWinner = (gameBoard, move, currentPlayer) => {  //export -> pass the var to the gameBoard

	let board = [...gameBoard];  //spread operator(...) -> makes a copy of the array to avoid mutation of the original
	board[move] = currentPlayer;  //update the state in the circle clicked with the currentPlayer number

	//Winning combinatios
	const wins = [ 
		[0,1,2,3],
		[4,5,6,7],
		[8,9,10,11],
		[12,13,14,15],
		[0,4,8,12],
		[1,5,9,13],
		[2,6,10,14],
		[3,7,11,15],
		[0,5,10,15],
		[3,6,9,12]
	];

	//loop to check the board positions with the win combinations
	for(let i=0; i<wins.length; i++){
		
		//destructure the wins lines into a helper array - 4 vars because need 4 in a row to win
		//c's vars means player number
		const[c1, c2, c3, c4] = wins[i];  

		//update the board
		//Check if all the vars are the same (same player), first check if player != 0
		if (board[c1] > 0 && 
			board[c1] === board[c2] &&
			board[c2] === board[c3] &&
			board[c3] === board[c4])
		{
			return true;
		}  
	}
	return false;
}

export const isDraw = (gameBoard, move, currentPlayer) => {
	let board = [...gameBoard];  //spread operator(...) -> makes a copy of the array to avoid mutation of the original
	board[move] = currentPlayer;  //update the state in the circle clicked with the currentPlayer number

	let count = board.reduce((n, x) => n + (x === 0), 0);  //counts the zeros, sums in 'n' if the next element is 0
	return count === 0;  //return a bool, true zeros > 0, false zeros = 0
}

