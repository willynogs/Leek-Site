$(function(){
  $('.about').click(function(){
    if($('#about').hasClass('before-animate')){
      $('#about').removeClass('before-animate');
      $('#about').addClass('animate-frame');
    } else {
      $('#about').removeClass('animate-frame');
      $('#about').addClass('before-animate');
    }
  });
});
