import { Game}  from './module/gameBoard.js';
import { DisplayBoard } from './module/gameDisplay.js';
import { Player } from './module/player.js';

/*Event Listeners */
document.querySelector(".board").addEventListener("click", cbClickedCase);

/* Initialize 1st game */

const playerOne = new Player("Player 1", "x");
const playerTwo = new Player("Player 2", "o");
const game = new Game(playerOne, playerTwo);
const displayGame = new DisplayBoard(game);

let currentPlayer = playerOne;
let play = true;

/* Helper functions */
function cbClickedCase(event) {
    if (!play) return;

    const pos = event.target.attributes["data-type"].value.split("-");
    let posX = pos[0];
    let posY = pos[1];
    
    if (game.checkIfCaseFree(posX, posY)) {
        {
            playCase(posX, posY);
        }
    }
}

function playCase(posX, posY) {

    game.setValueAtPosition(posX, posY, currentPlayer.symbol);
    currentPlayer = game.nextPlayer(currentPlayer);
    displayGame.displayCase(posX, posY);
}