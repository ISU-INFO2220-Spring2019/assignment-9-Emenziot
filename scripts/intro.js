alert("The script in the header has run.");
var loadLast = "I loaded last";
var myArray;
if (typeof (myArray) === 'undefined') {
    myArray = [];
}
else { alert("Array was not undefined.") }
myArray.push(34);
myArray.push(5.5);
myArray.push(33.5);
myArray.push(46.5);
myArray.push(59);
myArray.push(64);
myArray.push(43);
myArray.push(64);
myArray.push(48);
myArray.push(49);
myArray.push(40);
myArray.push(59);
myArray.push(44);
myArray.push(54);
myArray.push(19.5);
myArray.push(25);
myArray.push(69);
myArray.push(23);
var count = 0;
for (var i = 0; i < myArray.length; i++) {
    count += myArray[i];
}
alert(count / myArray.length);

function myName() {
    return "Cordell Anderson";
}