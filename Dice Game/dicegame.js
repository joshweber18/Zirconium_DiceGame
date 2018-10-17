

function runGame() { // master function
    let playerOneRolls = [];
    let playerTwoRolls = [];
    var playerOneDice = [3, 4, 5, 6, 7, 8];
    var playerTwoDice = [3, 4, 5, 6, 7, 8];
    var winningNumber = 3;
    let playerOneCounter = 0;
    let playerTwoCounter = 0;
    let winningCount = 6;
    while(playerOneCounter < winningCount && playerTwoCounter < winningCount) { // run one round
        playerOneRolls = rollDice(playerOneDice);
        playerTwoRolls = rollDice(playerTwoDice);

        for (let i = 0; i < playerOneRolls.length; i++){
            if (playerOneRolls[i] === winningNumber){
                 playerOneCounter++;
            }
        }

        for (let i = 0; i < playerTwoRolls.length; i++){
            if (playerTwoRolls[i] === winningNumber){
                playerTwoCounter++;
            }
        }
        
        if (playerOneCounter >= winningCount){
        window.alert("Player One Wins! " + playerOneCounter + "-" + playerTwoCounter);
        }
        else if (playerTwoCounter >= winningCount){
        window.alert("Player Two Wins! " + playerTwoCounter + "-" + playerOneCounter);
        }
}



/*function updateScore() {
    for (let i = 0; i < playerOneRolls.length; i++){
        if (playerOneRolls[i] === winningNumber){
            playerOneCounter++;
        }
    }
}*/

function rollDie(numberOfSides) {
    return Math.floor(Math.random()*numberOfSides)+1;
}

function rollDice(diceArray) {
    let playerRolls = [];
    for (let i = 0; i < diceArray.length; i++) {
        let x = rollDie(diceArray[i]);
        playerRolls.push(x);
    }
    return playerRolls;
}


console.log(runGame());

// Game- Whoever gets all 6 Dice to roll on the same side/number wins!
// Create 6 players, each have 6 dice.
// Give a number 1-6 that you want the dice to land on.
// Random number generated for 6 dices for each player.
// Obtain how many times the dice rolled on that number and take it out.