const http = require('http'); //protokol ataması
const fs = require('fs'); //filesystem ataması
const server = http.createServer((req , res) => {
    const url = req.url; //gidecek url taraması
    const method = req.method; //get alır,post gönderir

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message </title><head>');
        res.write('<body><form action = "message" method ="POST"><input type="text" name= "/message"><button type = "submit">Send </button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST') //formu gönderdiğimizde /message olacak, method da post çünkü form gönderiyoruz
    {
        const body = []; //datayı parça parça almak için diziye atadık
        req.on('data',(chunck) => {
            console.log(chunck);
            body.push(chunck);
        });
    
    req.on('end',() => { 
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1]; // key = value gibi olduğu için kelimeye bölecek
        fs.writeFileSync('message.txt',message); 
    });
    res.statusCode= 302;
    res.setHeader('Location','/');
    return res.end();
}
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);