var personHolder;
var characters;

function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.age=0;
    this.stepsToTake;
    this.countSteps = function () {
        var total = "";
        for (var i = 1; i <= this.stepsToTake; i++) {
            total += (i + " ");
        }
        return total;
    }
    this.oddAges = function() {
        var total = 0;
        for (var i = 1; i <= this.age; i += 2) {
            total += i;
        }
        return total;
    }
}

function Converter() {
    this.DegFtoDegC = function (degreeF) {
        return (degreeF - 32) * 5 / 9; //Formula from Google's temperature conversion widget
    }
    this.DegCtoDegF = function (degreeC) {
        return (arguments[0] * 9 / 5) + 32; //Formula from Google's temperature conversion widget
    }
}

function sayHello() {
    var name = prompt("What is your name?");
    alert("Hello, " + name + "!");
}

function greet(salutation) {
    var name = prompt("What is your name?");
    alert(salutation + ", " + name + "!");
}

function doMaths(numOne, numTwo) {
    var l1 = numOne + "" + numTwo;
    var l2 = numOne + numTwo;
    var l3 = numOne - numTwo;
    var l4 = numOne * numTwo;
    var l5 = numOne / numTwo;
    alert(l1 + "\n" + l2 + "\n" + l3 + "\n" + l4 + "\n" + l5);
}

function createPerson() {
    var first = prompt("What is your first name?");
    var last = prompt("What is your last name?");
    var ageCheck = parseInt(prompt("Please enter your age from 1 - 200"));
    if (0 >= ageCheck || ageCheck > 200) { alert("That is not a valid input. I am sorry."); }
    else {
        personHolder = new Person(first, last);
        personHolder.age = ageCheck;
    }
}

function showSteps() {
    if (typeof (personHolder) == typeof (undefined)) { alert("Object does not exist. Please click the 'Fill Object' buton first."); }
    else {
        personHolder.stepsToTake = 10;
        alert(personHolder.firstName + " " + personHolder.lastName + " took steps " + personHolder.countSteps());
    }
}

function getDegreesInC(degF) {
    var convert = new Converter();
    alert(convert.DegFtoDegC(degF));
}

function getDegreesInF(degC) {
    var convert = new Converter();
    alert(convert.DegCtoDegF(degC));
}

function fillCharacterArray() {
    characters = [];
    var names = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
    var namesLatter = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble", "Rubble"];
    var ages = [36, 34, 7, 34, 32, 8];
    for (var i = 0; i < 6; i++) {
        var myPerson = new Person(names[i], namesLatter[i]);
        myPerson.age = parseInt(ages[i]);
        characters[i] = myPerson;
    }
}

function getCharacterAt(index) {
    if (typeof (characters) == typeof (undefined)) { alert("Array has not been filled. Please click the 'Fill Characters Array' button."); }
    else {
        var myChar = characters[index];
        alert(myChar.firstName + ", your odd age sum is " + myChar.oddAges());
    }
}