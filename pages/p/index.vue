<template>
<div class="">
  <h1>
    &lt;p&gt;tag maker
  </h1>
  <div class="columns">
    <div class="column">
      <textarea v-model="before"></textarea>
    </div>
    <div class="column">
      <textarea v-model="after"></textarea>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      before: '',
      after: ''
    };
  },
  methods: {},
  watch: {
    before: function(_text) {
      let textareaCode = _text;
      textareaCode = textareaCode.replace(/\n/g, '</p>\n<p>');
      textareaCode = textareaCode.replace(/^/g, '<p>');
      textareaCode = textareaCode.replace(/$/g, '</p>');
      textareaCode = textareaCode.replace(/<p><\/p>/g, '');
      this.after = textareaCode;
    }
  },
}


//
// if($(".regexp")){
//   $("#before textarea").on("change keyup",wrapper);
// }
//
// // Pタグで包む
// function wrapper(){
//   var textareaCode = $("#before textarea").val();
//   if(textareaCode != " "){
//     var res = textareaCode.replace(/\n/g,'</p>\n<p>');
//     textareaCode = res;
//     var res = textareaCode.replace(/^/g,'<p>');
//     textareaCode = res;
//     var res = textareaCode.replace(/$/g,'</p>');
//     textareaCode = res;
//     var res = textareaCode.replace(/<p><\/p>/g,'');
//     $("#after textarea").attr("disabled",false).text(res);
//   }else{
//     $("#after textarea").attr("disabled","disabled").text(res);
//   }
// }
//
// // 結果を全選択
// $("#after textarea").on("click",function(){
//   $(this).select();
// });
</script>

<style>

</style>
