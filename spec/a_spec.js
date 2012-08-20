var TicTacToe = require('../a').TicTacToe;

var empty = [[],[],[]];

describe("noughts and crosses", function() {
    it("starts with an empty board", function() {
        var ticTacToe = TicTacToe();
        expect(ticTacToe.board()).toEqual(empty);
    });

    it("puts the cross on top left position", function() {
        var ticTacToe = TicTacToe();
        ticTacToe.play({x: 0, y: 0});
        expect(ticTacToe.board()).toEqual([['X'], [], []]);
    });

    it("plays two moves by placing X then O", function() {
        var ticTacToe = TicTacToe();
        ticTacToe.play({x: 0, y: 0});
        ticTacToe.play({x: 1, y: 2});
        expect(ticTacToe.board()).toEqual([['X'], [], [undefined, 'O']]);
    });

    it("does not allow a player to play on a position that is already taken", function() {
        var ticTacToe = TicTacToe();
        ticTacToe.play({x: 1, y: 1});
        ticTacToe.play({x: 2, y: 1});
        expect(function() { ticTacToe.play({x: 2, y: 1}) }).toThrow("position is taken");
    });

    it("check if crosses didn't win after first move", function() {
        var ticTacToe = TicTacToe();
        expect(ticTacToe.play({x: 0, y: 0})).toEqual(false);
    });

    it("check if crosses won with horizontal line in first row", function() {
        var ticTacToe = TicTacToe();
        expect(ticTacToe.play({x: 0, y: 0})).toEqual(false);
        expect(ticTacToe.play({x: 0, y: 2})).toEqual(false);
        expect(ticTacToe.play({x: 1, y: 0})).toEqual(false);
        expect(ticTacToe.play({x: 1, y: 1})).toEqual(false);
        expect(ticTacToe.play({x: 2, y: 0})).toEqual("X won");
    });

    it("check if a player won with horizontal line in second row", function() {
        var ticTacToe = TicTacToe();
        expect(ticTacToe.play({x: 2, y: 0})).toEqual(false);
        expect(ticTacToe.play({x: 2, y: 1})).toEqual(false);
        expect(ticTacToe.play({x: 0, y: 2})).toEqual(false);
        expect(ticTacToe.play({x: 1, y: 1})).toEqual(false);
        expect(ticTacToe.play({x: 1, y: 2})).toEqual(false);
        expect(ticTacToe.play({x: 0, y: 1})).toEqual("O won");
    });
});
