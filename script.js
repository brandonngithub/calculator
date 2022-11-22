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

//onclicks for calculator buttons
document.getElementById("zero").addEventListener('click', function(e){ populate('0'); });
document.getElementById("one").addEventListener('click', function(e){ populate('1'); });
document.getElementById("two").addEventListener('click', function(e){ populate('2'); });
document.getElementById("three").addEventListener('click', function(e){ populate('3'); });
document.getElementById("four").addEventListener('click', function(e){ populate('4'); });
document.getElementById("five").addEventListener('click', function(e){ populate('5'); });
document.getElementById("six").addEventListener('click', function(e){ populate('6'); });
document.getElementById("seven").addEventListener('click', function(e){ populate('7'); });
document.getElementById("eight").addEventListener('click', function(e){ populate('8'); });
document.getElementById("nine").addEventListener('click', function(e){ populate('9'); });
document.getElementById("add").addEventListener('click', function(e){ populate('+'); });
document.getElementById("subtract").addEventListener('click', function(e){ populate('-'); });
document.getElementById("multiply").addEventListener('click', function(e){ populate('*'); });
document.getElementById("divide").addEventListener('click', function(e){ populate('/'); });
document.getElementById("modulo").addEventListener('click', function(e){ populate('%'); });
document.getElementById("equals").addEventListener('click', function(e){ operate(); });
document.getElementById("backspace").addEventListener('click', function(e){ backspace(); });
document.getElementById("clear").addEventListener('click', function(e){ location.reload(); });