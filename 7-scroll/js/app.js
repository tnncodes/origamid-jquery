// scroll
$(".menu-nav a[href^='#']").click(function(e) {
	e.preventDefault();

	var id = $(this).attr("href");
	var menuHeight = $(".menu").innerHeight();
	var targetOffset = $(id).offset().top;

	$("html, body").animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

$(".logo").click(function(e){
	e.preventDefault();

	$("html, body").animate({
		scrollTop: 0
	}, 500);
});

// tab
$('[data-group]').each(function(){
	var $allTarget = $(this).find('[data-target]'),
			$allClick = $(this).find('[data-click]'),
			activeClass = 'active';
	
	$allTarget.first().addClass(activeClass);
	$allClick.first().addClass(activeClass);
	
	$allClick.click(function(e){
		e.preventDefault();
		
		var id = $(this).data('click'),
				$target = $('[data-target="' + id + '"]');
		
		$allClick.removeClass(activeClass);
		$allTarget.removeClass(activeClass);
		
		$target.addClass(activeClass);
		$(this).addClass(activeClass);
	});
});