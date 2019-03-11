$(function(){

  var PIECE       = 16;
  var WIDTH       = 200;
  var blank_pos   = PIECE - 1;
  var active_pos  = 0;
  var $numberLi   = $(".number li");
  var $coverLi    = $(".cover li");
  var randomized  = false;
  var movable     = true;
  var control_pos = 0;

  init();

  function init(){
    setPosition();
    randomize();
  }

  function setPosition(){
    for(var i = 0 ; i < PIECE ; i++){
     $numberLi.eq(i).addClass("pos"+i)
    }
  }

  $coverLi.click(function(){
    active_pos = $coverLi.index($(this));
    move();
  });

  function move(){

    if(!movable){
      return false;
    }

    var abs = Math.abs(blank_pos - active_pos);
    if(abs == 1 || abs == 4){
      var active_dom = ".pos" + active_pos;
      var blank_class = "pos" + blank_pos;
      
      $(active_dom).attr("class","").addClass(blank_class);
      blank_pos = active_pos;
      
      // 
      if(randomized){
        check();
      }
    }
  }

  // DO SHUFFLE !!!!!
  function randomize(){
    for (var i = 0; i < 10; i++) {
      active_pos = Math.floor(Math.random()*PIECE);
      move();
    }
    randomized = true;
    $numberLi.removeClass("active");
    // $(".pos0").addClass("active");
    // active_pos = 0;

  }

  // CHECK!!!!!!
  function check(){
    var count = 0;
    for(varcount = 0 ;count < PIECE ;count++){
      var checkClass = "pos" + count;
      if(!$numberLi.eq(count).hasClass(checkClass)){
        break;
      }
    }
    if(count == 15){
      movable = false;
      $('.number').addClass('finish');
    }
  }

  // KEY CONTROL!!!!!!
  $(document).keydown(onKeyDown);

  function onKeyDown(e){
    var temp_pos;
    var surplus = active_pos%4;
    if(e.which==37){ // ←
      if(surplus != 3){
        temp_pos = active_pos +1;  
      }
    }else if(e.which==38){ // ↑
      temp_pos = active_pos +4;
    }else if(e.which==39){ // →
      if(surplus != 0){
        temp_pos = active_pos -1;
      }
    }else if(e.which==40){ // ↓
      temp_pos = active_pos -4;
    }
    if(temp_pos >= 0 && temp_pos < PIECE){
      active_pos = temp_pos;
      move();
    }    
  }

});
