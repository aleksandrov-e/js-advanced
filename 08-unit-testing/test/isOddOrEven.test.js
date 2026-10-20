const { expect } = require('chai');
const isEvenOrOdd = require('../unit-testing-exercises/02.evenOrOdd');

describe('isEvenOrOdd tests', () => {
    it('should return undefined if input is not string', () => {
        expect(isEvenOrOdd(54)).expect.to.equal(undefined)
    });

    it('should return even if the string.length is even', () => {
        expect(isEvenOrOdd('strt')).expect.to.equal('even')
    });

    it('should return odd if the string.length is odd', () => {
        expect(isEvenOrOdd('str')).expect.to.equal('odd')
    });

})