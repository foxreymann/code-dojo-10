exports.TicTacToe = function() {
    var board = [[],[],[]];
    var lastPlayer = 'o';
    
    var nextPlayer = function() {
        if(lastPlayer == 'o') {
            lastPlayer = 'x';
        } else {
            lastPlayer = 'o';
        }
        return lastPlayer;
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
            return board[0][0] && board[0][1] && board[0][2] ? "crosses won" : false;
        },
        board: function() { return board; }
    };
};

