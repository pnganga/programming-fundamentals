/**
 * Do not change anything on this file
 * And don't worry about it for now
 * For more info, check https://jasmine.github.io/
 */
describe("Select Sum:", function() {
    it("return the sum of all the numbers", function() {
        var a = [10, 6, 4],
            b = ['a', 20, 30, 'x', 'y'],
            c = ['a', 'b', 'c'];
        expect(selectSum(a)).toEqual(20);
        expect(selectSum(b)).toEqual(50);
        expect(selectSum(c)).toEqual(0);
    });

});