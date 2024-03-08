/*const http = require('http');
function rqListner (req, res){
}
http.createServer(rqListner);


const http = require('http');
http.createServer(function(req,res){
}); //anonymous function

const http = require('http');
http.createServer((req,res) => {
    //callback function, arrow
});

const http = require('http');
const server = http.createServer((req,res)=> {
    console.log(req);
});
server.listen(3000);
exit from execute manually to not listen => control+c 
command line is open ew didnt exit  

const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req);
    process.exit();
});
server.listen(3000);

const http = require("http");
const server = http.createServer((req,res) => {
    
    console.log("Url");
    console.log(req.url);
    console.log("Method");
    console.log(req.method);
    console.log("Header");
    console.log(req.headers);

});
server.listen(3000);  

const http = require("http");
const server = http.createServer((req,res) => {
    console.log(req.url , req.method , req.headers);
    //process.exit();
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<body><h1> Hello from my Node.js Server! <h1></body>');
    res.write('</html>');
    res.end(); //no code after res.end();
});
server.listen(3000);  */

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=> {
  const url = req.url;
  const method = req.method;
    if(url === '/')
    {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action = "/message" method = "POST" >input type="text" name="message"><button type = "submit"><Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }//after run this code /message  (name="message") then next code will be run

    if(url=== '/message' && method === 'POST')
    {
        const body = [];
        req.on('data',(chunck) => {
            console.log(chunck);
            body.push(chunck); });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt',message);
        });
        res.statusCode = 302;
        res.setHeader ('Location','/');
        return res.end();
    }
        //fs.writeFile('message.txt',message,(err)=> {
        //res.writeHead(302,{});
        //res.statusCode = 302; //code 302 for routing
        //res.setHeader('Location','/');
        //return res.end();
        //}); //writeFileSync yazmamalıyız
    
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title> My First Page </title><head>');
    res.write('<body><h1>Hello from my Node.js Server!<h1><body>');
    res.write('<html>');
    res.end();
});
    server.listen(3000);






