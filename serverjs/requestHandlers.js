var querystring = require('querystring');
var fs = require('fs');
// var formidable = require('formidable');

function rooturl (res, postdata, pathname) {
	console.log('handle ->rooturl- is called!');
	var indexHtml = fs.readFileSync('././src/router.htm');

	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	res.write(indexHtml);
	res.end();
}
function start (res, postdata, pathname) {
	console.log('handle -start- is called!');
	var body = '<html>' +
					'<head>' +
						'<meta http-equiv="Content-Type" content="text/html" charset="UTF-8">' +
					'</head>' +
					'<body>' +
						'<form action="/show" method="post">' +
							'<textarea name="text" rows="20" cols="60"></textarea><br>' +
							'<input type="submit" value="submit">' +
						'</form>' +
					'</body>' + 
				'</html>';
	res.writeHead(200, {"Content-Type":"text/html"});
	res.write(body);
	res.end();
}
function upload (res, postdata, pathname) {
	console.log('handle -start- is called!');

	// var form = new formidable.IncomingForm();
	// form.parse(req, function (error, fields, files) {
	// 	res.writeHead(200, {"Content-Type":"text/plain"});
	// 	res.write('upload begin');
	// 	res.end(sys.inspect({fields:fields, files:files}));
	// });
	// return;
}
function show (res, postdata, pathname) {
	console.log('handle -show- is called!');
	fs.readFile('././tmp/loading.png','binary', function (error, file) {
		if (error) {
			console.log('show error');
			res.writeHead(500, {'Content-Type':'text/plain'});
			res.write(error);
			res.end();
		} else {
			console.log('show succ')
			res.writeHead(200, {'Content-Type':'image/png'});
			res.write(file, 'binary');
			res.end();
		}
	})

	// res.writeHead(200, {"Content-Type":"text/html"});
	// // res.write('show begin->'+querystring.parse(postdata).text);
	// res.end();
}

function dealcssurl (res, postdata, pathname) {
	console.log(postdata);
	console.log('handle ->dealcss- is called!');
	var indexHtml = fs.readFileSync('././src'+pathname);

	res.writeHead(200, {'Content-Type': 'text/css; charset=utf-8'});
	res.write(indexHtml);
	res.end();
}

function dealjsurl (res, postdata, pathname) {
	console.log(postdata);
	console.log('handle ->dealjs- is called!');
	var indexHtml = fs.readFileSync('././src'+pathname);

	res.writeHead(200, {'Content-Type': 'text/js; charset=utf-8'});
	res.write(indexHtml);
	res.end();
}

function dealimgurl (res, postdata, pathname) {
	console.log(postdata);
	console.log('handle ->dealimg- is called!');
	var indexHtml = fs.readFileSync('././src'+pathname);

	res.writeHead(200, {'Content-Type': 'text/img; charset=utf-8'});
	res.write(indexHtml);
	res.end();
}

function dealjsonurl (res, postdata, pathname) {
	console.log(postdata);
	console.log('handle ->dealjson- is called!');
	var indexHtml = fs.readFileSync('././src'+pathname);

	res.writeHead(200, {'Content-Type': 'text/json; charset=utf-8'});
	res.write(indexHtml);
	res.end();
}

function dealhtmurl (res, postdata, pathname) {
	console.log(postdata);
	console.log('handle ->dealhtm- is called!');
	var indexHtml = fs.readFileSync('././src'+pathname);

	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	res.write(indexHtml);
	res.end();
}

exports.rooturl = rooturl;
exports.start = start;
exports.upload = upload;
exports.show = show;

exports.dealcssurl = dealcssurl;
exports.dealjsurl = dealjsurl;
exports.dealimgurl = dealimgurl;
exports.dealjsonurl = dealjsonurl;
exports.dealhtmurl = dealhtmurl;