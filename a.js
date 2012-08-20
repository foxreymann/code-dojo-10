exports.TicTacToe = function() {
    var board = [[],[],[]];

    return {
        play: function(player,x,y) {
            if(typeof board[y][x] == 'undefined') {
                board[y][x] = player;
            } else {
                throw "position is taken";
            }
            return false;
        },
        board: function() { return board; }
    };
};

