

const HttpModule = require('http');

//Note that server conforms to events so you can do .on and soo ..  
const Server = HttpModule.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hello there !!');
        response.end();
    }
    if (request.url = '/api/courses') {
        response.write(JSON.stringify([1,2,3,5,8]))
        response.end();
    }

}); 

// Server.on('connection', (socket) => {
//     console.log('new connection');
// })

Server.listen(3000);

console.log('listening to port 3000.....');