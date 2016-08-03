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
	$(this).css("text-decoration", "line-through");
});


$thingList.on('dblclick', 'li', function() {
	// alert("Amilia！You will have great luck in the future!");
	$(this).css("visibility", "hidden");
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




