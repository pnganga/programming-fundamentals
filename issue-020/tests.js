/**
 * Do not change anything on this file
 * And don't worry about it for now
 * For more info, check https://jasmine.github.io/
 */
describe("Create Object:", function() {
    it("should return the right object", function() {
        var obj = createObject([
            ['name', 'John'],
            ['age', 20],
            ['nationality', 'Ugandan'],
            ['languages', ['English', 'Swahili', 'French']]
        ]);
        expect(obj.name).toEqual('John');
        expect(obj.age).toEqual(20);
        expect(obj.nationality).toEqual('Ugandan');
        expect(obj.languages.length).toEqual(3);

        // extra test case
        var obj2 = createObject([
            ['name', 'Jane'],
            ['color', 'black'],
            ['occupation', 'doctor']
        ]);
        expect(obj2.name).toEqual('Jane');
        expect(obj2.color).toEqual('black');
        expect(obj2.occupation).toEqual('doctor');
    });
});