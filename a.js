exports.TicTacToe = function() {
    var board;

    return {
        play: function() {
            board = [['x'], [], []];
        },
        board: function() { return board; }
    };
};

