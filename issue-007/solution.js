function superSum(a) {
    // create an empty array, eachNumberArray that will hold each number that will be extracted from each array value
    var eachNumberArray = [];
    // Loop through the array and extract each value, then turn it into a string
    var keyTotal = a.forEach(function(key) {
            var keyAsAString = key.toString();
            // Loop through each extracted value(now a string) and push it to the array we created above
            for (var i = 0; i < keyAsAString.length; i++) {
                var eachNumber = keyAsAString.charAt(i);
                console.log(eachNumber);
                eachNumberArray.push(Number(eachNumber));
            }
        })
        // create a function arraySum that takes an array as an argument, adds all it's values and returns the sum
    var arraySum = function(myArray) {
        var sum = myArray.reduce(add, 0);
        function add(a, b) {
            return a + b;
        }
        return sum;
    };
    // return the sum
    return arraySum(eachNumberArray);
}