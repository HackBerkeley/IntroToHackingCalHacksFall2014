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
	function replaceWithPicture(){
		$('img').each(function(i){
			var $picture = $(this);
			if ($picture.attr('kitten-change') != 'true') {
				$picture.attr('kitten-change', 'true');
				$picture.ready(function() {
					var w = Math.round($picture.width());
					var h = Math.round($picture.height());
					if ($picture.attr('src') && $picture.attr('src').indexOf('lorempixel') == -1) {
						$picture.attr('src','http://lorempixel.com/'+w+'/'+h+getCategory());
					} else if (!$picture.attr('src')) {
						$picture.attr('src','http://lorempixel.com/'+w+'/'+h+getCategory());
					}
					
				});
			}
		});
	}
	
});