$(function(){


  if($(".regexp")){
    $("#before textarea").on("change keyup",conversion);  
    $("input[name='type']").on("change",conversion);  
  }

  function conversion(){

    var radio = $("input[name='type']:checked").val();
    var textareaCode = $("#before textarea").val();

    if(textareaCode != " "){

      if(radio == "type1"){
        var res = textareaCode.toLowerCase();
      }else if(radio == "type2"){
        var res = textareaCode.toUpperCase();
      }else{
        var res = textareaCode.toLowerCase();
        res = res+"\n"; // Cheat
        var reg = /(.*?)\s/g;
        res = res.replace(reg, function(_s){
          var s = _s.charAt(0).toUpperCase() + _s.slice(1);
          return s;
        });      
      }
      $("#after textarea").attr("disabled",false).text(res);
    }else{
      $("#after textarea").attr("disabled","disabled").text(res);
    }
  }
  
  // 結果を全選択
  $("#after textarea").on("click",function(){
    $(this).select();
  });

});
