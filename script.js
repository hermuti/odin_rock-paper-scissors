const choices = ["rock", "paper", "scissors"]; //array containing the 3 options
const winners = []; //array that will store the result each round

function game() {
  //this function plays the game  5 rounds by calling the playround function in a loop
  //then displays the result by calling the logWins function.
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computrSelection = computerChoice();
  const winner = checkwinner(playerSelection, computrSelection);
  winners.push(winner); //this will store the winner in the winners array
  logRound(playerSelection, computrSelection, winner, round);
}

function playerChoice() {
  let input = prompt("Type ROCK,PAPER, or SCISSORS");
  while (input == null) {
    input = prompt("Type ROCK,PAPER, or SCISSORS");
    //this while loop ensures that an input is accepted before proceeding
  }
  input = input.toLowerCase(); //this will convert what ther user input to lower case
  let check = validateInput(input);
  while (check == false) {
    //this loop handles invalid text and will re-check for null input during validation retry
    input = prompt(
      "Type ROCK,PAPER, or SCISSORS spelling needs to be correct without a space."
    );
    while (input == null) {
      input = prompt("Type ROCK,PAPER, or SCISSORS");
    }
    input = input.toLowerCase(); //this will convert what ther user input to capital case
    check = validateInput(input);
  }
  return input;
  //console.log(input); this displays the user input in the console
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
  //Math.random; generates a decimal no be 0&1 eg;0.23,0.99
  //the random decimal no is multiplied by 3 (no of value in choices array)
  //the math.floor; rounds the number down to nearest integer.
}

function validateInput(choice) {
  //this will chake if the input from the user is correct and simmilar to the values in arrray choices
  return choices.includes(choice);
}

function checkwinner(choiceP, choiceC) {
  //this function check the winner
  if (choiceP === choiceC) {
    return "tie";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function logWins() {
  //this function calculate & display the total game results after all rounds are played
  let playerwins = winners.filter((item) => item == "player").length;
  let computerwins = winners.filter((item) => item == "computer").length;
  let ties = winners.filter((item) => item == "tie").length;
  console.log("Total Results:");
  console.log("player Wins: ", playerwins);
  console.log("computer Wins: ", computerwins);
  console.log("ties: ", ties);
}

function logRound(playerSelection, computrSelection, winner, round) {
  //this function display the game results after each round is played
  console.log("Round:", round);
  console.log("Player Choce: ", playerSelection);
  console.log("Computer Choice: ", computrSelection);
  console.log("Winner: ", winner);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}
