'use strict'

app.directive('ngRender', function(){
	return function(scope, element, attrs) {
		render(attrs.id);
	};
});

function render(id) {
	var tweet = $("#" + id)[0];
	twttr.widgets.createTweet(
			id, tweet, {
				conversation	:	'none',
				cards			:	'hidden',
				linkColor		:	'#cc0000',
				theme			:	'light'
			}).then(function(er){console.log('tweet added')});
}