exports.TicTacToe = function() {
    var board = [[],[],[]];

    return {
        play: function(player,x,y) {
            board[y][x] = player;
        },
        board: function() { return board; }
    };
};

