


var assert = require('assert');
describe('Array', function () {



    
    it('should return -1 when the value is not present', function () {
        assert.equal(-1, [1, 2, 3].indexOf(4));
    });
    
    it('length should 3', function () {
        assert.equal(3, [1, 2, 3].length);
    });




});