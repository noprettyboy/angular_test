var http = require('http');
var url = require('url');

function start (router, handle) {
	function onRequest (req, res) {
		var pathname = url.parse(req.url).pathname;
		if (pathname != '/favicon.ico') {
			console.log('request for:-'+pathname+'-received!');

			var postdata = '';
			// req.setEncoding('utf8');
			req.addListener('data', function(postdatachunck) {
				postdata += postdatachunck;
				console.log('received postdatachunck->'+postdatachunck);
			});
			req.addListener('end', function() {
				// console.log('end');
				router(handle, pathname, res, postdata);
			});
		}
	}

	http.createServer(onRequest).listen(9999);
	console.log('server has start with port:9999');
}

exports.start = start;