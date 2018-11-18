var burger = document.getElementById('burger');
var menu = document.getElementById('menu');


$("#burger").on('click', function(){
	$(this).toggleClass('active');
	$('#menu').toggleClass('active');
});


$("#search-button").on("click", function(e){
	$(".search-block").addClass("active");
	$("body").addClass("hidden");
});

$("#search-close").on("click", function(){
	$(".search-block").removeClass("active");
	$("body").removeClass("hidden");
});


