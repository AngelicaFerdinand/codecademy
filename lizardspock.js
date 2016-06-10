var userChoice = prompt("Choose your weapon: rock, paper, scissors, lizard or Spock.");
var computerChoice = Math.random();
var result = "";

if (computerChoice <= 0.20) {
  computerChoice = "rock";
}
else if ( computerChoice <= 0.40) {
  computerChoice = "lizard";
}
else if (computerChoice <= 0.60) {
  computerChoice = "Spock";
}
else if (computerChoice <= 0.80) {
  computerChoice = "scissors";
}
else {
  computerChoice = "paper";
};


var compare = function (choice1 , choice2) {
    if (choice1 === choice2) {
        result = "We have a tie! There will be no winner today";
    }
  
    else if(choice1 === "rock") {
      if (choice2 === "lizard") {
        result = "Rock crushes lizard! You have vanquished the computer opponent.";
      }
      else if (choice2 === "Spock") {
        result = "Spock vaporizes rock! You have lost the battle.";
      }
      else if (choice2 === "scissors") {
        result = "Rock smashes scissors! You have defeated the computer!";
      }
      else {
        result = "Paper covers rock! The computer has won this time.";
      }
    }
  
    else if(choice1 === "lizard") {
      if (choice2 === "rock") {
        result = "Rock crushes lizard! You have vanquished the computer opponent.";
      }
      else if (choice2 === "Spock") {
        result = "Lizard poisons Spock! You have won the battle this time.";
      }
      else if (choice2 === "scissors") {
        result = "Scissors decapitate lizard! You have been defeated!";
      }
      else {
        result = "Lizard eats paper! You have won this time.";
      }
    }
  
    else if(choice1 === "Spock") {
      if (choice2 === "rock") {
        result = "Spock vaporizes rock! You have vanquished the computer opponent.";
      }
      else if (choice2 === "lizard") {
        result = "Lizard poisions Spock! You have lost this battle.";
      }
      else if (choice2 === "scissors") {
        result = "Spock smashes scissors! You have defeated the computer!";
      }
      else {
        result = "Paper disproves Spock! The computer has won this time.";
      }
    }
  
    else if(choice1 === "scissors") {
      if (choice2 === "rock") {
        result = "Rock smashes scissors! You have been vanquished by the computer opponent.";
      }
      else if (choice2 === "Spock") {
        result = "Spock smashes scissors! You have lost the battle.";
      }
      else if (choice2 === "lizard") {
        result = "Scissors decapitate lizard! You have defeated the computer!";
      }
      else {
        result = "Scissors cut paper! The computer has lost this time.";
      }
    }
  
    else if(choice1 === "paper") {
      if (choice2 === "rock") {
        result = "Paper covers rock! You have vanquished the computer opponent.";
      }
      else if (choice2 === "Spock") {
        result = "Paper disproves Spock! You have won the battle.";
      }
      else if (choice2 === "lizard") {
        result = "Lizard eats paper! You have been defeated by the computer!";
      }
      else {
        result = "Scissors cut paper! The computer has won this time.";
      }
    }
    else {
        result = "Sorry this game needs more code! Come back later.";
    };

};


compare(userChoice,computerChoice);

console.log("Your selection: " + userChoice);
console.log("Computer's selection: " + computerChoice);
console.log(result);
