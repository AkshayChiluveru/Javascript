//example 1

// a = 1
// console.log(a);
// var a;

//example 2

// hoistedFunction();

// function hoistedFunction() {
//     console.log('Hoisted function');
// }


//example 3

function hoistedFunction() {
    x = 11;
    console.log(x);
    var x;
}

hoistedFunction();