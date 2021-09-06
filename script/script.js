import { Game } from './module/gameBoard.js';
import { DisplayBoard } from './module/gameDisplay.js';
import { Player } from './module/player.js';

/* Initialize 1st game */
const playerOne = new Player("Player 1", "x");
const playerTwo = new Player("Player 2", "o");
const game = new Game(playerOne, playerTwo);
const displayGame = new DisplayBoard(game);

let currentPlayer = playerOne;
let play = "play";

/* Helper functions */
function cbClickedCase(event) {
    /* CB fct. When the gameBoard is clicked */

    /* Check if game is running*/
    if (play != "play") return;

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

    /* Check if game end */
    play = game.resolve();
    if (play != "play") {
        displayGame.resovleDisplay(play, currentPlayer)
    } 

    currentPlayer = game.nextPlayer(currentPlayer);
}

function playCase(posX, posY) {
    /* Play the round for the player */
    game.setValueAtPosition(posX, posY, currentPlayer.symbol);
    game.coupJoue += 1;
    displayGame.displayCase(posX, posY);
}

function makeNewGame() {
    /* Reset the game */
    displayGame.resetGameBoard();
    play = "play";
    currentPlayer = playerOne;
}

function changeName(e, player) {
    e.preventDefault();

    const newName = document.forms[`getName${player}`]["name-player"].value;

    if (player == "PlayerOne") {
        playerOne.name = newName;
    }
    if (player == "PlayerTwo") {
        playerTwo.name = newName;
    }
}

/* Event Listeners */
document.querySelector(".board").addEventListener("click", cbClickedCase);
document.querySelector(".btn-reset").onclick = () => { makeNewGame() };
document.querySelector(".getNamePlayerOne").onsubmit = (e) => {changeName(e, 'PlayerOne')};
document.querySelector(".getNamePlayerTwo").onsubmit = (e) => {changeName(e, 'PlayerTwo')};

