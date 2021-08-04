/*const http = require('http');
const port = 8000;

const requestHandler = (request, response) => {
    console.log(request.url);
    if (request.url === '/?name=Ringo&city=Liverpool'){
        response.end('Hello, Ringo from Liverpool!');
    } else if (request.url === '/about') {
        response.end('This demonstarte routung with Node.js.');
    } else { 
    response.end('Hello, Ringo from Liver Default page (URLs other than / and / about)');
}
};
const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        console.error('Something bad happened');
    } else {
        console.log(`server is liting at ${port}`)
    }
    }
);*/

const http = require('http');
const url = require('url');

const port = 8000;

const requestHandler = (request, response) => {
    const showUrl= request.url;
    console.log(showUrl);
    const paparseUrl = url.parse(showUrl, true);
    console.log(paparseUrl);
    response.end(`Hello ${paparseUrl.query.name} from ${paparseUrl.query.city}`)
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        console.error('something bad happened');
    } else {
        console.log(`server is listening on ${port}`);
    }
})