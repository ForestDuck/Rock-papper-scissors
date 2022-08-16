const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput==='rock' || userInput==='paper'|| userInput==='scissors'|| userInput==='bomb'){
    return userInput;
  }else {
    console.log("Error!")
  }
}


const getComputerChoice = () => {
  Math.floor(Math.random()*3);
  switch (Math.floor(Math.random()*3)){
   case 0:
    return 'rock';
   case 1:
    return 'paper';
    default: 
    return 'scissors';
    }
}



const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return "Tie";
  }
  if(userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return "You lose"
    }else{
      return 'You won'
    }
  }
   if(userChoice === 'papper'){
    if (computerChoice === 'scissors'){
      return "You lose"
    }else{
      return 'You won'
    }
  }
   if(userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return "You lose"
    }else
    {
      return 'You won'
    }
  }
   if(userChoice === 'bomb'){
    if (computerChoice=== 'rock'||'scissors'||'paper' ){
      return "You won"
    }
  }
}



const playGame = ()=> {
  const userChoice = getUserChoice('scissors');

const computerChoice = getComputerChoice();

console.log('You threw:'+ userChoice);
console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame()
