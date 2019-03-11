$(function(){

  if($(".regexp")){
    $("#before textarea").on("change keyup",conversion);  
    $("input[name='type']").on("change",conversion);  
  }

  function conversion(){
    var textareaCode = $("#before textarea").val();
    if(textareaCode != " "){
      var reg = /"(\d*?)"/g;
      var res = textareaCode.replace(reg, function(_s){
      var s = _s.replace(/"/g,'');
        if(s != ""){
          return '"'+s/2+'"';
        }else{
          return '""';
        }
      });
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
