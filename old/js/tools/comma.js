$(function(){


  if($(".regexp")){
    $("#before textarea").on("change keyup",comma);  
  }

  function comma(){
    var result = "";
    var textareaCode = $("#before textarea").val();
    textareaCode = textareaCode.split("\n");

    if(textareaCode != " "){
      for (var i = 0; i < textareaCode.length; i++) {
        var res = textareaCode[i].replace(/(\d)(?=(\d\d\d)+$)/g, "$1,");
        result += res+"\n";
      };
      $("#after textarea").attr("disabled",false).text(result);
    }else{
      $("#after textarea").attr("disabled","disabled").text(result);
    }
  }
  
  // 結果を全選択
  $("#after textarea").on("click",function(){
    $(this).select();
  });

});
