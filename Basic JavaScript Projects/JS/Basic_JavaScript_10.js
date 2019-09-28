function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function For_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var array_Stuff = [];
    array_Stuff[0] = "stuff";
    array_Stuff[1] = "stuff";
    array_Stuff[2] = "stuff";
    array_Stuff[3] = "stuff";
    document.getElementById("Array").innerHTML = "Check out this " + array_Stuff[2] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

