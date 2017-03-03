function dataTypeCheck(a) {
   
    if (a === +a && a % 1 === 0 ) {

        return (a / 2);
    } else if (a === +a && a % 1 !== 0 ) {
        return a * 2;
    } else
    if (typeof a === "string" && isNaN(Number(a)) === false) {
        return Number(a);
    } else if (typeof a === "string") {
        return "hello " + a;
    } else if (typeof a !== "string" && isNaN(a) === true) {
        return 0;
    } else if (a === null) {
        return 0;
    } else if (a === undefined) {
        return false;
    }


}


