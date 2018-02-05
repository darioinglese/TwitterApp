'use strict'



app.directive('ngRender', ["$compile", function ($compile) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.$watch(attrs.ngRender, function (newValue, oldValue) {
                element.html(newValue);
                $compile(element.contents())(scope);
                render(attrs.id);
            });
        }
    }
}]);

function render(id) {
	var tweet = $("#" + id)[0];
	if (tweet !== undefined) {
		twttr.widgets.createTweet(id, tweet, {
			conversation : 'none',
			cards : 'hidden',
			linkColor : '#cc0000',
			theme : 'light'
		}).then(function(er) {
			console.log('tweet added');
		});
	} else {
		console.log('tweet could not be rendered');
	}
}