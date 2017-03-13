/**
 * Do not change anything on this file
 * And don't worry about it for now
 * For more info, check https://jasmine.github.io/
 */
describe("Object Values:", function() {
    it("should return the values in an object", function() {
        var values = objectValues({
            name: 'Jane',
            nationality: 'Kenyan',
            dob: 1978,
            city: 'Mombasa',
            weight: 67
        });
        expect(values[0]).toEqual('Mombasa');
        expect(values[1]).toEqual(1978);
        expect(values[3]).toEqual('Kenyan');
        expect(values[4]).toEqual(67);
    });
});