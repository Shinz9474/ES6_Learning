const http = require('http');
const server = http.createServer((req, res)=> {
    if(req.url=== '/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/testcase'){
        res.write(JSON.stringify(['TC1', 'TC2', 'TC3']))
        res.end();
    }
});

server.on('connection', (socket)=>console.log("New Connection"))
server.listen(3000); // Server raises an event
console.log('listenting to port 3000');