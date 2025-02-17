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

// Function to get the human's choice via clicks (callback)
function getHumanChoice(callback) {
    let user_choice;
    let scissors = document.getElementById("scissors");
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");

    // Listen for user clicks and pass the choice to the callback
    scissors.addEventListener("click", function() {
        user_choice = "scissors";
        callback(user_choice); // Call the callback with the user's choice
    });
    rock.addEventListener("click", function() {
        user_choice = "rock";
        callback(user_choice); // Call the callback with the user's choice
    });
    paper.addEventListener("click", function() {
        user_choice = "paper";
        callback(user_choice); // Call the callback with the user's choice
    });
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

// Main game logic
function main() {
    let game_section = document.querySelector("header");
    let show_user_score = document.getElementById("user-score");
    let show_comp_score = document.getElementById("computer-score")
    let user_score = 0;
    let computer_score = 0;
    let ties = 0;

    // Start the game
    getHumanChoice(function(user_choice) {
        // Play one round each time the user clicks
        let round_result = playRound(user_choice);
        let show_winner = document.createElement("p");
        show_winner.style.fontSize = "25px";

        // Update scores based on round result
        if (round_result === 1) {
            user_score += 1; // Human Wins
            show_winner.textContent = "You Won!";
        } else if (round_result === -1) {
            computer_score += 1; // Human Loses
            show_winner.textContent = "You Lost :(";
        } else {
            ties += 1; // Tie!
            show_winner.textContent = "We Have A TIE!";
        }
        
        // Update the score display
        show_user_score.textContent = `Your Score: ${user_score} / 5`;
        show_comp_score.textContent = `Computer Score: ${computer_score} / 5`;

        if (user_score < 5 && computer_score < 5){
            // Call getHumanChoice again to listen for the next click
            getHumanChoice(function(next_user_choice) {
            // Use the new user choice for the next round
            user_choice = next_user_choice;
            return;
        });
        }
        else if (user_score == 5) {
            show_winner.textContent = "You Won!";
            game_section.insertBefore(show_winner, document.getElementById("game-instruction"));
        }
        else {
            show_winner.textContent = "Computer Won!"
            game_section.insertBefore(show_winner, document.getElementById("game-instruction"));
        }
    });
}

// Call the main function to start the game
main();
