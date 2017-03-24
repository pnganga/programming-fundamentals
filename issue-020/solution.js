// implement your solution here
function createObject(A) {
    var obj = {};
    A.forEach(function(item) {
        obj[item[0]] = item[1];
    });
    return obj;
}