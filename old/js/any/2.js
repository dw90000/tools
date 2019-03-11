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
      y += speed;

      context.fillStyle = '#000000';
      context.beginPath();
      context.arc((theCanvas.width/2)-10 , y, 20, 0, Math.PI*2 , true);
      context.fill();
    }

    theCanvas = document.getElementById("canvasOne");
    context = theCanvas.getContext("2d");

    var speed = 5;
    var y = 10;
    var x = 250;

    setInterval(drawScreen,33);

  }


});
