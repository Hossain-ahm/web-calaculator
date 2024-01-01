function add (x, y){
    return Number(x) + Number(y)
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

const operation = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide
};

function operate(x, y, operator){
    return operator(x,y)
}

const result = document.getElementById("result")
const digits = document.querySelectorAll("button.digit");
const operators = document.querySelectorAll("button.operator");
const operateBtn =  document.getElementById("operate")
const clear =  document.getElementById("clear")

digits.forEach((digit) =>{
    digit.addEventListener("click", function() {
        secoundNum = secoundNum + digit.textContent
        result.textContent = secoundNum
    })
})

operators.forEach((operareBtn) =>{
        operareBtn.addEventListener( "click",function(){
            operator = operation[operareBtn.textContent]
            if (firstNum !== ""){
                result.textContent = operate(firstNum, secoundNum, operator)
            }
            firstNum = result.textContent
            secoundNum = ""
        })
})

operateBtn.addEventListener("click" , () => {
    result.textContent = operate(firstNum, secoundNum, operator)
})

clear.addEventListener("click", () =>{
    firstNum = ""
    secoundNum = ""
    result.textContent = "0"
})