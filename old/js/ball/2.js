$(function(){

  var time = 0;
  var posX = 0;
  var posY = 0;
  var nowX = 0;
  var nowY = 0;

  var v0    = 100; // initial velocity 
  var G     = 9.80665; // gravitational acceleration
  var FR    = 1000/60; // frame rate 
  var COR   = 0.8; // coefficient of restitution 

  var sin = Math.sin(80 * (Math.PI / 180));
  var cos = Math.cos(80 * (Math.PI / 180));
  
  var throwing; // timerID

  var circleH = $('#circle').height()-1;

  shoooot(100,80);

  function shoooot(){
     throwing = setTimeout(function(){
       time = time+FR   /50;
       var x = v0*cos*time;
       var y = (v0*sin*time) - (G*time*time)/2;
    
       // nowX = circleW + x;
       posX = x + nowX;
       posY = circleH - y;
       
       $('.ball').css({
         left:posX,
         top:posY
       })

       if( posY < circleH){
         shoooot();
       }else if(v0 > 1){
         v0 = v0*COR;
         nowX = posX;
         time = 0;
         shoooot();
       }else{
         clearTimeout(throwing);
       }
     },FR);
  }

});


