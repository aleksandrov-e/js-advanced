const { expect } = require('chai');
const mathEnforcer = require('../unit-testing-exercises/03.mathEnforcer');

describe('mathEnforcer tests', () => {

    describe('addFive()', () => {
        it('should return undefined if the input is not a number', () => {
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
        });

        it('should add 5 to positive numbers', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(10)).to.equal(15);
        });

        it('should add 5 to negative numbers', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        });

        it('should add 5 to floating-point numbers', () => {
            expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5, 0.01);
            expect(mathEnforcer.addFive(-1.5)).to.be.closeTo(3.5, 0.01);
        });
    });

    describe('subtractTen()', () => {
        it('should return undefined if the input is not a number', () => {
            expect(mathEnforcer.subtractTen('10')).to.equal(undefined);
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
        });

        it('should subtract 10 from positive numbers', () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });

        it('should subtract 10 from negative numbers', () => {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });

        it('should subtract 10 from floating-point numbers', () => {
            expect(mathEnforcer.subtractTen(1.5)).to.be.closeTo(-8.5, 0.01);
            expect(mathEnforcer.subtractTen(-1.5)).to.be.closeTo(-11.5, 0.01);
        });
    });

    describe('sum()', () => {
        it('should return undefined if either input is not a number', () => {
            expect(mathEnforcer.sum('5', 3)).to.equal(undefined);
            expect(mathEnforcer.sum(5, '3')).to.equal(undefined);
            expect(mathEnforcer.sum(null, 3)).to.equal(undefined);
            expect(mathEnforcer.sum(5, undefined)).to.equal(undefined);
        });

        it('should sum positive numbers', () => {
            expect(mathEnforcer.sum(2, 3)).to.equal(5);
            expect(mathEnforcer.sum(10, 20)).to.equal(30);
        });

        it('should sum negative numbers', () => {
            expect(mathEnforcer.sum(-2, -3)).to.equal(-5);
            expect(mathEnforcer.sum(-10, -5)).to.equal(-15);
        });

        it('should sum positive and negative numbers', () => {
            expect(mathEnforcer.sum(10, -3)).to.equal(7);
            expect(mathEnforcer.sum(-10, 3)).to.equal(-7);
        });

        it('should sum floating-point numbers', () => {
            expect(mathEnforcer.sum(1.5, 2.5)).to.be.closeTo(4, 0.01);
            expect(mathEnforcer.sum(-1.2, 2.5)).to.be.closeTo(1.3, 0.01);
        });
    });
});
