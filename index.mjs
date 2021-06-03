import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';

const server = http.createServer((req, res) => {
    const file = retrieveFile('.' + req.url);

    if (!file) {
        res.writeHead(404);
        res.end('file not found');
    }
    
    const contentType = determineExtension(req.url);    
    res.writeHead(200), {
        'Content-Type': contentType
    };

    res.end(file);

});

server.listen(3000, 'localhost', () => {
    console.log('server is listening on port 3000...');
});

const retrieveFile = (filePath) => {
    try {
        const data = fs.readFileSync(filePath);
        return data.toString('utf-8');

    } catch (e) {
        return null
    }
}

const determineExtension = (filePath) => {
    const ext = path.extname(filePath);
    let contentType;
    switch (ext) {
        case '.html':
            contentType =  'text/html'
            break;
        
        case '.css':
            contentType = 'text/css'
            break;
    
        default:
            break;
    }

    return contentType;
}