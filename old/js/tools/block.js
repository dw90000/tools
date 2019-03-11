$(function(){

  $("button").on("click",serial);  

  function serial(){
    var match = "\\"+$("#match").val();
    var textareaCode = $("#before textarea").val();
    var start = $("#start").val();
    var repeatend = $("#end").val();
    var end;
    var ends = [];
    var radio = $("input[name='type']:checked").val();
    var result = "";

    var match1 = "\\"+$("#match1").val();
    var match2 = "\\"+$("#match2").val();
    var match3 = "\\"+$("#match3").val();
    var match4 = "\\"+$("#match4").val();
    var match5 = "\\"+$("#match5").val();

    var cast1 = $("#cast1").val();
    if(cast1 != ''){
      cast1 = cast1.split("\n");
      ends.push(cast1.length);
    }

    var cast2 = $("#cast2").val();
    if(cast2 != ''){
      cast2 = cast2.split("\n");
      ends.push(cast2.length);
    }

    var cast3 = $("#cast3").val();
    if(cast3 != ''){
      cast3 = cast3.split("\n");
      ends.push(cast3.length);
    }

    var cast4 = $("#cast4").val();
    if(cast4 != ''){
      cast4 = cast4.split("\n");
      ends.push(cast4.length);
    }

    var cast5 = $("#cast5").val();
    if(cast5 != ''){
      cast5 = cast5.split("\n");
      ends.push(cast5.length);
    }
    
    if(repeatend == 1 ){
      end = Math.max.apply(null,ends);
    }else {
      end = repeatend;
    }

    var eq = 0;
    var regexp = new RegExp(match,'g');
    var regexp1 = new RegExp(match1,'g');
    var regexp2 = new RegExp(match2,'g');
    var regexp3 = new RegExp(match3,'g');
    var regexp4 = new RegExp(match4,'g');
    var regexp5 = new RegExp(match5,'g');

    for (var i = start; i <= end; i++) {
      var res = "";
      if(radio == "type2" && i<10){
        res = textareaCode.replace(regexp,"0"+i);
      }else{
        res = textareaCode.replace(regexp,i);        
      }
      
      if(cast1[eq] != undefined){
        res = res.replace(regexp1,cast1[eq]);        
      }
      if(cast2[eq] != undefined){
        res = res.replace(regexp2,cast2[eq]);        
      }
      if(cast3[eq] != undefined){
        res = res.replace(regexp3,cast3[eq]);        
      }
      if(cast4[eq] != undefined){
        res = res.replace(regexp4,cast4[eq]);        
      }
      if(cast5[eq] != undefined){
        res = res.replace(regexp5,cast5[eq]);        
      }

      eq++;
      result += res+'\n';
    };

    $("#result textarea").val(result);

  }
  
  // 結果を全選択
  $("#result textarea").on("click",function(){
    $(this).select();
  });

});
