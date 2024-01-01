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

let firstNum
let secoundNum
let operator

function operate(x, y, operator){
    return operator(x,y)
}