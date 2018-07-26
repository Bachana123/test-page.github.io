// var burger = document.getElementById('burger');
// var menu = document.getElementById('menu');
// burger.addEventListener("click", function(){
// 	burger.classList.toggle('active');
// 	menu.classList.toggle('active');
// })

$("#burger").on('click', function(){
	$(this).toggleClass('active');
	$('#menu').toggleClass('active');
});


$("#search-button").on("click", function(e){
	// console.log(e);
	// e.preventDefault();
	$(".search-block").addClass("active");
	$("body").addClass("hidden");
});

$("#search-close").on("click", function(){
	$(".search-block").removeClass("active");
	$("body").removeClass("hidden");
});

// function test(test1, test2){
	// console.log(test1);
// }


// test(1,2);
