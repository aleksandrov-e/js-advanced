
const rgbToHexColor = require('../RGBToHex');
const expect = require('chai').expect;

describe('RGBToHex TESTS', () => {

    it('Checks if numbers are converted to hexadecimal correctly', () => {
        expect(rgbToHexColor(12, 12, 45)).to.equal('#0C0C2D');
        expect(rgbToHexColor(1, 51, 45)).to.equal('#01332D');
        expect(rgbToHexColor(1, 21, 141)).to.equal('#01158D');
    });

    it('Checks if minimum and maximum RGB values are valid', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('Checks if (12, 1, 3) is equal to #0C0103', () => {
        expect(rgbToHexColor(12, 1, 3)).to.equal('#0C0103');
    });

    it('Checks if negative RGB values are invalid', () => {
        expect(rgbToHexColor(-2, 1, 3)).to.equal(undefined);
        expect(rgbToHexColor(2, -4, 52)).to.equal(undefined);
        expect(rgbToHexColor(241, 4, -56)).to.equal(undefined);
    });

    it('Checks if RGB values above 255 are invalid', () => {
        expect(rgbToHexColor(256, 0, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 256, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 0, 256)).to.equal(undefined);
    });

    it('Checks if non-integer values are invalid', () => {
        expect(rgbToHexColor(1.5, 0, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 2.5, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 0, 3.5)).to.equal(undefined);
    });

    it('Checks if invalid types are rejected', () => {
        expect(rgbToHexColor('12', 0, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, '20', 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 0, null)).to.equal(undefined);
    });

    it('Checks if missing arguments are invalid', () => {
        expect(rgbToHexColor(12, 20)).to.equal(undefined);
    });
});
