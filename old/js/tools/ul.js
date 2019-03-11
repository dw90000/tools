$(function(){


  if($(".regexp")){
    $("#before textarea").on("change keyup",wrapper);  
  }

  // Pタグで包む
  function wrapper(){
    var textareaCode = $("#before textarea").val();
    if(textareaCode != " "){
      var res = textareaCode.replace(/\n/g,'</li>\n<li>');
      textareaCode = res;
      var res = textareaCode.replace(/^/g,'<li>');
      textareaCode = res;
      var res = textareaCode.replace(/$/g,'</li>');
      textareaCode = res;
      var res = textareaCode.replace(/<li><\/li>/g,'');
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
