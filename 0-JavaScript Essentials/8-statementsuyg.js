var dogum = prompt("Doğum yılınızı giriniz: ");
var yıl = 2024;
var yas = parseInt(yıl-dogum);               
 

if(yas >= 18)
{
    console.log("Ehliyet alabilirsin");
}

else if (yas <18)
{
console.log("Ehliyet almana:"+ 18-yas + "var");
}
    