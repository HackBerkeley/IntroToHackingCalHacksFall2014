$(document).ready(function(){
	var categories = ['', '/people', '/food', '/animals', '/nature','/cats'];
	replaceWithKittens();
	$(document).bind('DOMSubtreeModified', function () {
		replaceWithKittens();
	});
	function getCategory() {
		var i = Math.floor(Math.random()*categories.length);
		return categories[i];
	}
	function replaceWithKittens(){
		$('img').each(function(i){
			var $kittenDiv = $(this);
			if ($kittenDiv.attr('kitten-change') != 'true') {
				$kittenDiv.attr('kitten-change', 'true');
				$kittenDiv.ready(function() {
					var w = Math.round($kittenDiv.width());
					var h = Math.round($kittenDiv.height());
					if ($kittenDiv.attr('src') && $kittenDiv.attr('src').indexOf('lorempixel') == -1) {
						$kittenDiv.attr('src','http://lorempixel.com/'+w+'/'+h+getCategory());
					} else if (!$kittenDiv.attr('src')) {
						$kittenDiv.attr('src','http://lorempixel.com/'+w+'/'+h+getCategory());
					}
					
				});
			}
		});
		// $('div').each(function() {
		// 	var $kittenDiv = $(this);
		// 	var w = Math.round($kittenDiv.width());
		// 	var h = Math.round($kittenDiv.height());
		// 	if ($kittenDiv.css('background-image') != "none") {
		// 		$kittenDiv.css('background-image','url("http://lorempixel.com/'+w+'/'+h+'")');
		// 	}
		// });
		// $('span').each(function() {
		// 	var $kittenDiv = $(this);
		// 	var w = Math.round($kittenDiv.width());
		// 	var h = Math.round($kittenDiv.height());
		// 	if ($kittenDiv.css('background-image') != "none") {
		// 		$kittenDiv.css('background-image','url("http://lorempixel.com/'+w+'/'+h+'")');
		// 	}
		// });
	}
	
});