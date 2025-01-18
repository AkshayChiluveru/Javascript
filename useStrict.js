function abc(a,b) {
    'use strict'
    a = 100;
    b = 200;
    return arguments[0] + arguments[1]
    console.log(a+b);
}
console.log(abc(200,300));