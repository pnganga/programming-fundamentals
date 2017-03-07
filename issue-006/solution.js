function selectSum(a) {
    var sum = a.reduce(add, 0);
    function add(a, b) {
        if (typeof a !== "number") {
            a = 0;
            return a + b;
        } else if (typeof b !== "number") {
            b = 0;
            return a + b;
        } else {
            return a + b;
        }
    }
    return sum;
}
