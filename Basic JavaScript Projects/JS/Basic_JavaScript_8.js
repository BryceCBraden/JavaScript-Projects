function sentence() {
    var part_1 = "This is ";
    var part_2 = "a sentence.";
    var whole_sentence = part_1.concat(part_2);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function string_method() {
    var X = 182;
    document.getElementById("numbers_to_string").innerHTML = X.toString();
}

function precision_method() {
    var X = 12938.3012987376112;
    document.getElementById("precision").innerHTML = X.toPrecision(10);
}