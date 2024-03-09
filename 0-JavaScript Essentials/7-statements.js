var sayi1 = "3"; //str
var sayi2 = 4;
var sayi3 = 3;

if(sayi1 === sayi3)
    {
        console.log("tip türü farklı ===");
    }

else (sayi1 == sayi2)
    {
        console.log("tip türü farklı ama önemsiz ==");
    }


switch(sayi3){
    case '1':
        console.log('d');
        break;
    case 3:
        console.log('e');
        break;
    case '3':
        console.log('f');
        break;
    default : 
        console.log('default çalıştı')
}
    