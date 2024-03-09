/*const http = require('http'); //nodejs temel http modülünü yükler
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
// server.listen(3000); //Sunucuyu belirtilen port numarasında dinlemeye başlar. */

const express = require('express');
const bodyParser = require('body-parser');

const app = express ();

const adminRoutes = require('./routes/admin'); //admin.js de yazabiliriz
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(shopRoutes);
app.use(adminRoutes);

app.use((req,res,next) =>{
     
    res.status(404).send('<h1> Page not found </h1>');
});



app.listen(3000); 