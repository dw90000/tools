$(function(){

  var left_val = function(){
    return $("#left input").val();
  }
  
  var right_val  = function(){
    return $("#right input").val();
  }

  $("#left input").on("change keyup",division);  
  $("#right input").on("change keyup",division);  

  // イメージを半分に
  function division(){


    if(isFinite(left_val())){
      $("#left input").removeClass("dame");
    }else{
      $("#left input").addClass("dame");
      return false;
    }

    if(isFinite(right_val())){
      $("#right input").removeClass("dame");
    }else{
      $("#right input").addClass("dame");
      return false;
    }

    var temp_left = parseInt(left_val());
    var temp_right = parseInt(right_val());

    if(temp_left < temp_right){
      var temp_num = temp_left;
    }else{
      var temp_num = temp_right;
    }

    $("#left ul li").remove();
    $("#center ul li").remove();
    $("#right ul li").remove();

    check();

    function check(){
      for(var i = temp_num; i > 1 ; i--){
        if(temp_left%i == 0 && temp_right%i == 0){
          $("#left ul").append("<li>"+temp_left/i);
          $("#center ul").append("<li>:");
          $("#right ul").append("<li>"+temp_right/i);
          temp_num = i;
          break;
        }
      }
    }

  }division();

    


});
