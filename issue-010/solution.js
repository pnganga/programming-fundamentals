// implement your solution here
function evenOdd(a) {
    function sumOfEven(a) {
        var sum = a.reduce(add, 0);
        function add(a, b) {
            if (b % 2 === 0) {
                return a + b;
            } else if (b % 2 !== 0) {
                b = 0;
                return a + b;
            }
        }
        return sum;
    }
    function sumOfOdd(a) {
        var sum = a.reduce(add, 0);
        function add(a, b) {
            if (b % 2 !== 0 || b === 0) {
                return a + b;
            } else if (b % 2 === 0) {
                b = 0;
                return a + b;
            }
        }
        return sum;
    }
    return sumOfEven(a) - sumOfOdd(a);
}
