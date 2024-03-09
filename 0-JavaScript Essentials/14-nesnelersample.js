var personel =[
    
    {   
        ad:"ali",
        soyad: "yılmaz",
        cinsiyet: "erkek",
        tel: "023456789",
        adres:"izmit,kocaeli",
        meslek: "yazılım mühendisi",
        diller: ["ing","alm"],
        hobiler:["sinema","spor"]
    },
    {   
        ad:"aliy",
        soyad: "yyılmaz",
        cinsiyet: "yerkek",
        tel: "0y23456789",
        adres:"yizmit,kocaeli",
        meslek: "yyazılım mühendisi",
        diller: "ying,alm",
        hobiler:["müzik","yüzme"]
    }
];

/*for(var i =0; i<=personel.length;i++)
    {
        //console.log(personel[i]);
        console.log(personel[0].diller[i]);
    }
*/

for(var i=0; i<=personel.length; i++)
    {
        console.log(personel[i].hobiler);
    }


