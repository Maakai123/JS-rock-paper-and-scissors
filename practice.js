const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")
const  resultDiv  =  document.querySelector(".result")

//to increment 
let compScore = 0;
let playerScore = 0;

//How to create a random image

function getComputerPlay() {

   const  arrayOfChoices = ["Rock", "Paper", "Scissors"];
   const  randomNum =  Math.floor(Math.random()* arrayOfChoices.length)
   return arrayOfChoices[randomNum]

}

const playerSelection = 'Rock'
//compare playerselection and computer Selection
function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    resultDiv.textContent = `you tied! you both picked ${playerSelection}`

  } else if( playerSelection === 'Scissors' && computerSelection === 'Rock') {
    compScore++

    resultDiv.textContent = 'You Loss, computer wins'

  } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerScore++
    resultDiv.textContent = "You win, Scissors beats Paper"

  } else if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
      playerScore++
      resultDiv.textContent = 'you Win,Rock beats Scissors'
  } else if(playerSelection === 'Rock' && computerSelection === 'Paper') {
    compScore++
    resultDiv.textContent = 'You Loss, Paper beats Rock'
  } else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
    playerScore++
    resultDiv.textContent = 'You win, Paper beats Rock'
  } else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
    resultDiv.textContent = 'You Loss, Scissors beats Paper'
  }
}


function playGame(playerSelection) {

  const computerSelection = getComputerPlay();
  
 
  playRound(playerSelection, computerSelection);

  if(playerScore === 5) {
    resultDiv.textContent = ' Congratulations! You win the game';
  } else if(compScore === 5) {
    resultDiv.textContent = 'Computer wins the game';
  } else {
    return "Error"
  }


}










rockButton.addEventListener('click', () => {
    playGame('Rock');
    
})

paperButton.addEventListener('click', () => {
    playGame('Paper')
  })


  scissorsButton.addEventListener('click', () => {
    playGame('Scissors')
  })