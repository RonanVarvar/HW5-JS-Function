function isBigger(a, b) {
    return (a > b);
}
console.log(isBigger(5, -1));

function isSmaller(a, b) {
    return (a < b);
}
console.log(isSmaller(5, -1));

function getMin() {
    var min = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (min > arguments[i]) min = arguments[i];
    }
    return min;
}
console.log(getMin(3, 0, -3));

function pow(x, n) {
    result = Math.pow(x, n);
    return result;
}
console.log(pow(2, 3));

function getClosestToZero() {
    var toZero = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (toZero > Math.abs(arguments[i])) toZero = arguments[i];
    }
    return toZero;
}
console.log(getClosestToZero(7, 2, 5, -1, -9));