let Game = () => {
    this.gameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    this.fillBoardPosition = function (posX, posY, filling) {
        this.gameBoard[posY][posX] = filling;
    }

    this.isWin = function () {
        /* Look for 3 same symbols aligned */

        for (let i = 0; i < 3; i++){
            if ((this.gameBoard[0][i] == this.gameBoard[1][i]) && (this.gameBoard[0][i] == this.gameBoard[2][i])){
                return true;
            }
        }

        for (let j = 0; j < 3; j++){
            if ((this.gameBoard[j][0] == this.gameBoard[j][1]) && (this.gameBoard[j][0] == this.gameBoard[j][2])){
                return true;
            }
        }

        if ((this.gameBoard[0][0] == this.gameBoard[1][1]) && (this.gameBoard[0][0] == this.gameBoard[2][2])){
            return true;
        }
        
        if ((this.gameBoard[2][0] == this.gameBoard[1][1]) && (this.gameBoard[1][1] == this.gameBoard[0][2])){
            return true;
        }

        return false;
    }
}


export {Game}