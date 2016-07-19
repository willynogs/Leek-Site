$(function(){
  /*
  var about = new OriDomi('.about');
  var events = new OriDomi('.events');
  var media = new OriDomi('.media');
  var booking = new OriDomi('.booking');
  */
  rectDimensions();
  /*
  $('.fa-twitter').click(function(){
    $('.content').addClass('content-animate');
  });
  */
  /*
  $('.content').hover(function(){
    $(this).animate({
      "background-size": "110%"
    }, 2000, "linear");
  }, function(){
    $(this).animate({
      "background-size": "100%"
    }, 2000, "linear");
  });
  */
});

function rectDimensions () {
  var vpw = $(window).width();
  var vph = $(window).height();
  var actualVph = (vph - 90) / 2;
  $('.content').css({
    "height": actualVph + "px"
  });
}
