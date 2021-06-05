import * as http from 'http';

import * as database from './database.mjs';
import * as utils from './utils.mjs';

const port = 3000;
const apiPort = 3050;

const server = http.createServer((req, res) => {
    const file = utils.retrieveFile('.' + req.url);

    if (!file) {
        res.writeHead(404);
        res.end('file not found');
    }

    const contentType = utils.determineExtension(req.url);

    res.writeHead(200, {
            'Content-Type': contentType,
        });

    res.end(file);

});

const apiServer = http.createServer(async (req, res) => {
    if (req.url === '/api/tasks') {

        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        });
        
        const tasks = await database.getTasks();

        res.end(JSON.stringify(tasks));
    }
});


server.listen(port, 'localhost', () => {
    console.log(`server is listening on port ${port}...`);
});

apiServer.listen(apiPort, 'localhost', () => {
    console.log(`api server listening on port ${apiPort}...`);
})