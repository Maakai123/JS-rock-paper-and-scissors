
let compScore = 0;
let playerScore = 0;

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const resultDiv= document.querySelector('.result')


//Write computer function, that can generate random number

function  getComputerChoice() {
 const arrofchoices = ['Rock','Paper', 'Scissors'];
 const randomNum = Math.floor(Math.random()* arrofchoices.length)
  return arrofchoices[randomNum]

}


//how to compare playerSelection and computer Selection and return the winner
function playRound(playerSelection, computerSelection) {

  if(playerSelection === computerSelection) {
    
    resultDiv.textContent = `you tied! You both picked ${playerSelection}`
    

  }else if(playerSelection === 'Scissors' && computerSelection === 'Rock'){
    compScore++

    resultDiv.textContent = 'You Loss, computer wins'
  
    
    
  } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerScore++
    resultDiv.textContent = 'You Win'
   
    
    
  } else if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
    playerScore++
   
    resultDiv.textContent = 'You Win'
   
   
    
  } else if(playerSelection === 'Rock' && computerSelection === 'Paper') {
    compScore++

    
    resultDiv.textContent = 'You Loss, computer Wins'

    
   
  } else if(playerSelection === 'Paper' && computerSelection === 'Rock' ) {
    playerScore++

   
    resultDiv.textContent= 'You win'
    
 

    
  } else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
    compScore++
    resultDiv.textContent= 'You Loss, computer Wins'
  
  }
  
 
 
  
}



//Event

/*
rockButton.addEventListener('click', ()=> {
  const  computerSelection = getComputerChoice();
  const playerSelection = 'rock'
  playRound(playerSelection, computerSelection)

})

paperButton.addEventListener('click', ()=> {
  const  computerSelection = getComputerChoice();
  const playerSelection = 'paper'
  playRound(playerSelection, computerSelection)

})


scissorsButton.addEventListener('click', ()=> {
  const  computerSelection = getComputerChoice();
  const playerSelection = 'scissors'
  playRound(playerSelection, computerSelection)
  console.log(`you choose ${playerSelection} and the computer choose ${computerSelection}`)
})
/*
const buttons = document.querySelectorAll('button');
//iterate or loop through each button
buttons. forEach((button)=> {
  button.addEventListener('click', ()=> {
    playGame(button.textContent);
  });
  console.log(button.id)
  
})

*/
//DOM
/*
const container = document.querySelector('#container');
  const content = document.createElement('div')
  content.classList.add('content')
  content.textContent = `playerSelection : ${playerScore} | computerSelection: ${compScore }`

  container.appendChild(content)
*/

function playGame(playerSelection ) {

  //playerSelection func
 //const playerSelection = prompt("Rock, Paper, or Scissors").toLowerCa

 

 //check if player enters valid input or cancels it

 const computerSelection =  getComputerChoice();
 playRound(playerSelection, computerSelection);

 if(playerScore === 5) {
  resultDiv.textContent = 'You win the game';

 } else if(compScore === 5) {
  resultDiv.textContent = 'Computer wins the game';
 } else {
  return "Error";
 }

 console.log(`you choose ${playerSelection} and the computer choose ${computerSelection}`)
 //converts player's input to Lowercas
 
 
 
 
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


/*
function game() {

 /*for( let i = 0; i < 5; i++) {
    const playerSelection =  "rock"
   
    console.log(playRound(playerSelection, computerSelection))
  
  }
  

  if (playerScore >= 5) {
    content.textContent = "Player 1 wins the game!";
  } else if (compScore >= 5) {
    content.textContent = "Player 2 wins the game!";
  }
}
*/

