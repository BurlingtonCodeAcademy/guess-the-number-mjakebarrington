/*
Apologies for all the comments.
It's the only way I can keep track of everything.
*/
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  //Set initial minimum value
  var min = 1;
  //Set initial maximum value
  var max = 100;
  //Set won to false and change it once number is guessed correctly
  var won = false;
  //Introduce the user to the game, and ask for their number.
  console.log("Let's play a game. Think of a number between 1 and 100. I will try to guess your number in 7 tries or less.")
  var userNumber = await ask("What is your secret number? ");

  //Until user inputs valid number, run this code
  while (userNumber < 1 || userNumber > 100) {
    var userNumber = await ask("I'm sorry, your number is not within the specified range, please enter again   ");
  }
  //If program hasn't won yet, run following code
  while (true) {
    var guess = Math.floor((min + max) / 2)
    var inputResponse = await ask("Is your number " + guess + "?")
    //if user responds yes, run this code
    if (inputResponse === "y" && inputResponse === userNumber) {
      console.log("Yay! I guessed your number. Thanks for playing.")
      //TO DO : Break if guessed correctly.
      //If answer is no, run this
    } else if (inputResponse === "n") {
        console.log("Shoot! Let me give it another shot.")
        var highLow = await ask("Is your number higher or lower? ")
          //If number is lower, do this:
          if (highLow === "l") {
            var max = guess
            var guess = Math.ceil(((max - min) / 2))
            //If number is higher, do this:
          } else if (highLow === "h") {
            var min = guess
            var guess = Math.ceil(((max + min) / 2))
          }
    }
  }
  process.exit();

}