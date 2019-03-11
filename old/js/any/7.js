$(function(){

  canvasApp();



  function canvasApp(){

    // formElement = document.getElementById("canvasWidth");
    // formElement.addEventListener('change',canvasWidthChanged, false);

    // formElement = document.getElementById("canvasHeight");
    // formElement.addEventListener('change',canvasHeightChanged, false);

    function drawScreen(){

      // 色塗り
      context.fillStyle = '#f0f0f0';
      context.fillRect(0,0,theCanvas.width,theCanvas.height);

      // ボックス
      context.strokeStyle = '#cccccc';
      context.strokeRect(1,1,theCanvas.width-2,theCanvas.height-2);

      update();
      testWalls();
      collide();
      render();

      // ボール

      // context.fillStyle = '#cccccc';

      // for (var i=0; i<balls.length; i++){
      //   ball = balls[i]
      //   ball.x += ball.xunits;
      //   ball.y += ball.yunits;

      //   context.beginPath();
      //   context.arc(ball.x , ball.y, ball.radius, 0, Math.PI*2 , true);
      //   context.fill();

      //   if(ball.x > theCanvas.width-ball.radius || ball.x < ball.radius){
      //     ball.angle = 180 - ball.angle;
      //     updateBall(ball);
      //   }else if(ball.y > theCanvas.height-ball.radius || ball.y < ball.radius){
      //     ball.angle = 360 - ball.angle;
      //     updateBall(ball);
      //   }
      // }
    }

    function update(){
      for( var i=0; i< balls.length; i++){
        ball = balls[i];
        ball.nextx = (ball.x + ball.velocityx);
        ball.nexty = (ball.y + ball.velocityy);
      }
    }

    function testWalls(){
      var ball;

      for(var i = 0; i<balls.length; i++){
        ball = balls[i];
        
        if(ball.nextx + ball.radius > theCanvas.width){
          ball.velocityx = ball.velocityx*-1;
          ball.nextx = theCanvas.width - ball.radius;
        } else if(ball.nextx - ball.radius < 0){
          ball.velocityx = ball.velocityx*-1;
          ball.nextx = ball.radius;
        } else if(ball.nexty + ball.radius > theCanvas.height){
          ball.velocityy = ball.velocityy*-1;
          ball.nexty = theCanvas.height - ball.radius;
        } else if(ball.nexty -ball.radius < 0){
          ball.velocityy = ball.velocityy*-1;
          ball.nexty = ball.radius;
        }
      }
    }

    function render(){
      var ball;
      context.fillStyle = "#000000";
      for( var i =0; i < balls.length; i++ ){
        ball = balls[i];
        ball.x = ball.nextx;
        ball.y = ball.nexty;
        context.beginPath();
        context.arc(ball.x,ball.y,ball.radius,0,Math.PI*2,true);
        context.fill();
        // console.log(ball);
      }
    }

    function collide(){
      var ball;
      var testBall;
      for (var i = 0; i < balls.length; i++) {
        ball = balls[i];
        for (var j = i+1; j < balls.length; j++) {
          testBall = balls[j];
          if(hitTestCircle(ball,testBall)){
            collideBalls(ball,testBall);
          }
        };
      };
    }

    function hitTestCircle(ball1,ball2){ 
      var retval = false;
      var dx = ball1.nextx - ball2.nextx;
      var dy = ball1.nexty - ball2.nexty;

      var distance = (dx * dx + dy * dy);
      if(distance <= (ball1.radius+ball2.radius)*(ball1.radius+ball2.radius)){
        retval = true;
      }

      return retval;

    }

    function collideBalls(ball1,ball2){
      var dx = ball1.nextx - ball2.nextx;
      var dy = ball1.nexty - ball2.nexty;

      var collisionAngle = Math.atan2(dy,dx);
      var speed1 = Math.sqrt(ball1.velocityx * ball1.velocityx + ball1.velocityy * ball1.velocityy);
      var speed2 = Math.sqrt(ball2.velocityx * ball2.velocityx + ball2.velocityy * ball2.velocityy);
      var direction1 = Math.atan2(ball1.velocityy,ball1.velocityx);
      var direction2 = Math.atan2(ball2.velocityy,ball2.velocityx);
      var velocityx_1 = speed1 * Math.cos(direction1 - collisionAngle)
      var velocityy_1 = speed1 * Math.sin(direction1 - collisionAngle)
      var velocityx_2 = speed2 * Math.cos(direction2 - collisionAngle)
      var velocityy_2 = speed2 * Math.sin(direction2 - collisionAngle)


      var final_velocityx_1 = ((ball1.mass - ball2.mass)*velocityx_1 + (ball2.mass + ball2.mass) * velocityx_2)/(ball1.mass + ball2.mass);
      var final_velocityx_2 = ((ball1.mass - ball1.mass)*velocityx_1 + (ball2.mass - ball1.mass) * velocityx_2)/(ball1.mass + ball2.mass);


      var final_velocityy_1 = velocityy_1;
      var final_velocityy_2 = velocityy_2;

      ball1.velocityx = Math.cos(collisionAngle) * final_velocityx_1 + Math.cos(collisionAngle + Math.PI/2) * final_velocityy_1;
      ball1.velocityy = Math.sin(collisionAngle) * final_velocityx_1 + Math.sin(collisionAngle + Math.PI/2) * final_velocityy_1;
      ball2.velocityx = Math.cos(collisionAngle) * final_velocityx_2 + Math.cos(collisionAngle + Math.PI/2) * final_velocityy_2;
      ball2.velocityy = Math.sin(collisionAngle) * final_velocityx_2 + Math.sin(collisionAngle + Math.PI/2) * final_velocityy_2;

      ball1.nextx = (ball1.nextx += ball1.velocityx);
      ball1.nexty = (ball1.nexty += ball1.velocityy);
      ball2.nextx = (ball2.nextx += ball2.velocityx);
      ball2.nexty = (ball2.nexty += ball2.velocityy);
    }

    // function updateBall(ball){
    //   ball.radians = ball.angle * Math.PI /180;
    //   ball.xunits = Math.cos(ball.radians) * ball.speed;
    //   ball.yunits = Math.sin(ball.radians) * ball.speed;
    // }

    var numBalls = 200;
    var maxSize = 10;
    var minSize = 5;
    var maxSpeed = maxSize + 5;
    var balls = [];
    var tempBall;
    var tempX;
    var tempY;
    var tempSpeed;
    var tempAngle;
    var tempRadius;
    var tempRadians;
    var tempVelocityx;
    var tempVelocityy;

    theCanvas = document.getElementById("canvasOne");
    context = theCanvas.getContext("2d");

    for(var i=0; i<numBalls; i++){
      tempRadius = 5;
      var placeOK = false;

      while(!placeOK){
        tempX = Math.floor(Math.random()*theCanvas.width);
        tempY = Math.floor(Math.random()*theCanvas.height);
        tempSpeed = 4;
        tempAngle = Math.floor(Math.random()*360);
        tempRadians = tempAngle * Math.PI /180;
        tempVelocityx = Math.cos(tempRadians)*tempSpeed;
        tempVelocityy = Math.sin(tempRadians)*tempSpeed;

        tempBall = {
          x:tempX,
          y:tempY,
          nextx:tempX,
          nexty:tempY,
          radius:tempRadius,
          speed:tempSpeed,
          angle:tempAngle,
          velocityx:tempVelocityx,
          velocityy:tempVelocityy,
          mass:tempRadius
        }
        placeOK = canStartHere(tempBall);
      }

      
      balls.push(tempBall);

    }

    // console.log(balls[0])

    function canStartHere(ball){
      
      var retval = true;
      for (var i = 0; i < balls.length; i++) {
        if(hitTestCircle(ball,balls[i])){
          retval = false;
        }  
      }
      return retval;
    }

    setInterval(drawScreen,33);




  }

});
