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
    };
    
    var checkHorizontalLine = function(board) {
        return board[0][0] && board[0][1] && board[0][2]
            || board[1][0] && board[1][1] && board[1][2]
            || board[2][0] && board[2][1] && board[2][2];
    };

    var checkVerticalLine = function(board) {
        return board[0][0] && board[1][0] && board[2][0]
            || board[0][1] && board[1][1] && board[2][1]
            || board[0][2] && board[1][2] && board[2][2];
    };

    var boardFor = function(player) {
        return board.map(function(row) {
            return row.map(function(cell) { return cell === player; });
        });
    };

    var checkForWinner = function() {
        var playerBoard = boardFor(lastPlayer);
        return checkHorizontalLine(playerBoard) || checkVerticalLine(playerBoard);
    };

    return {
        play: function(coordinates) {
            var x = coordinates.x,
                y = coordinates.y;
            if (typeof board[y][x] == 'undefined') {
                board[y][x] = nextPlayer();
            } else {
                throw "position is taken";
            }

            return checkForWinner() ? lastPlayer + " won" : false;
        },
        board: function() { return board; }
    };
};

