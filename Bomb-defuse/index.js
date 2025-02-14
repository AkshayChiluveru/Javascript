let timerE1 = document.getElementById('timer');
let defuserE1 = document.getElementById('defuser');

let countdown = 10;

let intervalId = setInterval(function() {
    countdown = countdown - 1;
    timerE1.textContent = countdown;
    
    if (countdown === 0) {
        timerE1.textContent = 'Boom';
        clearInterval(intervalId);
    }
}, 1000);

defuserE1.addEventListener('keydown', function(event) {
    let bombdefuserText = defuserE1.value;
    if (event.key === "Enter" && bombdefuserText === "defuse" && countdown !== 0) {
        timerE1.textContent = "You did it!";
        clearInterval(intervalId);
    }
});   