// Function to get the computer's choice
function getComputerChoice() {
    let computer_number = Math.random();
    if (computer_number <= 1/3) {
        return "Rock";
    } else if (computer_number > 1/3 && computer_number <= 2/3) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


// Function to play a round of the game
function playRound(humanChoice) {
    humanChoice = humanChoice.toUpperCase();
    let computerChoice = getComputerChoice().toUpperCase();

    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        return 1; // Human wins
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        return 1; // Human wins
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        return 1; // Human wins
    } else if (humanChoice === computerChoice) {
        return 0; // Tie
    } else {
        return -1; // Computer wins
    }
}

// Keep scores outside `main()` so they persist
let user_score = 0;
let computer_score = 0;

// Main game logic
function main() {
    let game_section = document.querySelector("header");
    let show_user_score = document.getElementById("user-score");
    let show_comp_score = document.getElementById("computer-score");

    function handleUserChoice(user_choice) {
        if (user_score >= 5 || computer_score >= 5) return; // Stop if game is over

        let round_result = playRound(user_choice);
        let show_winner = document.createElement("p");
        show_winner.style.fontSize = "25px";

        if (round_result === 1) {
            user_score++;
            show_winner.textContent = "You Won!";
        } else if (round_result === -1) {
            computer_score++;
            show_winner.textContent = "You Lost :(";
        } else {
            show_winner.textContent = "We Have A TIE!";
        }

        // Update score display
        show_user_score.textContent = `Your Score: ${user_score} / 5`;
        show_comp_score.textContent = `Computer Score: ${computer_score} / 5`;

        game_section.insertBefore(show_winner, document.getElementById("game-instruction"));

        // Check for game over
        if (user_score === 5 || computer_score === 5) {
            if (user_score === 5) {
                show_winner.textContent = "You Won The Game!";
            } else {
                show_winner.textContent = "Computer Won The Game!";
            }
            return; // Stop the function
        }        

        setTimeout(() => show_winner.remove(), 1500); // Remove after 2 seconds
    }

    document.getElementById("scissors").addEventListener("click", () => handleUserChoice("scissors"));
    document.getElementById("rock").addEventListener("click", () => handleUserChoice("rock"));
    document.getElementById("paper").addEventListener("click", () => handleUserChoice("paper"));
}
main();

