function additionFunction() {
    var addition = 2 + 2;
    document.getElementById("Add").innerHTML = "2 + 2 = " + addition;
}

function subtractionFunction() {
    var subtraction = 2 - 2;
    document.getElementById("Subtract").innerHTML = "2 - 2 = " + subtraction;
}

function multiplicationFunction() {
    var simple_Math = 2 * 2;
    document.getElementById("Multiply").innerHTML = "2 * 2 = " + simple_Math;
}

function divisionFunction() {
    var simple_Math = 2 / 2;
    document.getElementById("Divide").innerHTML = "2 / 2 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Multiple Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operation() {
    var x = 10;
    document.getElementById("negOP").innerHTML = -x;
}

var X = 5;
X++;
document.write(X);

var Y = 5.25;
Y--;
document.write(Y);

window.alert(Math.random());

window.alert(Math.random() * 100);