var FirstNames = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
var LastNames = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble", "Rubble"];
var Ages = [36, 34, 7, 34, 32, 8];

function showInnerText() {
    var parObj = document.getElementById("pOne");
    alert(parObj.innerText);
}

function showInnerHTML() {
    var parObj = document.getElementById("pOne");
    alert(parObj.innerHTML);
}

function numberList() {
    var liObjs = document.getElementsByTagName("li");
    for (var i = 1; i <= liObjs.length; i++) {
        var text = document.createTextNode(i.toString());
        liObjs[i-1].appendChild(text);
    }
}

function markRows() {
    var trObjs = document.getElementsByTagName("tr");
    for (var i = 0; i < trObjs.length; i += 2) {
        trObjs[i].className = "other";
    }
}

function addRows() {
    var tablehead = document.getElementById("tblAddRows");
    for (var i = 0; i < FirstNames.length; i++) {
        var listItem = document.createElement("tr");
        var first = document.createElement("td");
        var last = document.createElement("td");
        var age = document.createElement("td");
        first.innerText = FirstNames[i];
        last.innerText = LastNames[i];
        age.innerText = Ages[i];
        listItem.appendChild(first);
        listItem.appendChild(last);
        listItem.appendChild(age);
        if (i % 2 === 0) { listItem.className = "other"; }
        tablehead.appendChild(listItem);
    }
}

function addSuccess() {
    var source = document.getElementById("divMessages");
    var newElement = document.createElement("div");
    newElement.className = "success";
    newElement.innerText = "This is a Success Message";
    source.appendChild(newElement);
}

function addWarning() {
    var source = document.getElementById("divMessages");
    var newElement = document.createElement("div");
    newElement.className = "warning";
    newElement.innerText = "This is a Warning Message";
    source.appendChild(newElement);
}

function addError() {
    var source = document.getElementById("divMessages");
    var newElement = document.createElement("div");
    newElement.className = "error";
    newElement.innerText = "This is an Error Message";
    source.appendChild(newElement);
}