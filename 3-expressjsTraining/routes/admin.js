const express = require('express'); //express package ataması
const router = express.Router(); //express packagedan router nesnesi oluşturduk

router.get('/add-product',(req,res,next) => {
     res.send('<form action = "/product" method = "POST"><input type = "text" name = "title"> <button type ="submit"> Add Product</button</form>')
 });          
 
 router.post('/product',(req,res,next) => {
     console.log(req.body); 
     res.redirect('/');
 });


module.exports = router; //modüle çevirir , başka dosyalarda kullanmamızı sağlar