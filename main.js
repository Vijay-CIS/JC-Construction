/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body');

	var banner = 1;
	var cons = 1;

	var quote = [
		"The buildings we create inspire us & reflect who we are as a society.",
		"Architecture should speak of its time and place, but yearn for timelessness.",
		"A room should never allow the eye to settle in one place. It should smile at you and create fantasy.",
		"The sun never knew how great it was until it hit the side of a building.",
		"A world which sees art and engineering as divided is not seeing the world as a whole."
	]

	function changeBanner() {
		banner = banner == 8 ? 1 : banner + 1;
		$('#header').css('background', `url('images/banner${banner}.jpg')`);
		$('#header').css('background-position', 'center center');
		$('#header').css('background-size', 'cover');
		$('#quote-text').html(quote[banner - 1]);
	}

	function changeImages() {
		cons = cons == 3 ? 1 : cons + 1;
		$('#conslider').attr('src', `images/cons${cons}.jpg`);
		$('#intslider').attr('src', `images/int${cons}.jpg`);
		$('#susslider').attr('src',`images/sus${cons}.jpg`);
		$('#strucslider').attr('src',`images/struc${cons}.jpg`);
		$('#qslider').attr('src',`images/q${cons}.jpg`);
	}

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
		window.setInterval(() => {
			changeBanner();
			changeImages();
		}, 3000);
	});

	// Dropdowns.
	$('#nav > ul').dropotron({
		mode: 'fade',
		noOpenerFade: true,
		alignment: 'center',
		detach: false
	});

	// Nav.

	// Title Bar.
	$(
		'<div id="titleBar">' +
		'<a href="#navPanel" class="toggle"></a>' +
		'<span class="title">' + $('#logo h1').html() + '</span>' +
		'</div>'
	)
		.appendTo($body);

	// Panel.
	$(
		'<div id="navPanel">' +
		'<nav>' +
		$('#nav').navList() +
		'</nav>' +
		'</div>'
	)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'navPanel-visible'
		});

})(jQuery);