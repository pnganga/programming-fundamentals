/**
 * Do not change anything on this file
 * And don't worry about it for now
 * For more info, check https://jasmine.github.io/
 */
describe("General Sum:", function() {
    it("return the sum", function() {
        expect(sum(10, 5, 5)).toEqual(20);
        expect(sum(10, 5, 5, 3)).toEqual(23);
        expect(sum(10, 5, 5, 3, 10)).toEqual(33);
    });
});