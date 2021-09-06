import { Game } from './module/gameBoard.js';
import { DisplayBoard } from './module/gameDisplay.js';
import { Player } from './module/player.js';
import { App } from './module/app.js';

const playerOne = new Player("Player 1", "x");
const playerTwo = new Player("Player 2", "o");
const game = new Game(playerOne, playerTwo);
const displayGame = new DisplayBoard(game);

const app = new App(playerOne, playerTwo, game, displayGame);

/* Event Listeners */
document.querySelector(".board").addEventListener("click", app.mainPlay);
document.querySelector(".btn-new-game").onclick = () => { app.makeNewGame() };
document.querySelector(".getNamePlayer").onsubmit = (e) => {app.chooseName(e)};
document.querySelector(".btn-reset").onclick = () => {app.resetAll()};


