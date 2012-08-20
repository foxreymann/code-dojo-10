var empty,

    TicTacToe = function() {
        var board;

        return {
            play: function() {
                board = [['x'], [], []];
            },
            board: function() { return board; }
        };
    };

describe("noughts and crosses", function() {
    it("starts with an empty board", function() {
        var ticTacToe = TicTacToe();
        expect(ticTacToe.board()).toBe(empty);
    });

    it("puts the cross on top left position", function() {
        var ticTacToe = TicTacToe();
        ticTacToe.play('x', 0, 0);
        expect(ticTacToe.board()).toEqual([['x'], [], []]);
    });
});
