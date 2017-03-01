/**
 * Do not change anything on this file
 * And don't worry about it for now
 * For more info, check https://jasmine.github.io/
 */
describe("Array.reduce (2):", function() {
    it("return difference of sumEven and sumOdd", function() {
        expect(evenOdd([10, 5, 2])).toEqual(7);
        expect(evenOdd([6, 5, 2])).toEqual(3);
        expect(evenOdd([6, 5, 2, 1, 3, 2])).toEqual(1);
    });
});