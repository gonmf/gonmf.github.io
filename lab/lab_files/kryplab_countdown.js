jQuery(document).ready(function( $ ) {
 "use strict";
 
	$('#counting-date').countdown(count.date).on('update.countdown', function(event) {
		var $this = $(this).html(event.strftime(''
		+ '<div class="count-block"><h2>%D</h2> <span>Days</span></div>' + '<span class="colon">:</span>'
		+ '<div class="count-block"><h2>%H</h2> <span>Hours</span> </div>' + '<span class="colon">:</span>'
		+ '<div class="count-block"><h2>%M</h2> <span>Minutes</span> </div>' + '<span class="colon">:</span>'
		+ '<div class="count-block"><h2>%S</h2> <span>Seconds</span></div>'));
	});
		
}); 