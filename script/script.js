import { Game } from './module/gameBoard.js';
import { DisplayBoard } from './module/gameDisplay.js';
import { Player } from './module/player.js';

/* Initialize 1st game */
const playerOne = new Player("Player 1", "x");
const playerTwo = new Player("Player 2", "o");
const game = new Game(playerOne, playerTwo);
const displayGame = new DisplayBoard(game);

let currentPlayer = playerOne;
let play = true;

/* Helper functions */
function cbClickedCase(event) {
    /* CB fct. When the gameBoard is clicked */

    /* Check if game is running*/
    if (!play) return;

    /* Get infos about the click */
    const pos = event.target.attributes["data-type"].value.split("-");
    let posX = pos[0];
    let posY = pos[1];
    
    /* Check if the played case is free */
    if (game.checkIfCaseFree(posX, posY)) {
        {
            /* Play the game */
            playCase(posX, posY);
        }
    }
    /* Check if game is won */
    play = !game.isWin();
    if (!play) {
        displayGame.hideGameBoard();
        displayGame.displayWinner(currentPlayer);
    }
    
}

function playCase(posX, posY) {
    /* Play the round for the player */
    game.setValueAtPosition(posX, posY, currentPlayer.symbol);
    currentPlayer = game.nextPlayer(currentPlayer);
    displayGame.displayCase(posX, posY);
}

function makeNewGame(e) {
    /* Reset the game */
    console.log(1);
    displayGame.resetGameBoard();
}


/* Event Listeners */
document.querySelector(".board").addEventListener("click", cbClickedCase);
document.querySelector(".btn-reset").onclick = makeNewGame;
