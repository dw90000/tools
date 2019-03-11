$(function(){


  if($(".regexp")){
    $("#before textarea").on("change keyup",wrapper);
    $("input[name='type1']").on("change",wrapper);
    $("input[name='type2']").on("change",wrapper);
    $("input[name='type3']").on("change",wrapper);
  }

  // Pタグで包む
  function wrapper(){

    var type1 = $("input[name='type1']").prop('checked');
    var type2 = $("input[name='type2']").prop('checked');
    var type3 = $("input[name='type3']").prop('checked');

    var textareaCode = $("#before textarea").val();
    if(textareaCode != " "){

      // var res = textareaCode.replace(/<.*?>/g,'');
      var res = textareaCode.replace(/<.*?>/g, function(_s){

        if (type1 && _s.match("<a") || type1 && _s.match("</a>") || type2 && _s.match("<br") || type3 && _s.match("<img")) {
          return _s;
        } else {
          return '';
        }

      });

      textareaCode = res;

      var res = textareaCode.replace(/\t/g,'');
      textareaCode = res;

      var res = textareaCode.replace(/-->/g,'');

      textareaCode = res;

      var res = textareaCode.replace(/<!--/g,'');

      textareaCode = res;
      var res = textareaCode.replace(/\n\n/g,'');

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
