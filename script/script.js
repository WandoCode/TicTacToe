import {Game} from './module/gameBoard.js';
import {DisplayBoard} from './module/gameDisplay.js';

const game = new Game();
let boardArray = game.gameBoard;
const displayGame = new DisplayBoard(boardArray);