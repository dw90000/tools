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
        var res = textareaCode.replace(/\n/g,'<br>\n');
        textareaCode = res;
        res = textareaCode.replace(/\n<br>/g,'');
      }else if(radio == "type2"){
        var res = textareaCode.replace(/\n/g,'');
        textareaCode = res;   
      }else if(radio == "type3"){
        var res = textareaCode.replace(/\n/g,'<br>');
        textareaCode = res;
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
