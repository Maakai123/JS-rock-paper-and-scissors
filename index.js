
let compScore = 0;
let playerScore = 0;

//Write computer function, that can generate random number

function  getComputerChoice() {
 const arrofchoices = ['Rock','Paper', 'Scissors'];
 const randomNum = Math.floor(Math.random()* arrofchoices.length)
  return arrofchoices[randomNum]

}


//how to compare playerSelection and computer Selection and return the winner
function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    return 'It is a tie'

  }else if(playerSelection === 'Scissors' && computerSelection === 'Rock'){
    compScore++
    return 'You Loss, computer wins'
    
  } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerScore++
    return 'You Win'
    
  } else if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
    playerScore++
    return 'You win'
    
  } else if(playerSelection === 'Rock' && computerSelection === 'Paper') {
    compScore++
    return 'You Loss, computer Wins'
   
  } else if(playerSelection === 'Paper' && computerSelection === 'Rock' ) {
    playerScore++
    return 'You win'
    
  } else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
    compScore++
    return 'You Loss, computer Wins'
   
  }
  


}


const playerSelection = "Rock";  
const  computerSelection = getComputerChoice();

//Function play 
function playGame() {

  //playerSelection func
 const playerSelection = prompt("Rock, Paper, or Scissors").toLowerCase();


 //check if player enters valid input or cancels it

 
 

 //converts player's input to Lowercas
console.log(`you choose ${playerSelection} and the computer choose ${computerSelection}`)


}



function game() {

  for( let i = 0; i < 5; i++) {
    playGame()
   
    console.log(playRound(playerSelection, computerSelection))
  
  }

  if (playerScore > compScore ) {
    return 'You beat Computer, you are good!!'
  } else if(playerScore < compScore) {
    return 'Computer beats you '
  } else {
    return 'it is a tie';
  }
}


console.log(game())
