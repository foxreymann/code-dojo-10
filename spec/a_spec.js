var board, empty,

    TicTacToe = {
        play: function() {
            board = [['x'], [], []];
        }
    };

describe("noughts and crosses", function() {
    it("starts with an empty board", function() {
        expect(board).toBe(empty);
    });

    it("puts the cross on top left position", function() {
        TicTacToe.play('x',0,0);
        expect(board).toEqual([['x'],[],[]]);
    });
});
