// implement your solution here
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.walked = 0;
}
Person.prototype.greet = function(p2) {
    return "hello " + p2.name;
}
Person.prototype.walk = function(d) {
    return this.walked += d;
}
