exports.TicTacToe = function() {
    var board = [[],[],[]];

    return {
        play: function(player,x,y) {
            board[y][x] = player;
            return false;
        },
        board: function() { return board; }
    };
};

