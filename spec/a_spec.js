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

    it("does not allow a player to play on a position that is already taken", function() {
        var ticTacToe = TicTacToe();
        ticTacToe.play('x', 1, 1);
        ticTacToe.play('o', 2, 1);
        expect(function() { ticTacToe.play('x', 2, 1) }).toThrow("position is taken");
    });

    it("check if crosses didn't win after first move", function() {
        var ticTacToe = TicTacToe();
        expect(ticTacToe.play('x', 0, 0)).toEqual(false);
    });

    it("check if crosses won with horizontal line in first row", function() {
        var ticTacToe = TicTacToe();
        expect(ticTacToe.play('x', 0, 0)).toEqual(false);
        expect(ticTacToe.play('x', 1, 0)).toEqual(false);
        expect(ticTacToe.play('x', 2, 0)).toEqual("crosses won");
    });
});
