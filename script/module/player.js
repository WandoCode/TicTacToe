function Player(name, symbol) {
    this.name = name;
    this.symbol = symbol;
    this.nbrWin = 0;

    this.str = () => {
        return `${this.name}`;
    }
}

export {Player};