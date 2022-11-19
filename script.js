var displayValue = "12+3";

function populate(character){
    displayValue += character;
    document.getElementById('display').innerHTML = displayValue;
}

function getOperators(){
    var operators = [];
    for (var i=0; i<displayValue.length; i++){
        if (displayValue.charAt(i)=='+' || displayValue.charAt(i)=='-' || displayValue.charAt(i)=='*' || displayValue.charAt(i)=='/'){
            operators.push(displayValue.charAt(i));
        }
    }
    return operators;
}

function getNumbers(){
    var numbers = [];
    for (var i=0; i<displayValue.length; i++){
        if (isNaN(displayValue.charAt(i)) == false){
            var currentNum = "";
            while (isNaN(displayValue.charAt(i))==false && i<displayValue.length){
                currentNum += displayValue.charAt(i);
                i++;
            }
            numbers.push(parseInt(currentNum));
        }
    }
    return numbers;
}

function operate(){
    numbers = getNumbers();
    alert(numbers[0]);
    alert(numbers[1]);

    // var operator, num1, num2, operatorIndex, solution;
    // for (var i=0; i<displayValue.length; i++){
    //     if (displayValue.charAt(i) == '+'){
    //         operatorIndex = i;
    //     } else if (displayValue.charAt(i) == '-'){
    //         operatorIndex = i;
    //     } else if (displayValue.charAt(i) == '*'){
    //         operatorIndex = i;
    //     } else if (displayValue.charAt(i) == '/'){
    //         operatorIndex = i;
    //     }
    // }
    // operator = displayValue.charAt(operatorIndex);
    // num1 = parseInt(displayValue.substring(0, operatorIndex));
    // num2 = parseInt(displayValue.substring(operatorIndex+1));
    // if (operator == '+'){
    //     solution = num1 + num2;
    // } else if (operator == '-'){
    //     solution = num1 - num2;
    // } else if (operator == '*'){
    //     solution = num1 * num2;
    // } else if (operator == '/'){
    //     solution = num1 / num2;
    // }
    // displayValue = solution;
    // document.getElementById("display").innerHTML = solution;
}


operate();