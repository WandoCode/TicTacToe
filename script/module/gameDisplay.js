function DisplayBoard(game) {

    this.game = game;
    this.boardArray = game.gameBoard;

    this.winnerElement = document.querySelector(".winner-display");
    this.gameBoardElement = document.querySelector(".game-board");
    this.playerNameElement = document.querySelector(".player-name");
    this.menuElement = document.querySelector(".menu-game");
    this.vsElement = document.querySelector(".vs-container");


    this.displayCase = (posX, posY) => {
        const boardCase = document.querySelector(`[data-type="${posX}-${posY}"]`);

        if (this.game.getValueAtPosition(posX, posY) == 0) {
            boardCase.innerHTML = "";
        }
        else if (this.game.getValueAtPosition(posX, posY) == "x"){
            let imgElement= document.createElement("IMG");
            imgElement.setAttribute("src", "./Static/croix.svg");
            boardCase.appendChild(imgElement);
        }
        else if (this.game.getValueAtPosition(posX, posY) == "o"){
            let imgElement = document.createElement("IMG");
            imgElement.setAttribute("src", "./Static/circle.svg");
            boardCase.appendChild(imgElement);
        }
    }

    this.resovleDisplay = (play, winner) => {
        let textwinner = "";

        this.displayWinner();

        if (play == "tie") {
            textwinner = "Tie game!";
        }
        else{
            textwinner = `${winner.str()} won!`;
        }
        
        this.winnerElement.innerHTML = textwinner;
    }


    this.resetGameBoard = () => {
        this.game.reset();
        this.boardArray = game.gameBoard;

        this.displayGameBoard();

        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                this.displayCase(i, j);
            }
        }
    }

    this.displayGameBoard = () => {
        this.winnerElement.style.display = "none";
        this.gameBoardElement.style.display = "flex";
        this.playerNameElement.style.display = "none";
        this.menuElement.style.display = "flex";
        this.vsElement.style.display = "flex";
    }

    this.displayPlayer = () => {
        this.winnerElement.style.display = "none";
        this.gameBoardElement.style.display = "none";
        this.playerNameElement.style.display = "flex";
        this.menuElement.style.display = "none";
        this.vsElement.style.display = "none";
    }

    this.displayWinner = () => {
        this.winnerElement.style.display = "flex";
        this.gameBoardElement.style.display = "none";
        this.playerNameElement.style.display = "none";
        this.menuElement.style.display = "flex";
        this.vsElement.style.display = "none";

    }

    this.displayScore = () => {
        document.querySelector(".player-one-score").innerHTML = `${this.game.playerOne.str()} - ${this.game.playerOne.nbrWin}`;
        document.querySelector(".player-two-score").innerHTML = `${this.game.playerTwo.str()} - ${this.game.playerTwo.nbrWin}`;
    }
}

export {DisplayBoard}