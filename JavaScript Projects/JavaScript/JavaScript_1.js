function Fruit_Function() {
    var Fruit_Ouput;
    var Fruits = document.getElementById("Fruit_Input").value;
    var Fruit_String = " is a great fruit!";
    switch(Fruits) {
        case "Apple":
            Fruit_Output = "Apple" + Fruit_String;
        break;
        case "Orange":
            Fruit_Output = "Orange" + Fruit_String;
        break;
        case "Pear":
            Fruit_Output = "Pear" + Fruit_String;
        break;
        case "Grape":
            Fruit_Output = "Grape" + Fruit_String;
        break;
        default:
        Fruit_Output = "Please enter a fruit exactly as written in the above list.");
    }
    document.getElementById("Output").innerHTML = Fruit_Output;
}

//ClassName()

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

//Canvas

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();