const gameCells = document.querySelectorAll('.cell');
const player1 = document.querySelector('.palyer1');
const player2 = document.querySelector('.palyer2');
const restartBtn = document.querySelector('.restartBtn');
const alertBox = document.querySelector('.alertBox');

// making variables
let currentPlayer = 'X';
let nextPlayer = 'O';
let playerTurn = currentPlayer;

// player1.textContent = `Player 1 : ${currentPlayer}`;
// player2.textContent = `Player 2 : ${nextPlayer}`;

// Function to start game 
const startGame = () => {
  gameCells.forEach(cell => {
    cell.addEventListener('click', handleClick);
  });
}

// Function to handle clicks
const handleClick = (e) => {
  if (e.target.textContent === '') {
    e.target.textContent = playerTurn;
   if (checkWin()){
      //  console.log(`${playerTurn} is a Winner!`);
       showAlert(`${playerTurn} is a Winner!`);
       disableCells();
   }
   else if (checkTie()){
      //  console.log(`It's a Tie!`);
       showAlert(`It's a Tie!`);
       disableCells();
   }
   else {
    changePlayerTurn();
    showAlert(`Turn for Player: ${playerTurn}`);
   }
  }
}

// Function to change player turn 
const changePlayerTurn = () =>{
  playerTurn = playerTurn === currentPlayer ? nextPlayer : currentPlayer;
}

// Function to decide winner 
const checkWin = () => {
  const winningConditions = [         //array for cells
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
       [0, 4, 8],
       [2, 4, 6],
  ];
  for (let i = 0; i < winningConditions.length; i++) {
    const [pos1, pos2, pos3]  = winningConditions[i];
    // console.log( `${pos1} ${pos2} ${pos3}`);
    if (gameCells[pos1].textContent !== '' &&
        gameCells[pos1].textContent ==  gameCells[pos2].textContent && 
        gameCells[pos2].textContent ==  gameCells[pos3].textContent) {
          return true;
        }  
  }
  return false;
}

// Function to check tie in the game
const checkTie = () => {
  let emptyCellsCount = 0;
  gameCells.forEach(cell => {
    if(cell.textContent === ''){
      emptyCellsCount++;
    }
  });
  return emptyCellsCount === 0 && !checkWin();
}

// Function to disable cells 
const disableCells = () => {
  gameCells.forEach(cell => {
      cell.removeEventListener('click', handleClick);
      cell.classList.add('disabled');
  });
}
// Function to restart game 
const restartGame = () => {
  gameCells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('disabled');
  })
  startGame();
}
restartBtn.addEventListener('click', restartGame);

// Fuinction to show alert 
const showAlert = (msg) => {
  alertBox.textContent = msg;
  alertBox.style.display = "block";
  setTimeout(()=> {
    alertBox.style.display = "none";
  },3000);
}

// calling start game function 
startGame();