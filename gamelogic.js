
//Create a function that randomly returns a string(Rock, Paper or Scissors)
//The function has been tested and works appropriately
function getComputerChoice() {
    let computer_number = Math.random();
    if (computer_number <= 1/3) {
        return "Rock"
    }
    else if(computer_number > 1/3 && computer_number <= 2/3) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

//Create a function that gets the Users input and returns it
function getHumanChoice(){
    let user_choice = prompt("What is your choice of weapon?");
    return user_choice
}
// Create a function that runs the logic of playing one round!
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase()
    computerChoice = computerChoice.toUpperCase()
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        console.log("I win :)");
        return 1;
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log("I win :)");
        return 1;
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        console.log("I win :)");
        return 1;
    } else if (humanChoice === computerChoice) {
        console.log("It's a tie");
        return;
    } else {
        console.log("I lost :(");
        return 0;
    }
}
    //Main Logic Of The Game.
    //Declare Two Variables To Keep Track Of Users Score and Computers Score!
    function main() {
        let user_score = 0;
        let computer_score = 0;
        let ties = 0;
        for (let i = 0; i < 5; i++) {
            user_choice = getHumanChoice();
            computer_choice = getComputerChoice();
            let round_result = playRound(user_choice, computer_choice);
            if (round_result == 1) {
                user_score += round_result;
            } else if (round_result == 0) {
                computer_score += 1;
            }
            else if (round_result == undefined) {
                ties += 1
            }
        }
        console.log(`Computer Score: ${computer_score}`);
        console.log(`My Score: ${user_score}`);
        console.log(`Ties: ${ties}`)
        if (user_score > computer_score) {
            console.log("I WIN")
        }
        else if (user_score < computer_score) {
            console.log("I LOST")
        }
        else {
            console.log("Its A TIE")
        }
    }
main()
    