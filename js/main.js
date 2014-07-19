(function ($, undefined) {
	var weddingDate = new Date('2014/8/13 12:00:00').getTime();
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

	//map
	var dot = {
		Zhuanpan: new qq.maps.LatLng(34.227385, 109.110918),
		Bailu: new qq.maps.LatLng(34.194381, 109.153720),
		Dizhai: new qq.maps.LatLng(34.212370, 109.057074),
		Sandian: new qq.maps.LatLng(34.232987, 109.055829),
		Shida: new qq.maps.LatLng(34.165369, 108.898373),
		Ximen: new qq.maps.LatLng(34.152105, 108.884457)
	};

	var driveMap = new qq.maps.Map($('.position-bailu')[0], {
		panControlOptions: {position: qq.maps.ControlPosition.TOP_RIGHT},
		zoomControlOptions: {position: qq.maps.ControlPosition.TOP_RIGHT},
		scrollwheel: false,
		center: dot.Zhuanpan,
		zoom: 12
	});

	var busMap = new qq.maps.Map($('.position-shida')[0], {
		panControlOptions: {position: qq.maps.ControlPosition.TOP_LEFT},
		zoomControlOptions: {position: qq.maps.ControlPosition.TOP_LEFT},
		scrollwheel: false,
		center: dot.Shida,
		zoom: 13
	});

	var marker = {
		Bailu: new qq.maps.Marker({
			map: driveMap,
			position: dot.Bailu		
		}),
		Dizhai: new qq.maps.Marker({
			map: driveMap,
			position: dot.Dizhai
		}),
		Sandian: new qq.maps.Marker({
			map: driveMap,
			position: dot.Sandian
		}),
		Shida: new qq.maps.Marker({
			map: busMap,
			position: dot.Ximen
		})
	};

	var label = {
		Bailu: new qq.maps.Label({
			map: driveMap,
			content: '婚礼场地 - 白鹿葡萄庄园',
			offset: new qq.maps.Size(-120, 0),
			position: dot.Bailu
		}),
		Dizhai: new qq.maps.Label({
			map: driveMap,
			content: '半引路转狄寨南街',
			offset: new qq.maps.Size(-50, 20),
			position: dot.Dizhai
		}),
		Sandian: new qq.maps.Label({
			map: driveMap,
			content: '三殿桥向东进入半引路',
			offset: new qq.maps.Size(20, -20),
			position: dot.Sandian
		}),
		Shida: new qq.maps.Label({
			map: busMap,
			content: '婚礼巴士 － 陕师大长安家属区西门',
			offset: new qq.maps.Size(0, 0),
			position: dot.Ximen
		})
	};

	var line = {
		Drive: new qq.maps.Polyline({
			map: driveMap,
			path: [dot.Sandian, dot.Dizhai, dot.Bailu],
			strokeWeight: 3,
			strokeDashStyle: 'dash',
			strokeColor: new qq.maps.Color(145, 112, 112, 0.6)
		})
	};
})(jQuery);