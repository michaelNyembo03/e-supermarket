var saucepanPrices = {saucepanOnePrice:"150"}


var lighterPrices = {lighterOnePrice:"20"}



var knifePrices = {knifeOnePrice:"50"}


var saucePan =['images/saucepan1.jpg','images/saucepan2.jpg','images/saucepan3.jpg'];

var lighter =['images/lighter1.jpg','images/lighter2.jpg','images/lighter3.jpg'];

var knife =['images/kinfe1.jpg','images/knife2.jpg','images/knife3.jpg'];



function counterDown(){
    var screen = document.getElementById("counterScreen");
    var text = screen.textContent;
    var num =Number(text);
    var num1 =Number(text);

    if(num>0){
        screen.innerHTML = --num;
    }

    
    var price = document.getElementById("totPrice");
    var p = price.textContent;
    var pr = Number(p);

    if(num1>0){
     
       if(saucePan.includes('images/saucepan1.jpg')){
        var orginalPrice1 = Number(saucepanPrices.saucepanOnePrice);
        var tot = pr-orginalPrice1;
        price.innerHTML = tot;
    }
  }
}

function counterUp(){
    var screen = document.getElementById("counterScreen");
    var text = screen.textContent;
    var num =Number(text);

    screen.innerHTML = ++num;

    var price = document.getElementById("totPrice");
    var p = price.textContent;
    var pr = Number(p);
    
    if(num>0){

        if(saucePan.includes('images/saucepan1.jpg')){
            var orginalPrice1 = Number(saucepanPrices.saucepanOnePrice);
            var tot = pr+orginalPrice1;
            price.innerHTML = tot;
        }
    }
}




function counterDown1(){
    var screen = document.getElementById("counterScreen1");
    var text = screen.textContent;
    var num =Number(text);
    var num1 =Number(text);

    if(num>0){
        screen.innerHTML = --num;
    }

    
    var price = document.getElementById("totPriceL");
    var p = price.textContent;
    var pr = Number(p);

    if(num1>0){
     
       if(lighter.includes('images/lighter1.jpg')){
        var orginalPrice1 = Number(lighterPrices.lighterOnePrice);
        var tot = pr-orginalPrice1;
        price.innerHTML = tot;
    }
  }
}


function counterUp1(){
    var screen = document.getElementById("counterScreen1");
    var text = screen.textContent;
    var num =Number(text);

    screen.innerHTML = ++num;

    var price = document.getElementById("totPriceL");
    var p = price.textContent;
    var pr = Number(p);
    
    if(num>0){

        if(lighter.includes('images/lighter1.jpg')){
            var orginalPrice1 = Number(lighterPrices.lighterOnePrice);
            var tot = pr+orginalPrice1;
            price.innerHTML = tot;
        }
    }
}





function counterDown2(){
    var screen = document.getElementById("counterScreen2");
    var text = screen.textContent;
    var num =Number(text);
    var num1 =Number(text);

    if(num>0){
        screen.innerHTML = --num;
    }

    
    var price = document.getElementById("totPriceK");
    var p = price.textContent;
    var pr = Number(p);

    if(num1>0){
       
       if(knife.includes('images/kinfe1.jpg')){
        var orginalPrice1 = Number(knifePrices.knifeOnePrice);
        var tot = pr-orginalPrice1;
        price.innerHTML = tot;
    }
  }
}

function counterUp2(){
    var screen = document.getElementById("counterScreen2");
    var text = screen.textContent;
    var num =Number(text);

    screen.innerHTML = ++num;

    var price = document.getElementById("totPriceK");
    var p = price.textContent;
    var pr = Number(p);
    
    if(num>0){
        
        if(knife.includes('images/kinfe1.jpg')){
            var orginalPrice1 = Number(knifePrices.knifeOnePrice);
            var tot = pr+orginalPrice1;
            price.innerHTML = tot;
        }
    }
}






function changePictureTypeSp1(){
    var pic = document.getElementById("pic");
    var screen = document.getElementById("counterScreen");

    var p = document.getElementById("price");
    var tp = document.getElementById("totPrice");

    p.innerHTML = saucepanPrices.saucepanOnePrice;
    tp.innerHTML = saucepanPrices.saucepanOnePrice;
    screen.innerHTML=0;
  
    pic.src = saucePan[0];

}

function changePictureTypeSp2(){
    var pic = document.getElementById("pic");
    var p = document.getElementById("price");
    var tp = document.getElementById("totPrice");
    var screen = document.getElementById("counterScreen");

    p.innerHTML = saucepanPrices.saucepanOnePrice;
    tp.innerHTML = saucepanPrices.saucepanOnePrice;
    screen.innerHTML=0;
  
    pic.src = saucePan[1];
}

function changePictureTypeSp3(){
    var pic = document.getElementById("pic");
    var p = document.getElementById("price");
    var tp = document.getElementById("totPrice");
    var screen = document.getElementById("counterScreen");

    p.innerHTML = saucepanPrices.saucepanOnePrice;
    tp.innerHTML = saucepanPrices.saucepanOnePrice;
    screen.innerHTML=0;

    pic.src = saucePan[2];
}




function changePictureTypeSp4(){
    var pic = document.getElementById("pic2");
  
    pic.src = lighter[0];

}

function changePictureTypeSp5(){
    var pic = document.getElementById("pic2");
  
    pic.src = lighter[1];
}

function changePictureTypeSp6(){
    var pic = document.getElementById("pic2");
  
    pic.src = lighter[2];
}





function changePictureTypeSp7(){
    var pic = document.getElementById("pic3");
  
    pic.src = knife[0];

}

function changePictureTypeSp8(){
    var pic = document.getElementById("pic3");
  
    pic.src = knife[1];
}

function changePictureTypeSp9(){
    var pic = document.getElementById("pic3");
  
    pic.src = knife[2];
}




function calclulateTot(){
    var price = document.getElementById("totPrice");
    var p = price.textContent;
    var pr = Number(p);

    var price1 = document.getElementById("totPriceL");
    var p1 = price1.textContent;
    var pr1 = Number(p1);
  

    var price2 = document.getElementById("totPriceK");
    var p2 = price2.textContent;
    var pr2 = Number(p2);

    var discount=5;
    var disCalcul = ((pr+pr1+pr2)*discount)/100;
    var totCalcul = (pr+pr1+pr2)-disCalcul;

    var t = document.getElementById("totCal");
    t.innerHTML = totCalcul;

}
