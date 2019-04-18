var people;
var peopleIndex


$(document).ready(function () {
    var name = localStorage.getItem("username");
    if (name != '' && name != null) { $("#tbUserName").val(name); }
    people = JSON.parse(localStorage.getItem("listPeople"));
    if (people == null) { people = []; }
    fillList();

    $("#btnLogin").click(function () {
        if ($("#tbUserName").val() == "weaver" && $("#tbPassword").val() == "tester") {
            alert("You logged in.");

            if ($("#cbRemember")[0].checked) {
                localStorage.setItem("username", $("#tbUserName").val());
            }
            else { localStorage.removeItem("username"); }
        }
        else {
            alert("Login Failed");
        }
        window.location.reload(true);
    });
    $("#btnForget").click(function () {
        localStorage.removeItem("username");
    });
    $("#btnAddPerson").click(function () {
        var group = $("input[name='group']:checked")[0].val;
        var person = { "Name": $("#txtName").val(), "Phone": $("#txtPhone").val(), "Age": $("#txtAge").val(), "Group": group };
        people.push(person);
        var testy = JSON.stringify(people);
        localStorage.setItem("listPeople", testy);
        fillList();
    });
    $("#btnClearStorage").click(function () {
        localStorage.removeItem("listPeople");
        window.location.reload(true);
    });
});

function fillList() {
    var list = $("#ulDisplayPersons")[0];
    $(list).empty();
    if (people != null && people.length > 0) {
        for (var i = 0; i < people.length; i++) {
            var person = people[i];
            var listItem = document.createElement("li");
            listItem.appendChild(document.createTextNode(person.Name + " "));
            listItem.appendChild(document.createTextNode(person.Age + " "));
            listItem.appendChild(document.createTextNode(person.Phone + " "));
            listItem.appendChild(document.createTextNode(person.Group + " "));
            var btn = document.createElement("button");
            btn.value = "edit";
            btn.className = "editBtn";
            list.appendChild(listItem);
        }
    }
}