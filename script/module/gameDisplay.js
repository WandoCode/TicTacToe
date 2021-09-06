function DisplayBoard(boardArray) {
    this.boardArray = boardArray;

    this.displayCase = (posX, posY) => {
        const boardCase = document.querySelector(`[data-type="${posX}-${posY}"]`);
        boardCase.innerHTML = boardArray[posY][posX];
    }
}

export {DisplayBoard}