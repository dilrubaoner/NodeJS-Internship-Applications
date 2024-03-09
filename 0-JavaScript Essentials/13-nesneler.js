/* var opel = {
    marka :"opel",
    model: "corsa",
    yil: "2015",
    renk: "mavi",
    otomatik: true,
    
};

console.log(opel.marka);
console.log(opel["renk"]); 

var toyota = new Object();
toyota.marka = "toyota";
toyota.model ="yaris";
toyota.yil = "2012";
toyota.renk = "kırmızı";

console.log(toyota); */

var arabalar = [
    {
        marka: "opel",
        model: "corsa",
        yıl:"2015"
    },
    {
        marka: "mazda",
        model:"cx-3",
        yıl: "2023"
    }   
];

//console.log(arabalar[0].model);
//console.log(arabalar[1].yıl);

for(var i=0; i<=arabalar.length; i++)
    {
        console.log(arabalar[i].marka);
    }