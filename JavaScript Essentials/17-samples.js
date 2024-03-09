/*"merhaba dünya" string'inde bulunan "merhaba" kısmını nasıl büyük harflerle yazdırabilirsiniz?
var hi = "hello world";
console.log(hi.substring(0,5).toUpperCase()); */

/*String Metodu Sorusu:
"javascript öğreniyorum" string'indeki her kelimenin baş harfini büyük yapmak için hangi string metodu kullanılabilir? */

var cumle = "javascript öğreniyorum";
var array = [];
array.unshift(cumle.split(" "));

for(var i=0; i<= array.length; i++)
    {
        var b= array[i].charAt(0).toUpperCase();
        console.log(b);
    }

