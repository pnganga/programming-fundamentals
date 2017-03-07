// implement your solution here
function sum(a, b, c) {
    argumentsArray = [];
    if (arguments.length === 0) {
        return 0;
    } else if (arguments.length > 0 && arguments.length <= 3) {
        sumOfArguments = a + b + c;
        return sumOfArguments;
    } else if (arguments.length > 3) {
        for (var i = 0; i < arguments.length; i++) {
            argumentsArray.push(arguments[i]);
        }
        var arraySum = function(myArray) {
                var sums = myArray.reduce(add, 0);
                function add(a, b) {
                    return a + b;
                }
                return sums;
            }
        return arraySum(argumentsArray);
    }
}
