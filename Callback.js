//Passing a function as an argument
let data = {
    name : 'Akshay',
    gender : 'Male',
    age : 25,
    email : 'test@gmail.com',
    status : 'active'
}

let option = {
    method : "POST",
    headers : {
        'Content-Type': 'application/json',
        Accept : 'application/json',
        'Authorization': 'Bearer 5b8faa3592569928a8aa07468fac524e3255d48825a42c698da9b7eb99ef1415'
    },
    body : JSON.stringify(data)
};

fetch("https://gorest.co.in/public-api/users", option).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
});