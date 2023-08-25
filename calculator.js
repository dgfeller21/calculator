function calculate(num1, operator, num2) {
    console.log("operator: " + operator);
    switch(operator){
        case '-':
            return subtract(num1, num2);
        case '+':
            return add(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    console.log("multiply");
    let num = num1 * num2;
    console.log("num result: " + num);
    return num;
}
function divide(num1, num2) {
    return num1 / num2;
}
const operators = ["+", "-", "/", "x"];

let tableElements = document.querySelectorAll(".grid");
let num1 = null;
let num2 = null;
let op = null;
tableElements.forEach(function(element) {
    element.addEventListener("click", function() {
        console.log(this.innerHTML);
        console.log("is number: " + Number.isInteger(Number(this.innerHTML)));
        if(this.innerHTML == "C") {
            num1 = null;
            num2 = null;
            op = null;
            document.getElementById("text").innerHTML = "";
        } else if(Number.isInteger(Number(this.innerHTML))) {
            let num = Number(this.innerHTML);
            //document.getElementById("text").innerHTML = num;
            if(operators.indexOf(document.getElementById("text").innerHTML) != -1) {
                document.getElementById("text").innerHTML = "";
            }
            if(num1 != null && op != null) {
                num2 = document.getElementById("text").innerHTML + "" + num;
                document.getElementById("text").innerHTML = num2;
            }else {
                num1 = document.getElementById("text").innerHTML + "" + num;
                document.getElementById("text").innerHTML = num1;
            }
        } else if(operators.indexOf(this.innerHTML) != -1) {
            console.log("is operator: " + this.innerHTML);
            if(num1 != null && num2 != null && op != null) {
                let result = calculate(num1, op, num2);
                document.getElementById("text").innerHTML = result;
                num1 = result;
                op = this.innerHTML;
                num2 = null;
            } else if(num1 != null) {
                op = this.innerHTML;
                document.getElementById("text").innerHTML = op;
            }
        } 
        else if(this.innerHTML == "=") {
            if(num1 != null && num2 != null && op != null) {
                let result = calculate(Number(num1), op, Number(num2));
                console.log("result: " + result);
                document.getElementById("text").innerHTML = result;
                num1 = result;
                num2 = null;
                op = null;
            }
        }
    });
});