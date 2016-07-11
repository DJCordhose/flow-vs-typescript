const fs = require('fs');
const path = require('path');
const http = require('http');
const port = 3000;

const data = fs.readFileSync(path.resolve(__dirname, 'data.json'), 'UTF-8');

const requestHandler = (request, response) => {
    // enables cors
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.end(data);
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});