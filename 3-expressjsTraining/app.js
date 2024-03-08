const http = require('http'); //nodejs temel http modülünü yükler
const express = require('express'); //expressjs frameworkünü yükler
const app = express(); //Express uygulaması üzerinde çalışmak için bir nesne oluşturur
app.use((req,res,next) => {
    console.log("In the middleware");
    next(); //allows the request to continue to the next middleware in line
});
app.use((req,res,next) => {
    console.log("In another middleware");
    res.send('<h1> Hello from Expressjs </h1>');
});
// console.log(routes.someText); routes adında bir nesnenin someText özelliğini konsola yazdırır

app.listen(3000,() => {
    console.log("listening on port 3000")
})
// const server = http.createServer(); //HTTP sunucusunu oluşturur. 
// server.listen(3000); //Sunucuyu belirtilen port numarasında dinlemeye başlar. 

/*const http = require('http');
const express = require('express');
const app = express ();
const server = http.createServer((req,res) => {
    app.use('/',(req,res,next) => {
        console.log("This always run!");
        next();
    });
    
    app.use('/add.product',(req,res,next) => {
        console.log("In the middleware");
        res.send('<h1> The "Add Product" </h1>');
    });
    
    app.use('/def',(req,res,next) => {
        console.log("In another middleware");
        res.send('<h1> Hello from Express </h1>');
    });
});
server.listen(3000); */