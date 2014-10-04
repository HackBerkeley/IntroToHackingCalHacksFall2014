$(document).ready(function(){
	var categories = ['', '/people', '/food', '/animals', '/nature','/cats'];
	replaceWithPicture();
	$(document).bind('DOMSubtreeModified', function () {
		replaceWithPicture();
	});
	function getCategory() {
		var i = Math.floor(Math.random()*categories.length);
		return categories[i];
	}
	function replaceWithPicture(){
		$('img').each(function(i){
			var $picture = $(this);
			if ($picture.attr('kitten-change') != 'true') {
				$picture.attr('kitten-change', 'true');
				$picture.ready(function() {
					var w = Math.round($picture.width());
					var h = Math.round($picture.height());
					var scalar = Math.random() + 1.0;
					var new_w = Math.round(scalar*w);
					var new_h = Math.round(scalar*h);
					if ($picture.attr('src') && $picture.attr('src').indexOf('lorempixel') == -1) {
						$picture.attr('src','http://lorempixel.com/'+new_w+'/'+new_h+getCategory());
					} else if (!$picture.attr('src')) {
						$picture.attr('src','http://lorempixel.com/'+new_w+'/'+new_h+getCategory());
					}
					$picture.width(w+'px');
					$picture.height(h+'px');
					
				});
			}
		});
	}
	
});