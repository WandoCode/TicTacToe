function Game(playerOne, playerTwo) {

    this.gameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.coupJoue = 0;

    this.nextPlayer = function(player){
        return player == this.playerOne ? this.playerTwo : this.playerOne;
    }

    this.checkIfCaseFree = function (posX, posY) {
        return (this.getValueAtPosition(posX, posY) == 0) ? true : false;
    }

    this.getValueAtPosition = function(posX, posY) {
        return this.gameBoard[posY][posX];
    }

    this.setValueAtPosition = function (posX, posY, filling) {
        this.gameBoard[posY][posX] = filling;
    }

    this.isWin = function () {
        /* Look for 3 same symbols aligned */
        for (let i = 0; i < 3; i++){
            if ((this.gameBoard[0][i] == this.gameBoard[1][i]) && (this.gameBoard[0][i] == this.gameBoard[2][i])){
                return (this.gameBoard[0][i] == 0) ? false : true;
            }
        }

        for (let j = 0; j < 3; j++){
            if ((this.gameBoard[j][0] == this.gameBoard[j][1]) && (this.gameBoard[j][0] == this.gameBoard[j][2])){
                return (this.gameBoard[j][0] == 0) ? false : true;
            }
        }

        if (this.gameBoard[1][1] == 0) return false;

        if ((this.gameBoard[0][0] == this.gameBoard[1][1]) && (this.gameBoard[0][0] == this.gameBoard[2][2])){
            return true;
        }
        
        if ((this.gameBoard[2][0] == this.gameBoard[1][1]) && (this.gameBoard[1][1] == this.gameBoard[0][2])){
            return true;
        }

        return false;
    }

    this.resolve = () => {
        if (this.isWin()) {
            return "end";
        }
        else if (this.coupJoue == 9) {
            return "tie";
        }
        else {
            return "play";
        }
    }

    this.reset = () => {
        this.gameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        this.coupJoue = 0;
    }
    
}


export {Game};