const path = require('path');
const express = require('express'); //express package ataması
const router = express.Router(); //express packagedan router nesnesi oluşturduk

router.get('/add-product',(req,res,next) => {
    res.sendFile(path.join(__dirname,'../', 'views','add-product.html'));
 });          
 
 router.post('/add-product',(req,res,next) => {
     console.log(req.body); 
     res.redirect('/');
 });

module.exports = router; //modüle çevirir , başka dosyalarda kullanmamızı sağlar