// ==== Direct Reports of Subordinates === //
$(function () {
    $("body").on("click", "a", function (e) {
        var currentid = e.currentTarget.id;

        $(document).ready(function(){
            $.getJSON("data/employeeData.js", function(data){
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        if (value.manager == currentid) {
                        $("#reportsList").append(
                            "<li><a href='#directReports' id='" + value.subordinates + "'>" +
                            "<img src='" + value.imgPath + "'>" +
                            "<h2>" + value.name + "</h2>" +
                            "<p>" + value.title + "</p>" +
                            "<span class='ui-li-count'>" + value.subordinates + "</span>" +
                            "</a></li>"
                        );
                        }
                    });
                });
                $("#reportsList").listview("refresh");
            });
        });
    });
});
