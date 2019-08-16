function factorial(n) {
    var rval = 1;
    for (var i = 2; i <= n; i++) {
        rval *= i;
    }
    return(rval);
}
