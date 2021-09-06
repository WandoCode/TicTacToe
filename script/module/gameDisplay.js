function DisplayBoard(game) {
    
    this.game = game;
    this.boardArray = game.gameBoard;

    this.displayCase = (posX, posY) => {
        const boardCase = document.querySelector(`[data-type="${posX}-${posY}"]`);
        boardCase.innerHTML = this.game.getValueAtPosition(posX, posY);
    }

    this.displayWinner = (winner) => {
        const winnerDisplay = document.querySelector(".winner-display");
        winnerDisplay.innerHTML = `${winner.str()} won!`;
    }
}

export {DisplayBoard}