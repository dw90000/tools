$(function(){

  canvasApp();

  function canvasApp(){

    formElement = document.getElementById("canvasWidth");
    formElement.addEventListener('change',canvasWidthChanged, false);

    formElement = document.getElementById("canvasHeight");
    formElement.addEventListener('change',canvasHeightChanged, false);

    function drawScreen(){

      // 色塗り
      context.fillStyle = '#f0f0f0';
      context.fillRect(0,0,theCanvas.width,theCanvas.height);

      // ボックス
      context.strokeStyle = '#cccccc';
      context.strokeRect(1,1,theCanvas.width-2,theCanvas.height-2);

      // ボール
      context.fillStyle = '#cccccc';

      for (var i=0; i<balls.length; i++){
        ball = balls[i]
        ball.x += ball.xunits;
        ball.y += ball.yunits;

        context.beginPath();
        context.arc(ball.x , ball.y, ball.radius, 0, Math.PI*2 , true);
        context.fill();

        if(ball.x > theCanvas.width-ball.radius || ball.x < ball.radius){
          ball.angle = 180 - ball.angle;
          updateBall(ball);
        }else if(ball.y > theCanvas.height-ball.radius || ball.y < ball.radius){
          ball.angle = 360 - ball.angle;
          updateBall(ball);
        }
      }
    }

    function updateBall(ball){
      ball.radians = ball.angle * Math.PI /180;
      ball.xunits = Math.cos(ball.radians) * ball.speed;
      ball.yunits = Math.sin(ball.radians) * ball.speed;
    }

    var numBalls = 500;
    var maxSize = 10;
    var minSize = 2;
    var maxSpeed = maxSize + 1;
    var balls = [];
    var tempBall;
    var tempX;
    var tempY;
    var tempSpeed;
    var tempAngle;
    var tempRadius;
    var tempRadians;
    var tempXunits;
    var tempYunits;

    theCanvas = document.getElementById("canvasOne");
    context = theCanvas.getContext("2d");

    for(var i=0; i<numBalls; i++){
      tempRadius = Math.floor(Math.random()*(maxSize - minSize+1)) + minSize;
      tempX = Math.floor(Math.random()*theCanvas.width);
      tempY = Math.floor(Math.random()*theCanvas.height);
      tempSpeed = maxSpeed - tempRadius;
      tempAngle = Math.floor(Math.random()*360);
      tempRadians = tempAngle * Math.PI /180;
      tempXunits = Math.cos(tempRadians)*tempSpeed;
      tempYunits = Math.sin(tempRadians)*tempSpeed;

      tempBall = {
        x:tempX,
        y:tempY,
        radius:tempRadius,
        speed:tempSpeed,
        angle:tempAngle,
        xunits:tempXunits,
        yunits:tempYunits
      }
      balls.push(tempBall);

    }

    setInterval(drawScreen,33);

    function canvasWidthChanged(e){
      var target = e.target;
      theCanvas.width = target.value;
      drawScreen();
    }
    function canvasHeightChanged(e){
      var target = e.target;
      theCanvas.height = target.value;
      drawScreen();
    }



  }

});
