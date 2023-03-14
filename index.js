const num1 = Math.floor(Math.random()*10);
const num2 = Math.floor(Math.random()*10);

const n1 = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");


let score = JSON.parse(localStorage.getItem("score"));      // JSON.parse convert the string into data;

if(!score){
    score=0;
}

scoreEl.innerText = `score: ${score}`

n1.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1*num2;

formEl.addEventListener("submit",()=>{          // syntax  addEventListener(type, listener)  type = submit in html , listner= function 
                                                // you can write.
    const userAns = +inputEl.value                      // + sign before the inputE1.value it convert the user input into string.
    if(userAns === correctAns){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));        // ye score ko browser k localStroage me stroge kr deta hai.
}

console.log(score)