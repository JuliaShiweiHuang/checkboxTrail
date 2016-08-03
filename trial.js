$(document).ready(function() {
    $("#new-thing-button").on("click",function(event) {
        event.preventDefault();
        var text = document.getElementById("new-thing").value;
        $("#fav-list").append("<li>" + text + "</li>");
        $("li").addClass("added");
    });
});



var $thingList = $('#fav-list');
$thingList.on('click', 'li', function() {
	$(this).css("background-color", "red");
});


$thingList.on('dblclick', 'li', function() {
	alert("TEST TEST TEST");
})






// $(document).ready(function() {
// 	$("li").on("dblclick", function() {
// 		alert("TESTING DOUBLE CLICK METHOD");
// 	});
// });



// $(document).ready(function() {
// 	$("li").on("click", function() {
// 		$(this).css('background-color', 'red');
// 	});
// });




