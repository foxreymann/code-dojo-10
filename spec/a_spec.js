var TicTacToe = require('../a').TicTacToe;

    var empty = [[],[],[]];

describe("noughts and crosses", function() {
    it("starts with an empty board", function() {
        var ticTacToe = TicTacToe();
        expect(ticTacToe.board()).toEqual(empty);
    });

    it("puts the cross on top left position", function() {
        var ticTacToe = TicTacToe();
        ticTacToe.play('x', 0, 0);
        expect(ticTacToe.board()).toEqual([['x'], [], []]);
    });

    it("plays two moves by placing X then O", function() {
        var ticTacToe = TicTacToe();
        ticTacToe.play('x', 0, 0);
        ticTacToe.play('o', 1, 2);
        expect(ticTacToe.board()).toEqual([['x'], [], [undefined, 'o']]);
    });
});
