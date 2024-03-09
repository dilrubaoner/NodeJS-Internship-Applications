//spin up a nodejs driven server (on port 3000)
//handle two routes : "/" and "/users"
//return some greeting text on "/"
//return a list of dummy users (eg <ul><li>User1</li></ul>)
//add a form with a "username" <input> to the "/" page and submit a POST request to "/create-user" upon a button click
//add the "/create-user" route and parse the incoming data (ie the username) and simply log it to the console
const http = require('http');
const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/' && method === "POST")
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Hello My First Assignment Page</title><head>');
        res.write('<body><form action = "/create-users" method ="POST"><input type="text" name= "usernam"><button type = "submit">Send </button></form></body>');
        res.write('</html>');
        return res.end(); //buraya kadar çalışsın diye return kod buraya kadar çalışıyor
    }
    if(url === '/users')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1 </title><head>');
        res.write('<ul><li>User1</li><li>User 2</li></ul>');
        res.write('</html>');
        return res.end();
    }
    if (url === "/create-user" && method === "POST")
    {
        const body = [];
        req.on('data', (chunck) => {
            body.push(chunck);
            console.log(body)
        });

        req.on('end',() => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody.split('=')[1]); // data name = value olarak gelir
        });
        res.statusCode = 302;
        res.setHeader ('Location','/');
        res.end();
    }
    });
        server.listen(3000);


