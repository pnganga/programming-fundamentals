/**
 * Do not change anything on this file
 * And don't worry about it for now
 * For more info, check https://jasmine.github.io/
 */
describe("Super Sum:", function() {
    it("return the sum of all digits", function() {
        expect(superSum([100, 5, 4])).toEqual(10);
        expect(superSum([200, 300, 402])).toEqual(11);
    });
});