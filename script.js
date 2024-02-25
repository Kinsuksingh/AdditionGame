let firstNum = document.getElementById("firstNumber");
let secondNum = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");

firstNum.textContent = Math.ceil(Math.random()*100);
secondNum.textContent = Math.ceil(Math.random()*100);

function Restartbtn(){
    firstNum.textContent = Math.ceil(Math.random()*100);
    secondNum.textContent = Math.ceil(Math.random()*100);
    gameResult.style.backgroundColor = "white";
    gameResult.textContent = "";
    userInput.value = "";
}


function Checkbtn(){
    if (parseInt(firstNum.textContent) + parseInt(secondNum.textContent) === parseInt(userInput.value)){
        gameResult.style.backgroundColor = "#028a0f";
        gameResult.textContent = "Congratulations! You got it right. ";
    }
    else{
        gameResult.style.backgroundColor = "#1e217c";
        gameResult.textContent = "Please Try Again!";
    }

}
