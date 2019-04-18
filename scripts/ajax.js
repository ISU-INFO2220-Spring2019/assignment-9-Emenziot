$(document).ready(function () {
    $("#btnSearch").click(function () {
        var matchString = $("#txtSearch").val().toLowerCase();
        $.ajax({
            url: "data/books.json",
            success: function (data) {
                //alert(data.Books[2]["Title"]);
                $("#tblBooks").empty();

                var trh = $("<tr>");
                trh.append($("<th>").text("Title"));
                trh.append($("<th>").text("ISBN"));
                trh.append($("<th>").text("Author"));
                trh.append($("<th>").text("Tags"));
                $("#tblBooks").append(trh)

                var stringComp = $("#txtSearch").val().toLowerCase();
                count = 0;
                if (stringComp == "") {
                    for (var x in data.Books) {
                        var other = (count % 2 == 0);
                        addToTable(data.Books[x], other);
                        count++;
                    }
                }
                else {
                    var str = stringComp;
                    for (var x in data.Books) {
                        var myTitle = data.Books[x]["Title"].toLowerCase();
                        var myNum = data.Books[x]["ISBN"].toString().toLowerCase();
                        var myAuthor = buildName(data.Books[x]["Author"]).toLowerCase();
                        if (myTitle.includes(str) || myNum.includes(str) || myAuthor.includes(str) || contains(data.Books["Tags"], str)) {
                            addToTable(data.Books[x], count % 2 == 0);
                            count++;
                        }
                    }
                }
            },
            error: function (obj, mess, messObj) {
                alert("Failure");
            }
        });
    });

    $("#txtPeople").change(function () {

    });
});

function addToTable(data, other) {
    var table = $("#tblBooks");
    var tr = $("<tr>");
    if (other) { tr.addClass("other"); }
    else { tr.removeClass("other"); }
    tr.append($("<td>").text(data["Title"]));
    tr.append($("<td>").text(data["ISBN"]));
    tr.append($("<td>").text(buildName(data["Author"])));

    var td = $("<td>");
    var ul = $("<ul>");
    for (x in data["Tags"]) {
        ul.append($("<li>").text(data["Tags"][x]));
    }
    td.append(ul);
    tr.append(td);
    table.append(tr);
}

function buildName(data) {
    var output = "";
    output += data["Last"] + ", " + data["First"];
    if (data["Middle"] != "") {
        output += (" " + data["Middle"]);
    }
    return output;
}

function contains(array, string) {
    for (var x in array) {
        if (array[x].toLowerCase().contains(string)) {
            return true;
        }
    }
    return false;
}