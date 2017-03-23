/**
 * Do not change anything on this file
 * And don't worry about it for now
 * For more info, check https://jasmine.github.io/
 */
describe("Most Frequent Word", function() {
    it("should return the most frequent word in the sentence", function() {
        var s1 = `Use the following code snippet as a guideline to 
                extracting words from a sentence. Do not worry about the 
                regular expression, it's beyond the scope of our current curriculum. 
                Go ahead and code, code, code, code!!!`;
        var s2 = `Computer programming (often shortened to programming)
                is a process that leads from an original formulation of a computing 
                problem to executable computer programs.`
        expect(mostFrequent(s1)).toEqual('code');
        expect(mostFrequent(s2)).toEqual('a');
    });
});