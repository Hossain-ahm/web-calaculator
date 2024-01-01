function add (x, y){
    return x + y
}
function subtract (x, y){
    return x - y
}
function multiply (x, y){
    return x * y
}
function divide (x, y){
    return x / y
}

let firstNum = ""
let secoundNum = ""
let operator

function operate(x, y, operator){
    return operator(x,y)
}

const result = document.getElementById("result")
const digits = document.querySelectorAll("button.digit");
const operators = document.querySelectorAll("button.opertor");


digits.forEach((digit) =>{
    digit.addEventListener("click", function() {
        firstNum = firstNum + digit.textContent
        result.textContent = firstNum
    })
})