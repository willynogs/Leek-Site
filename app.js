$(function(){
  /*
  var about = new OriDomi('.about');
  var events = new OriDomi('.events');
  var media = new OriDomi('.media');
  var booking = new OriDomi('.booking');
  */
  rectDimensions();

  $('.content').hover(function() {
    $(this > "span").hide();
  }, function() {

  });
});

function rectDimensions () {
  var vpw = $(window).width();
  var vph = $(window).height();
  var actualVph = (vph - 90) / 2;
  $('.content').css({
    "height": actualVph + "px"
  });
}
