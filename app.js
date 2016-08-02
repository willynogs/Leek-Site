$(function(){
  //skrollr initialization
  var s = skrollr.init();

  // smooth scroll initialization
  $('body').smoothScroll({
        delegateSelector: 'a',
        speed: 1500,
        afterScroll: function(){
          console.log('WORKING');
        }
  });
});
