const minNumber = 1;
const maxNumber = 10;

function guessSecretNumber() {
    const secretNumber = Math.floor(Math.random() * maxNumber) + 1;
    let attempts = 0;
    let guess = null;

    while (guess !== secretNumber) {
        const guessPrompt = prompt("Enter your guess: ");
        guess = parseInt(guessPrompt);

        if(isNaN(guess) || guess < minNumber || guess > maxNumber ) {
            console.log(`Invalid input! Please enter a number between ${minNumber} and ${maxNumber}.`);
            continue;
        }

        attempts++;

        if(guess < secretNumber) {
            console.log("Too Low! Try again.")
        } else if (guess > secretNumber) {
            console.log("Too High! Try again.")
        } else {
            console.log(`🎉 Congrats! You guessed the number in ${attempts} attempts.`);
            break;
        }
    }

    const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
    console.log(playAgainPrompt);
    const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "no";
    if (playAgain === "yes") {
        guessSecretNumber();
    } else {
        console.log("Thanks for playing! See you next time.");
    }
}

guessSecretNumber()