module.exports = function () {
	window.$ = window.jQuery;

	// Nav Bar
	$('.mobile-menu').on("click", function() {
		$(this).toggleClass('change');
		if($(window).width() < 900 && $(window).width() > 600) {
			$('.navbar-menu').toggleClass('active');
		}
		else {
			$('.navbar-menu').toggleClass('mobile');
		}
	});

}();
