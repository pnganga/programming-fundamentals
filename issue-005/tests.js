/**
 * Do not change anything on this file
 * And don't worry about it for now
 * For more info, check https://jasmine.github.io/
 */
describe("Optional Arguments:", function() {
    it("when person name is provided", function() {
        expect(hello("James")).toEqual("Hello James!");
        expect(hello("Jane")).toEqual("Hello Jane!");
    });

    it("when person's name is NOT provided", function() {
        expect(hello()).toEqual("Hello world!");
    });
});