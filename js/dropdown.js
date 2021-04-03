$(document).ready(function(){
  $(window).click(function(event){
    $('.dropdown-content').removeClass('show');
  });

  var flag_img={
    en: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAAjUlEQVQoU2M004h/cY1XR5yRjYXh/68/DNjompOFDDjAMUYe0+7/u2YnMsS1XmFYVK2DlT41zwKr/inzljIw8lr3/xeXMsSpmYWLjWHLsTCsBqy9/4RhOLkA5Nc/334xYKPxhkHTxLn/c5KicUUTXnFwLHSyMPwPVpQhywBwLFDDBUcZGBisyHICA8NxAHf1hEyWpj+2AAAAAElFTkSuQmCC',
    es: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAA9ElEQVQ4T2PsY2Y48p+BwZqBPHCMsZeZ4X+RjiZZ2vuuXGeg3IBTDQz/TUMswS64fvMPw8//ggzP3oky8HD+ZuDi+M0gIfiRQUbiO1YXnl5znIER2QCG/wwMB3ZbMqjNWsPAuvcQw4Nr+xhMpJYxMP7/SpwBF26JMYgZtDHw33nI8DEvg+Hb6uUM3x4tYtCTv0ScAYcuyDAomFUxnN63muHfg/sMkrYhDF+frmJwt3pEnAE/frIwvPjtznDm+DkGUREWBmV1DQYJjsMMLEw/iDMApurPHyYGFpZ/BKMWHIgDnw56mRmOMjAwWBF0LxYFjAwMxwHj5XGr1M6PtQAAAABJRU5ErkJggg==',
    zh: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAABCUlEQVQ4T62SPU7DQBCFvx2b2MiItQsENNwmAoSQ6KHhBlwEcQloASHRQEPNBaip+CsCUTBxnN1FXsVWiig/iCdNs9r95s28VfeBvPSs3eAPSkTe1JXC7aUZQ+co1xzyAUsoLPizUClfk3T72cEDdnRK1xjisxb5zZDowSFKsXweURwVxCLTAe1MMzgJ0MctTNfROx0QXlqMdf5hJDLRReOgvarpbFk2rxOKZ8PXwQ+ZhJTOEU1x0QC2dUq5r8ifDEGqiJUgj9YD5nKwq1PMaMpqcbYqYOUinm8HVQq1+tZ62/lhn2CUwMwUxgGVg1nx1c2aHYwDFvlP/wO4C+T129r1RTrXdxOR919kd4kyT7xXQgAAAABJRU5ErkJggg=='
  };
  var createLanguageMenu=function(){
    var langContainers = $('.language-menu');
    for(var index=0; index<langContainers.length; index++){
      var container = langContainers[index];
      var lang = $(container).attr('lang');
      var url = $(container).attr('post-url');

      var lang_pattern;
      if(lang=="en"){
        lang_pattern = '/$';
      }
      else{
        lang_pattern = '-'+lang+'/$';
      } 
      var lang_exp = new RegExp(lang_pattern);
      var url_en = url.replace(lang_exp, '/');
      var url_es = url.replace(lang_exp, '-es/');
      var url_zh = url.replace(lang_exp, '-zh/');
      var menu_id = 'language-menu-'+index;

      var menuHtml=
        '<button class="dropdown-button" id="'+menu_id+'">'
          +'<img src="'+flag_img[lang]+'" />'
        +'</button>'
        +'<div for="'+menu_id+'" class="dropdown-content">'
          +'<a href="'+url_en+'"><img src="'+flag_img['en']+'" /></a>'
          +'<a href="'+url_es+'"><img src="'+flag_img['es']+'" /></a>'
          +'<a href="'+url_zh+'"><img src="'+flag_img['zh']+'" /></a>'
        +'</div>';
      $(container).append(menuHtml);
    }

    $('.language-menu .dropdown-button').click(function(){
      var menu_id=$(this).attr('id');
      console.log($('.dropdown-content[for='+menu_id+']'));
      $('.dropdown-content[for='+menu_id+']').toggleClass("show");
      return false;
    });
  };

  createLanguageMenu();
});
