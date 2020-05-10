const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput ==='paper' || userInput ==='scissors') {
   return userInput;  
  } else if (userInput ==='bomb') {
    return 'you win'
  } else { 
    console.log('Error!');  
  } 
  }
console.log( getUserChoice ('bomb'));
//should print 'paper'
let getComputerChoice = () => {
 switch (Math.floor(Math.random() * 3)){
  case 0:
    return 'rock';
    break;
  case 1:
    return 'paper';
    break;
  case 2:
    return 'scissors';
    break;
} 
}
console.log(getComputerChoice);
//should print 0 or 1 or 2
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Game is a tie' ; 
  }
  if (userChoice === 'scissors') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if (userChoice === 'paper') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
};
console.log(determineWinner('paper' , 'rock')); // prints something like 'The user won!
const playGame = () => {
   const userChoice = getUserChoice('scissors');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};

playGame();

