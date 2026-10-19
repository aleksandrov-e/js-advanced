const { expect } = require('chai');
const symmetry = require('../06.checkForSymmetry');


describe('Check for Symmetry TESTS', () => {
    it('should return false for non-array inputs', () => {
        expect(symmetry('abc')).to.equal(false);
        expect(symmetry({})).to.equal(false);
        expect(symmetry(123)).to.equal(false);
    });

    it('should return true for symmetric arrays', () => {
        expect(symmetry([1, 2, 3, 2, 1])).to.equal(true);
        expect(symmetry([])).to.equal(true);
    });

    it('should return false for non-symmetric arrays', () => {
        expect(symmetry([1, 2, 3])).to.equal(false);
    });
})