/**
 * Do not change anything on this file
 * And don't worry about it for now
 * For more info, check https://jasmine.github.io/
 */
describe("Old and Young:", function() {
    it("should return object with the oldest and youngest student", function() {
        var students = [
            { name: 'Jane', yearOfBirth: 1945 },
            { name: 'John', yearOfBirth: 1978 },
            { name: 'Jackie', yearOfBirth: 2009 },
            { name: 'James', yearOfBirth: 1988 }
        ];
        var oy = oldAndYoung(students);
        expect(oy.youngest).toEqual('Jackie');
        expect(oy.oldest).toEqual('Jane');
    });
});