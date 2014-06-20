var server = require('./server');
var router = require('./router');
var reqHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = reqHandlers.rooturl;
handle['/start'] = reqHandlers.start;
handle['/upload'] = reqHandlers.upload;
handle['/show'] = reqHandlers.show;

handle['htm'] = reqHandlers.dealhtmurl;
handle['css'] = reqHandlers.dealcssurl;
handle['js'] = reqHandlers.dealjsurl;
handle['png'] = reqHandlers.dealimgurl;
handle['json'] = reqHandlers.dealjsonurl;


server.start(router.router, handle);