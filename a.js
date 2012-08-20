exports.TicTacToe = function() {
    var board = [[],[],[]];
    var lastPlayer = 'O';
    
    var nextPlayer = function() {
        if(lastPlayer == 'O') {
            lastPlayer = 'X';
        } else {
            lastPlayer = 'O';
        }
        return lastPlayer;
    }
    
    var checkHorizontalLine = function() {
        return board[0][0] == lastPlayer && board[0][1] == lastPlayer && board[0][2] == lastPlayer
            || board[1][0] == lastPlayer && board[1][1] == lastPlayer && board[1][2] == lastPlayer
            || board[2][0] == lastPlayer && board[2][1] == lastPlayer && board[2][2] == lastPlayer;
    }

    return {
        play: function(coordinates) {
            var x = coordinates.x,
                y = coordinates.y;
            if (typeof board[y][x] == 'undefined') {
                board[y][x] = nextPlayer();
            } else {
                throw "position is taken";
            }

            if(checkHorizontalLine()) {
                return lastPlayer + ' won';
            }

            return false;
        },
        board: function() { return board; }
    };
};

