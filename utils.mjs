import * as fs from 'fs';
import * as path from 'path';


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
            contentType = 'text/html'
            break;

        case '.css':
            contentType = 'text/css'
            break;

        case '.js':
            contentType = 'application/javascript'
            break;

        default:
            break;
    }

    return contentType;
}



export {
    retrieveFile,
    determineExtension
}