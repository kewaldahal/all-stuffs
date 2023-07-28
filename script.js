function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = determineWinner(userChoice, computerChoice);

    displayResult(userChoice, computerChoice, result);
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function displayResult(userChoice, computerChoice, result) {
    const resultElement = document.getElementById("result");

    resultElement.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}
