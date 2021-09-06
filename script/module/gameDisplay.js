function DisplayBoard(game) {

    this.game = game;
    this.boardArray = game.gameBoard;
    this.winnerElement = document.querySelector(".winner-display");
    this.gameBoardElement = document.querySelector(".game-board");

    this.displayCase = (posX, posY) => {
        const boardCase = document.querySelector(`[data-type="${posX}-${posY}"]`);
        if ( this.game.getValueAtPosition(posX, posY) == 0) {
            boardCase.innerHTML = "";
        }
        else {
            boardCase.innerHTML = this.game.getValueAtPosition(posX, posY);
        }
    }

    this.hideGameBoard = () => {
        this.gameBoardElement.style.display = "none";
    }

    this.displayWinner = (winner) => {
        this.winnerElement.style.display = "block";
        this.winnerElement.innerHTML = `${winner.str()} won!`;
    }

    this.resetGameBoard = () => {
        this.game.reset();
        this.boardArray = game.gameBoard;

        this.gameBoardElement.style.display = "block";
        this.winnerElement.style.display = "none";

        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                this.displayCase(i, j);
            }
        }
    }
}

export {DisplayBoard}