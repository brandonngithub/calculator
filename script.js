var displayValue = "";

function populate(character){
    displayValue += character;
    document.getElementById('display').innerHTML = displayValue;
}

function operate(){
    var operator, num1, num2, operatorIndex, solution;
    for (var i=0; i<displayValue.length; i++){
        if (displayValue.charAt(i) == '+'){
            operatorIndex = i;
        } else if (displayValue.charAt(i) == '-'){
            operatorIndex = i;
        } else if (displayValue.charAt(i) == '*'){
            operatorIndex = i;
        } else if (displayValue.charAt(i) == '/'){
            operatorIndex = i;
        }
    }
    operator = displayValue.charAt(operatorIndex);
    num1 = parseInt(displayValue.substring(0, operatorIndex));
    num2 = parseInt(displayValue.substring(operatorIndex+1));
    if (operator == '+'){
        solution = num1 + num2;
    } else if (operator == '-'){
        solution = num1 - num2;
    } else if (operator == '*'){
        solution = num1 * num2;
    } else if (operator == '/'){
        solution = num1 / num2;
    }
    displayValue = solution;
    document.getElementById("display").innerHTML = solution;
}