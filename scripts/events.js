function moveMouse(e) {
    e = e || window.event;
    var xCoor = e.x;
    var yCoor = e.y
    var divDude = document.getElementById("mouseCoords");
    divDude.innerText = "x: " + xCoor + " y: " + yCoor;
}

function mousePressed(e) {
    e = e || window.event;
    trg = e.target || e.srcElement;
    trg.className = "pressed";
}

function resetClass(e) {
    e = e || window.event;
    trg = e.target || e.srcElement;
    trg.className = "";
}

function mouseHeadOver(e) {
    e = e || window.event;
    e.currentTarget.className = "overHead";
}

window.onload = loader

function loader() {
    var mouseThings = document.getElementById("secMouser");
    mouseThings.onmousemove = moveMouse;
    mouseThings.onmousedown = mousePressed;
    mouseThings.onclick = resetClass;
    var headers = document.getElementsByTagName("h1");
    for (var i = 0; i < headers.length; i++) {
        headers[i].onmouseover = mouseHeadOver;
        headers[i].onmouseout = resetClass;
    }
    var btn = document.getElementById("btnSayHello");
    btn.onclick = function () { alert("Hello User"); }
    btn.onmousemove = function (e) {
        e = e || window.event;
        e.cancelBubble = true;
        var text = document.getElementById("mouseCoords");
        text.innerText = "Over Button";
    }
}


