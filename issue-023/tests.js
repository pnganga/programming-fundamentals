/**
 * Do not change anything on this file
 * And don't worry about it for now
 * For more info, check https://jasmine.github.io/
 */
describe("Person Constructor", function() {
    var p;

    beforeEach(function() {
        p = new Person('Jonah', 78);
    });

    it("should return the correct object", function() {
        expect(p.name).toEqual('Jonah');
        expect(p.age).toEqual(78);
        expect(p.walked).toEqual(0);
    });

    it("should have greet method", function() {
        var p2 = new Person('Jane', 20);
        var p3 = new Person('James', 25);
        expect(p.greet(p2)).toEqual('hello Jane');
        expect(p.greet(p3)).toEqual('hello James');
    });

    it("should have walk method", function() {
        p.walk(20);
        expect(p.walked).toEqual(20);
        p.walk(40);
        expect(p.walked).toEqual(60);
    });
});