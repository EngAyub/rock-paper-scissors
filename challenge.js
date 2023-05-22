function playGame(play1, play2) {
    if (play1 === play2) {
      return "tie";
    } else if (
      (play1 === "rock" && play2 === "scissors") ||
      (play1 === "paper" && play2 === "rock") ||
      (play1 === "scissors" && play2 === "paper")
    ) {
      return "Player One win";
    } else {
      return "Player Two win";
    }
  }
  console.log(playGame("rock", "paper"));
  console.log(playGame("scissors", "paper")); 
  console.log(playGame("rock", "rock"));     
  console.log(playGame("scissors", "rock"));  
