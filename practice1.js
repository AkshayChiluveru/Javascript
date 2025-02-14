// //let message = 'Hello World!';
// //console.log(message);

// //console.log(document.getElementById('headingElement')); //helps to select the HTML element with a specific heading.

// // Changing the text content of the heading

// // function manipulate() {
// //     document.getElementById('headingElement').textContent = 'Changed text content';
// //     document.getElementById('headingElement').style.color ='red';
// // }

// // The typoof() function is used to find the type of value

// let a = 10;
// let b = 20;
// console.log(typeof(a));
// console.log(typeof(b));

// let isApproved = false;
// console.log(typeof(isApproved));
// console.log(typeof(true));

// let c = '20';
// console.log(typeof(c));
// let d = parseInt(c);
// console.log(typeof(d));
// console.log(d);


// let randomNumber = Math.random();
// console.log(randomNumber);
// console.log(randomNumber*1000);
// console.log(Math.ceil(randomNumber*1000));  

// myArr = [3,4,5,6,67,7];
// console.log(myArr);
// myArr[4] = 76;
// console.log(myArr);


// function showMessage(){
//     console.log('Hello World!');
// }

// showMessage();

// function myMessage(){
//     console.log('My custom message!');
// }

// myMessage();


// // let h1Element = document.createElement('h1');
// // h1Element.textContent='Hello World!';

// // let containerElement = document.getElementById('myContainer');

// // containerElement.appendChild(h1Element);

// // let btnElement = document.createElement("button");

// // btnElement.textContent = "Click Me";
// // containerElement.appendChild(btnElement);


// // btnElement.onclick = function(){
// //     h1Element.textContent = "Hello Akshay!";
// //     h1Element.style.color ='red';
// //     h1Element.classList.add('heading');
// // }


// let person = {
//     fName: 'John',
//     lName: 'Doe',
//     age: 30
// }

// person.fName = 'Akshay';

// console.log(person.fName);



let myArr = [1,2,3,4,5,6,7];
let myIndex = myArr.findIndex(function(e){
    if (e == 5){
        return true;
    }
    else {
        return false;
    }
});

console.log(myIndex);