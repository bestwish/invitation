(function ($, undefined) {
	var weddingDate = new Date("2014/8/13 12:00:00").getTime();
	function formatTime (time) {
		return ('0' + time).slice(-2);
	}

	setInterval(function () {
		var count = Math.ceil((weddingDate - (new Date()).getTime())/1000);
		var date = {
			day: formatTime(Math.floor(count/86400)),
			hour: formatTime(Math.floor((count%86400)/3600)),
			minute: formatTime(Math.floor((count%3600)/60)),
			second: formatTime(Math.floor(count%60))
		};
		$.each('day hour minute second'.split(' '), function (index, key) {
			$('.count-' + key).html(date[key]);
		});
	}, 250);
})(jQuery);