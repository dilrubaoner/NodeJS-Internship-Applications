/* function topla (a,b)
{
    return a+b;
}

var sonuc = topla(8,9);
console.log(sonuc);
*/

var now = 2024;

function yashesapla(yıl)
{
    return now-yıl;
}
var ahmet = yashesapla(1990);
var ali = yashesapla(1996);

console.log(ahmet);
console.log(ali);

function emeklilikhesapla(ad,yıl)
{
    var k_yas = yashesapla(yıl);
    var emeklilik = 65 - k_yas;
    
    if (emeklilik>=0)
    {
          console.log(ad + " " + emeklilik + " yıl sonra emekli olabilir");
    }
else{
    console.log("Zaten "+ emeklilik*-1 +" yıl önce emekli olmuş");
}
}

console.log(emeklilikhesapla("cınar",1998));
console.log(emeklilikhesapla("ali",1945));





/*
var ahmet = yashesapla(1972);
var ali = yashesapla(1991);

function emeklilik(ad,yas)
{
    var k_yas = yashesapla(yas);
    var emeklilik = 65-yas
    console.log(ad + " " + emeklilik +"yasında emekli olabilir");
}*/

