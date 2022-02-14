const fs = require('fs')

function requestHandler(req, res) {
    const url = req.url
    const method = req.method
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Click me</button></form></body>');
        res.write('</html>');
        return res.end(); //need return to return from function;
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        // using event listener to handle streaming data
        req.on('data', (chunk) => {
            //event listeners continue after response is already complete.
            console.log("chunk:", chunk)
            body.push(chunk);
        });
        return req.on('end', () => {
            // req.on is async. No other code is paused
            // req.on('end') listener runs when node is done parsing the other requests.
            // parsedBody is now a buffer ("bus stop"), converted to string.
            // We know the body is text, because we are sending it.
            const parsedBody = Buffer.concat(body).toString();
            console.log("parsedBody:", parsedBody, "ETC")
            const msg = parsedBody.split('=')[1];
            // writeFileSync is sync (not recommended for use), 
            // BLOCKING later code, 
            // and incoming requests until it is complete.
            // fs.writeFileSync('message.txt', message);
            fs.writeFile('./message.txt', msg, (err) => {
                res.writeHead(302, {Location: '/'})
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello from my Node.js server!</h1></body>')
    res.write('</html>')
    // Do NOT send another res after res.end();
    // Will result in error.
    res.end()
}

//every file in nodeJS can have only one export
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// Same thing:
// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text 02'

// Same thing - shortcut supported by NodeJS: 
exports.handler = requestHandler;
exports.someText = 'Some hard coded text 02';
