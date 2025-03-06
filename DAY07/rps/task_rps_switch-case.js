function rockPaperScissorsGame() {
    const userChoicePrompt = prompt("Enter Rock 🪨, Paper 🧻, or Scissors ✂️");
    const userChoice = userChoicePrompt.toLowerCase();

    let computerChoice;

    const randomNumber = Math.floor(Math.random() * 3 ) + 1;

    switch(randomNumber) {
        case 1:
            computerChoice === "rock";
            break;
        case 2:
            computerChoice === "paper";
            break;
        case 3:
            computerChoice === "scissors";
            break;
    }

    console.log("User selected ", userChoice);
    console.log("Computer selected ", computerChoice);




    const playAgainPrompt = prompt("Do you want to play again? (yes/ no)");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

    switch(playAgain) {
        case "yes":
            rockPaperScissorsGame();
        default: {
            console.log("Thanks for Playing! See you Next Time")
        }
    }

}
rockPaperScissorsGame();