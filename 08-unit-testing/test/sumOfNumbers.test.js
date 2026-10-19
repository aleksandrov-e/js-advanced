
const { expect } = require('chai');
const sum = require('../05.sumOfNumbers');

describe('sum', function () {
    it('should sum positive numbers', function () {
        expect(sum([1, 2, 3])).to.equal(6);
    });

    it('should sum negative numbers', function () {
        expect(sum([-1, -2, -3])).to.equal(-6);
    });

    it('should sum positive and negative numbers', function () {
        expect(sum([10, -5, 2])).to.equal(7);
    });

    it('should work with a single element', function () {
        expect(sum([5])).to.equal(5);
    });

    it('should return 0 for an empty array', function () {
        expect(sum([])).to.equal(0);
    });
});
