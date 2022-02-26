var images = ['./images/summer.png', './images/lotion.jpg',
'./images/slippers.png', './images/t-shirts.png',
'./images/short.png'];

var num=0;

window.setInterval(
    function next(){
      var slider = document.getElementById('slider');
      num++;
    
      if(num>= images.length){
        num=0;
      }
    
      slider.src = images[num];
    }
    , 5000);

    function next(){
      var slider = document.getElementById('slider');
      num++;
    
      if(num>= images.length){
        num=0;
      }
    
      slider.src = images[num];
    }

function prev(){
  var slider = document.getElementById('slider');
  num--;
  if(num<0){
    num = images.length-1;
  }

  slider.src = images[num];
}