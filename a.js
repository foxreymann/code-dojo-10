exports.TicTacToe = function() {
    var board = [[],[],[]];

    return {
        play: function(player, coordinates) {
            var x = coordinates.x,
                y = coordinates.y;
            if (typeof board[y][x] == 'undefined') {
                board[y][x] = player;
            } else {
                throw "position is taken";
            }
            return board[0][0] && board[0][1] && board[0][2] ? "crosses won" : false;
        },
        board: function() { return board; }
    };
};

