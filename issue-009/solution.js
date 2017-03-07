// implement your solution here
function sumEven(a) {
    var sum = a.reduce(add, 0);
    function add(a, b) {
        if (a % 2 === 0 && b % 2 === 0) {
            return a + b;
        } else if (a % 2 !== 0) {
            a = 0;
            return a + b;
        } else if (b % 2 !== 0) {
            b = 0;
            return a + b;
        }
    }
    return sum;
}