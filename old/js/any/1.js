$(function(){


  $('p').children().andSelf().contents().each(function() {
      if (this.nodeType == 3) {
          $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
      }
  });

  var num = 0;
  var time = 10;
  var loop;
  var max = $('p span').length;

  function dup(){
    loop = setTimeout(function(){
      $('p span').eq(num).addClass("show");
      num ++;
      if(num < max){
        dup();
      }

    },time);

  }
  dup(); 


});
