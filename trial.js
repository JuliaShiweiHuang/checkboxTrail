$(document).ready(function() {
    $("#new-thing-button").on("click",function(event) {
        event.preventDefault();
        var text = document.getElementById("new-thing").value;
        $("#fav-list").append("<li>" + text + "</li>");
        $("li").addClass("added");
    });
});

$(document).ready(function() {
	$("li").on("click", function() {
		$(this).css('background-color', 'red');
	});
});


$(document).ready(function() {
	$("li").on("dblclick", function() {
		alert("TESTING DOUBLE CLICK METHOD");
	});
});




