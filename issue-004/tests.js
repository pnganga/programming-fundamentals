/**
 * Do not change anything on this file
 * And don't worry about it for now
 * For more info, check https://jasmine.github.io/
 */
describe("Simple Grading System:", function() {
    it("grades scores between 0 and 29", function() {
        expect(grade(10)).toEqual("F");
        expect(grade(29.5)).toEqual("F");
    });

    it("grades scores between 30 and 39", function() {
        expect(grade(30)).toEqual("E");
        expect(grade(39.5)).toEqual("E");
    });

    it("grades scores between 40 and 49", function() {
        expect(grade(40)).toEqual("D");
        expect(grade(49.5)).toEqual("D");
    });

    it("grades scores between 50 and 59", function() {
        expect(grade(51)).toEqual("C");
        expect(grade(56)).toEqual("C");
    });

    it("grades scores between 60 and 79", function() {
        expect(grade(61)).toEqual("B");
        expect(grade(76)).toEqual("B");
    });

    it("grades scores between 80 and 100", function() {
        expect(grade(100)).toEqual("A");
        expect(grade(85)).toEqual("A");
    });
});