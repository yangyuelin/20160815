
/*=========================== HTML INCLUDE =================================*/

$(document).ready(function() {

    $("#footer").load("include/footer.html");

});



/*=========================== 版面框架 =================================*/

$(document).ready(function(){
	startOnePage({
		frame: "#view",
		container: "#frame",
		sections: ".op-section",
		radio: "#radio",
		radioOn: "#radioOn",
		speed: 500,
		easing: "swing"
	});
});

/*=========================== 位移移動 =================================*/

$(document).ready(function() {
	var options = {
	    animateThreshold: 100,
	    scrollPollInterval: 10
	}
	$('.aniview').AniView(options);
	$('.aniview2').AniView(options);
	$('.aniview3').AniView(options);
	$('.aniview4').AniView(options);
	$('.aniview5').AniView(options);
	$('.aniview6').AniView(options);
	$('.aniview7').AniView(options);
	$('.aniview8').AniView(options);
	$('.aniview9').AniView(options);
});
