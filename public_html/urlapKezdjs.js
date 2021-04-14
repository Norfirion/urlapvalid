window.addEventListener("load", init);

/* segédfüggvény*/
function ID(nev){
    return document.getElementById(nev);
}
function $(nev){
   return document.querySelectorAll(nev);
}
function init(){
    console.log("hahó");
    ID("kuld").addEventListener("click",validalas);
    
}
function validalas(){
var uzenet = "";
var megadottAdatok="";
    if (ID("nev").value.length < 3){
        uzenet = "A név legalább 3 karakter hosszú legyen! <br>";
        ID("nev").style.border="2px solid red";
    }else{
        ID("nev").style.border="none";
    }
    var reg= /[A-Z]+[a-z](2,)/;
    if(reg.test(ID("nev").value)){
        uzenet+="A név legalább 3 karakter hosszú legyen!A név nagybetüvel kell kezdődjön! <br>";
        ID("nev").style.border="2px solid red";
    }
    else{
        ID("nev").style.border="none";
        
    }
    megadottAdatok="Név:"+ID("nev").value+"<br>";
    
    //console.log(uzenet);
    $("aside section:nth-child(1) p")[0].innerHTML=uzenet;
    $("aside section:nth-child(2) p")[0].innerHTML=megadottAdatok;

    }
