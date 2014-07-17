(function ($, undefined) {
	var weddingDate = new Date("2014-8-13 12:00:00").getTime();

	setInterval(function () {
		var count = weddingDate - (new Date()).getTime();
		var second = [86400000, 3600000, 60000, 1000];
		$.each('date hours minutes seconds'.split(' '), function (index, key) {
			var methodName = 'get' + key[0].toLocaleUpperCase() + key.slice(1);
			var num = ('0' + new Date(count)[methodName]()).slice(-2);
			$('.count-' + key).html(num);
		});
	}, 250);
})(jQuery);