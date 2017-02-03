class TicTacToe {
    constructor() {
        this.map = [];
        for (var i = 0; i < 3; i++){
            this.map[i] = [];
            for (var j = 0; j < 3; j++){
                this.map[i][j] = null;
            }
        }
        this.symbol = 'x';
        return this;
    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
    	if(this.map[rowIndex][columnIndex] == null){
            this.map[rowIndex][columnIndex] = this.symbol;
            if(this.symbol == 'x')
                this.symbol = 'o';
            else if(this.symbol == 'o')
                this.symbol = 'x';
        }
        return this;
    }

    isFinished() {
        if(this.noMoreTurns() || this.getWinner() != null)
            return true;
        else
            return false;
    }

    getWinner() {
        if(this.map[2][0] == this.map[1][1] && this.map[1][1] == this.map[0][2] && this.map[2][0] != null)
            return this.map[2][0];
        if( this.map[0][0] == this.map[1][1] && this.map[1][1] == this.map[2][2] && this.map[0][0] != null)
            return this.map[0][0];

		for (var i = 0; i < 3; i++){
			var x = 0; var o = 0;
			for (var j = 0; j < 3; j++){
				if(this.map[i][j] == null) continue;
				else if(this.map[i][j] == 'x') x++;
				else if(this.map[i][j] == 'o') o++;
			}
			if(x == 3) return 'x'; 
			else if(o == 3) return 'o';
		}

		for (var i = 0; i < 3; i++){
			var x = 0; var o = 0;
			for (var j = 0; j < 3; j++){
				if(this.map[j][i] == null) continue;
				else if(this.map[j][i] == 'x') x++;
				else if(this.map[j][i] == 'o') o++;
			}
			if(x == 3) return 'x'; 
			else if(o == 3) return 'o';
		}
        return null;
    }

    noMoreTurns() {
        for (var i = 0; i < 3; i++){
            for (var j = 0; j < 3; j++){
                if(this.map[i][j] == null )
                    return false;
            }
        }
        return true;
    }

    isDraw() {
        if(!this.isFinished() || this.getWinner() != null)
            return false;
        else
            return true;
    }

    getFieldValue(rowIndex, colIndex) {
    	return this.map[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;