var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    var Y = 10;
    document.write(20 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(Y + 100);
}
Add_numbers_3();
Add_numbers_4();

function Add_numbers_5() {
    var Z = 10;
    console.log(15 + Z);
}
function Add_numbers_6() {
    console.log(Z + 100);
}
Add_numbers_5();
Add_numbers_6();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function is_Bigger() {
    if (1<2) {
        document.getElementById("Assignment").innerHTML = "The left number is smaller than the right.";
    }
}

function letscheck() {
    var randnumber = document.getElementById("randomnumber").value
    if (randnumber < 11) {
        answer = "The number is less than 11!";
    }
    else {
        answer = "The number is not within 1 and 10!";
    }
    document.getElementById("randomcheck").innerHTML = answer
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time";
    }
    else if (Time > 12 == Time < 10) {
        Reply = "It is the afternoon"
    }
    else {
        Reply = "It is evening time"
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
