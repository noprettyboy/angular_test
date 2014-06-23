var less=require('less');
var fs=require('fs');

buffers = fs.readFileSync('././src/css/less/style.less');

str = buffers.toString();

less.render(str, function(e, css){
	console.log(e);
	console.log(css);
	fs.writeFile('././src/css/style.css',css,function(err){
		if (!err) {
			console.log('it is replaced!');
		}
	});
});