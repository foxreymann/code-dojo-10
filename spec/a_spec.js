var dojo = require('../a');

describe("dojo", function() {
    it("recognises that main returns true", function() {
        expect(dojo.main()).toEqual(true);
    });

});
