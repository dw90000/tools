$(function(){

  canvasApp();

  function canvasApp(){

    function drawScreen(){

      // 色塗り
      context.fillStyle = '#EEEEEE';
      context.fillRect(0,0,theCanvas.width,theCanvas.height);

      // ボックス
      context.strokeStyle = '#000000';
      context.strokeRect(1,1,theCanvas.width-2,theCanvas.height-2);

      // ボール
      ball.x += xunits;
      ball.y += yunits;

      // 経路の点
      // points.push({x:ball.x,y:ball.y});

      for (var i=0;i<points.length;i++){
        context.fillStyle = '#000000';
        context.fillRect(points[i].x , points[i].y,1,1);
      }

      context.fillStyle = '#000000';
      context.beginPath();
      context.arc(ball.x , ball.y, 5, 0, Math.PI*2 , true);
      context.fill();

      if(ball.x > theCanvas.width || ball.x < 0){
        angle = 180 - angle;
        updateBall();
      }else if(ball.y > theCanvas.height || ball.y < 0){
        angle = 360 - angle;
        updateBall();
      }
    
    }

    var speed = 5;
    var p1 = {x:20,y:20};
    var angle = 4;
    var radians = 0;
    var xunits = 0;
    var yunits = 0;
    var points = [];
    
    updateBall();

    function updateBall(){
      radians = angle * Math.PI /180;
      xunits = Math.cos(radians) * speed;
      yunits = Math.sin(radians) * speed;

    }


    var ball = {x:p1.x,y:p1.y};

    theCanvas = document.getElementById("canvasOne");
    context = theCanvas.getContext("2d");

    setInterval(drawScreen,1);
  }
});
