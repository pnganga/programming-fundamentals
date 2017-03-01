/**
 * Do not change anything on this file
 * And don't worry about it for now
 * For more info, check https://jasmine.github.io/
 */
describe("Array.reduce (1):", function() {
    it("return the sum of even numbers", function() {
        expect(sumEven([10, 5, 2])).toEqual(12);
        expect(sumEven([6, 5, 2])).toEqual(8);
        expect(sumEven([6, 5, 2, 1, 3, 2])).toEqual(10);
    });
});