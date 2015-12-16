$(function () {
    $("body").on("click", "a", function (e) {
        var currentid = e.currentTarget.id;

        $.getJSON("data/employeeData.js", function (data) {
            $.each(data, function() {
                $.each(this, function (key, value) {
                    if (value.id == currentid) {
                    $("#individual").html("<img src = '" + value.imgPath + "'>" +
                    "<h2>" +value.name + "</h2>" +
                    "<p>" + value.title + "</p>");

                    // === EXTRA CREDIT SHOW MANAGER === //
                    $("#individualDetails").html(
                    "<li><a href='#employeeDetails' id='" + value.manager + "'>" +
                    "<h4>" + "View Manager" + "</h4>" +
                    "<p>" + value.reportsTo + "</p>" +
                    "</a></li>" +

                    "<li><a href='#directReports' id='" + value.id + "'>" +
                    "<h4>" + "View Direct Reports" + "</h4>" +
                    "<p>" + value.subordinates + "</p>" +
                    "</a></li>" +

                    "<li><a href='tel:" + value.officeNo + "'>" +
                    "<h4>" + "Call Office" + "</h4>" +
                    "<p>" + value.officeNo + "</p>" +
                    "</a></li>" +

                    "<li><a href='tel:" + value.cellNo + "'>" +
                    "<h4>" + "Hotline Bling (Cell Phone)" + "</h4>" +
                    "<p>" + value.cellNo + "</p>" +
                    "</a></li>" +

                    "<li><a href='email:" + value.email + "'>" +
                    "<h4>" + "Email" + "</h4>" +
                    "<p>" + value.email + "</p>" +
                    "</a></li>"
                    );
                    }
                $("#individualDetails").listview("refresh");
                });
            });
        });
    });
});


