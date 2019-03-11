$(function(){


  if($(".regexp")){
    $("#before textarea").on("change keyup",halfImage);  
  }

  // イメージを半分に
  function halfImage(){
    var textareaCode = $("#before textarea").val();  
    var reg = /"(\d*?)"/g;
    var res = textareaCode.replace(reg, function(_s){
    var s = _s.replace(/"/g,'');
      return '"'+s/2+'"';
    });
    $("#after textarea").text(res);
  }


  // 結果を全選択
  $("#after textarea").on("click",function(){
    $(this).select();
  });

});
