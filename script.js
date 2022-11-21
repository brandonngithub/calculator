var displayValue = "";

function populate(character){
    displayValue += character;
    document.getElementById('display').innerHTML = displayValue;
}

function backspace(){
    displayValue = displayValue.substring(0, displayValue.length-1);
    document.getElementById('display').innerHTML = displayValue;
}

function getOperators(){
    var operators = [];
    for (var i=0; i<displayValue.length; i++){
        if (displayValue.charAt(i)=='+' || displayValue.charAt(i)=='-' || displayValue.charAt(i)=='*' || displayValue.charAt(i)=='/' || displayValue.charAt(i)=='/'){
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
    try{
        var x = eval(displayValue);
        document.getElementById('display').innerHTML = x;
    }catch{
        displayValue = "";
        document.getElementById('display').innerHTML = "ERROR";
    }
}