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
      if(moves > 0){
        moves--;
        ball.x += xunits;
        ball.y += yunits;
      }

      // 経路の点
      points.push({x:ball.x,y:ball.y});

      for (var i=0;i<points.length;i++){
        context.fillStyle = '#000000';
        context.fillRect(points[i].x , points[i].y,1,1);
      }
      
      context.fillStyle = '#000000';
      context.beginPath();
      context.arc(ball.x , ball.y, 5, 0, Math.PI*2 , true);
      context.fill();
    }

    var speed = 5;
    var p1 = {x:20,y:20};
    var p2 = {x:480,y:440};
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    var distance = Math.sqrt(dx*dx + dy*dy);
    var moves = distance / speed;
    var xunits =(p2.x - p1.x)/moves;
    var yunits =(p2.y - p1.y)/moves;
    var ball = {x:p1.x,y:p1.y};
    var points = [];

    theCanvas = document.getElementById("canvasOne");
    context = theCanvas.getContext("2d");

    setInterval(drawScreen,30);
  }
});
