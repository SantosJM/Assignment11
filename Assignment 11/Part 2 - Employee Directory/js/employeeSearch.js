// ==== Home page Employee Search Box === //
$(document).ready(function(){
    $.getJSON("data/employeeData.js", function(data){
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#employeeSearch").append(
                    "<li><a href='#employeeDetails' id='" + value.id + "'>" +
                    "<img src='" + value.imgPath + "'>" +
                    "<h2>" + value.name + "</h2>" +
                    "<p>" + value.title + "</p>" +
                    "<span class='ui-li-count'>" + value.subordinates + "</span>" +
                    "</a></li>"
                );
            });
        });
        $("#employeeSearch").listview("refresh");
    });
});
