$(document).ready(function () {
    $("#btnChangeSpan").click(function () {
        $("#spnOne").text("New Text for the Span");
    });
    $("#btnAppendToSpan").click(function () {
        $("#spnOne").append("==Text at the Back");
    });
    $("#btnPrependToSpan").click(function () {
        $("#spnOne").prepend("Text at the front -- ");
    });
    $("#btnBeforeSpan").click(function () {
        $("#spnOne").before("Text Before ++ ");
    });
    $("#btnAfterSpan").click(function () {
        $("#spnOne").after(" @@ Text After")
    });
    $("#btnShowSpan").click(function () {
        alert($("#spnOne").text());
    });
    $("#btnNumbersPs").click(function () {
        var divThing = $("#divNumbers");
        var kids = divThing[0].children;
        for (var i = 1; i <= kids.length; i++) {
            kids[i - 1].innerText = i + ". " + kids[i - 1].innerText;
        }
    });
    $("#btnClassPSuccess").click(function () {
        var pars = $(("#divClass")).find("p");
        pars.removeClass();
        pars.addClass("success");

    });
    $("#btnClassPError").click(function () {
        var pars = $(("#divClass")).find("p");
        for (var i = 0; i < pars.length; i += 2) {
            pars[i].className = "error";
        }
    });
    $("#btnClassPWarning").click(function () {
        var pars = $(("#divClass")).find("p");
        pars.removeClass();
        pars.addClass("warning");
    });
    $("#btnAddLastNames").click(function () {
        var node = $(".bff");
        node.prev()[0].innerHTML += "<strong> Flintstone</strong>";
        node[0].innerHTML += "<em> Rubble</em>";
        node.next()[0].innerHTML += "<del> the Dinosaur</del>";
    });
    $("#btnRemoveLarry").click(function () {
        $(".first").remove();
    });
    $("#btnClearCurly").click(function () {
        $(".second").empty();
    });
    $("#btnRemoveMoeLastName").click(function () {
        $(".third").children("span").remove();
    });
    $("#btnRemoveShempLastName").click(function () {
        $(".third").next().children("span").remove();
    });
    $("#btnChangeText").click(function () {
        $("#spnTwo").parent().next().children()[1].innerText = "I was changed";
    });
    $("#btnTogglePs").click(function () {
        $("p").toggle();
        if ($("#btnTogglePs")[0].innerText == "Show all Ps") {
            $("#btnTogglePs")[0].innerText = "Hide all Ps";
        }
        else {
            $("#btnTogglePs")[0].innerText = "Show all Ps";
        }
    });
});
