const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write(`<html>
            <head>
                <title>My Greetings Page</title>
            </head>
            <body>
                <h1>Hello and Good Evening!</h1>
                <form action="/create-user" method="POST">
                    <input type="text" name="username" />
                    <button type="submit>Submit user</button>
                </form>
            </body>
        </html>`)

        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log('chunk', chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const userName = parsedBody.split('=')[1];
            console.log("userName:", userName);

            res.writeHead(302, {Location: '/'})
            return res.end();
        })
    }
    if (url === '/users') {
        res.write(`<html>
            <head>
                <title>My Dummy Users</title>
            </head>
            <body>
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                    <li>User 3</li>
                </ul>
            </body>
        </html>`)
    }
});

server.listen(3000)