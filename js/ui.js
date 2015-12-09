$(document).ready(function() {
	/** -------- notification ------------ **/
	$(".message.w").each(function() {
		$(this).slideDown();
		$(this).css("overflow", "visible");

		var _w = $(this).parent().width() - 62;
		$(this).css('width', _w +'px');
	});

	$(".message.w .close").on('click', function() {
		var _t = this;
		$(_t).css('transform', 'translateX( -100% ) rotateY( -180deg )');
		setTimeout(function() {
			$(_t).parent().css('transform', 'translateY(-100%) rotateX(-180deg)');
			$(_t).parent().css('opacity', '0');	
			setTimeout(function() {
				$(_t).parent().slideUp();
			}, 500);
		}, 500);
	});


	/** ------------ widget --------------- **/
	$("body").on('click', '.widget .header .close', function() {
		$(this).parent('.header').parent('.widget').slideUp();
	});

	$("body").on('click', '.contextmenu .submenu._.next', function() {
		var item = $(this).attr('item');
		$(this).parent('.contextmenu').children('.sectionmenu[item="' +item +'"]').css('left', '0px');

		$(this).parent('.contextmenu').data('height', $(this).parent('.contextmenu').outerHeight());

		var height = $(this).parent('.contextmenu').children('.sectionmenu[item="' +item +'"]').outerHeight();
		var _this = this;
		setTimeout(function() {
			$(_this).parent('.contextmenu').css('height', height +'px');
		}, 500);
	});

	$("body").on('click', '.contextmenu  .sectionmenu .submenu._.prev', function() {
		$(this).parent('.sectionmenu').css('left', '300px');

		if (typeof ($(this).parent('.sectionmenu').parent('.contextmenu').data('height') != 'undefined')) {
			$(this).parent('.sectionmenu').parent('.contextmenu').css('height',
				$(this).parent('.sectionmenu').parent('.contextmenu').data('height'));
		}
	});

});
