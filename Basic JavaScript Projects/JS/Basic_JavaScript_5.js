document.write(typeof "Word");

document.write(2E310);

document.write(-3E310)

document.write(10 > 2);

document.write(10 < 2);

console.log(2 + 2);

document.write("10" + 5);  //type coercion

document.write(10 == 10); //double equals

document.write(3 == 11);

x = 10;
y = 10;
document.write(x === y); //triple equals

a = "blue";
b = 100;
document.write(a === b);

c = 10;
d = "Ten";
document.write(c === d);

e = 10;
f = 11;
document.write(c === d);

document.write(5 > 2 && 10 > 4); //AND true
document.write(5 > 7 && 10 > 4); //AND false

document.write(5 > 6 || 10 > 4); //OR true
document.write(5 > 6 || 10 > 11); //OR false


//NOT true and false

function nontrue_Function() {
    document.getElementById("NotTrue").innerHTML = !(5 > 10);
}

function nonfalse_Function() {
    document.getElementById("NotFalse").innerHTML = !(20 > 10);
}