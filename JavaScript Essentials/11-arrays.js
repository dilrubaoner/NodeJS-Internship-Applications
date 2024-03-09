var marka = ["opel","toyota","mazda","renault"];
var model = new Array ("corsa","yaris","cx-3");
console.log(marka[0]);
console.log(model[2]);

model[0]= "astra";
console.log(model);

var auris = ["toyota","auris",42,true];
console.log(auris);

auris.push("blue");//dizinin sonuna eleman +
auris.unshift("hb"); //dizinin başına eleman +
//auris.pop(); //en sondaki -
//auris.shift(); //en baştaki -

for(var i=0 ; i<marka.length; i++)
    {
        console.log(marka[i]);
    }
if(marka.indexOf("mazda")!==-1) 
    //=-1 ise arrayda yok demek
    //!==-1 arrayda bulunamadı değilse, yani bulunduysa
    {
        console.log("bulundu");
    }
else
    {
        console.log("aranılan kelime bulunamadı")
    }

if(marka.indexOf("opel")!=-1)
    {
        console.log("kelime bulundu");
    }
else
    {
        console.log("kelime bulunamadı");
    }