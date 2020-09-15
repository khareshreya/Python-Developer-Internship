//getting user's choice
const getUserChoice= userInput=>{
  userInput= prompt("Enter your choice:");
  userInput = userInput.toLowerCase();
  if (userInput==="rock" || userInput==="bomb" || userInput==="scissors" || userInput==="paper"){
    return userInput;
  }

  else{
    console.log("Invalid choice");
  }
}

const getComputerChoice=()=>{
  random= Math.floor(Math.random()*3);
  switch (random){
    case 0: return("rock");
    break;
    case 1: return("paper");

      break;
    case 2: return("scissors");

      break;
  }

}

const determineWinner=(userChoice,computerChoice)=>{
  if (userChoice==="bomb"){
    return("You won")
  }
  if (userChoice===computerChoice){
    return("The game was a tie");
  }
  else {
    if(userChoice==="rock"){
      if (computerChoice==="paper"){
        return("Computer won");
      }
      else{
        return("You won")
      }
    }
     if(userChoice==="paper"){
       if (computerChoice==="scissors"){
         return("Computer won");
       }
       else{
         return("You won")
       }
     }
     if (userChoice==="scissors"){
       if (computerChoice==="rock"){
         return("Computer won");
       }
       else{
         return("You won")
       }
     }

  }


}
const playGame=()=>{
var userChoice=getUserChoice();
console.log(`Your Choice: ${userChoice}`);
var computerChoice=getComputerChoice();
console.log(`Computer Choice: ${computerChoice}`);
console.log(determineWinner(userChoice,computerChoice));
}

playGame()
