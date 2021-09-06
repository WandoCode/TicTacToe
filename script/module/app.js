function App(playerOne, playerTwo, game, displayGame) {

    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.game = game;
    this.displayGame = displayGame;

    this.currentPlayer = this.playerOne;
    this.play = "play";

    this.mainPlay = (event) => {
    /* Main fct. Play the game. */

        /* Check if game is running*/
        if (this.play != "play") return;

        /* Get infos about the click */
        const pos = event.target.attributes["data-type"].value.split("-");
        let posX = pos[0];
        let posY = pos[1];
        
        /* Check if the played case is free */
        if (this.game.checkIfCaseFree(posX, posY)) {
            {
                /* Play the game */
                this.playCase(posX, posY);
            }
        }

        /* Check if game end */
        this.play = this.game.resolve();
        if (this.play != "play") {
            this.displayGame.resovleDisplay(this.play, this.currentPlayer)
        } 

        this.currentPlayer = this.game.nextPlayer(this.currentPlayer);
    }

    this.playCase = (posX, posY) => {
        /* Play the round for the player */
        this.game.setValueAtPosition(posX, posY, this.currentPlayer.symbol);
        this.game.coupJoue += 1;
        this.displayGame.displayCase(posX, posY);
    }

    this.chooseName = (e) => {
        e.preventDefault();
    
        /* Save name of players */
        const newNameOne = document.forms[`getNamePlayer`]["name-player-1"].value;
        const newNameTwo = document.forms[`getNamePlayer`]["name-player-2"].value;
    
        this.playerOne.name = newNameOne;
        this.playerTwo.name = newNameTwo;
    
        /* Display game board */
        this.displayGame.displayGameBoard();
    }

    this.resetAll = () => {
        /* Reset everything */
        this.makeNewGame();
        this.playerOne.nbrWin = 0;
        this.playerTwo.nbrWin = 0;
    
        document.forms[`getNamePlayer`]["name-player-1"].value = "";
        document.forms[`getNamePlayer`]["name-player-2"].value = "";
    
        this.displayGame.displayPlayer();
    }

    this.makeNewGame = () => {
        /* Launch the game */
        this.displayGame.resetGameBoard();
        this.play = "play";
        this.currentPlayer = this.playerOne;
    }
}


export {App};