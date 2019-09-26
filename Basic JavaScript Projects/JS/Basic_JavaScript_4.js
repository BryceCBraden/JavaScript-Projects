function my_Dictionary() {
    var Dictionary = {
        Type:"Void",
        Skill:"Plasma",
        Arms:"3",
    };
    delete Dictionary.Arms;
    document.getElementById("Dictionary").innerHTML = Dictionary.Skill;
}