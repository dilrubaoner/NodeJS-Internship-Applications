/* for(var i=10 ; i<=100; i++)
    {
        console.log(i);
    }


var i = 10;
while (i<=100)
    {
        console.log(i);
        i=i+5;
    } */

    var k_username = prompt("enter username");
    var k_password = prompt("password");
    var loggedin = false;
    //while conditionın içi true olmalı
    while (loggedin ==false)
    {
        if ((k_username =="guest") &&(k_password=="password"))
        {
        console.log("Giriş yapıldı");
        loggedin = true;  
        }
        else 
        {
        console.log("Hatalı Giriş Yapıldı");
        }
    }
    