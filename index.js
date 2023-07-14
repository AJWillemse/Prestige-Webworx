$(window).on('load', function() {
  var image = $('#cover');
  image.css('opacity', 1);
});




  $(window).on('load', function() {
    var image = $('#profile');
    image.css('opacity', 1);
  });




  $(document).ready(function() {
    $('#downArrows').css('opacity', 1);
  });





  function isElementPartiallyInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
  
    var isTopVisible = rect.top < windowHeight && rect.bottom >= 0;
    var isLeftVisible = rect.left < windowWidth && rect.right >= 0;
  
    return isTopVisible && isLeftVisible;
  }
  
  function handleScroll() {
    var fadeIns = $('.fade-in');
  
    fadeIns.each(function(index, element) {
      var div = $(element);
  
      if (isElementPartiallyInViewport(element)) {
        div.css('opacity', '1');
      } else {
        div.css('opacity', '0');
      }
    });
  }
  
  $(window).on('scroll', handleScroll);
  $(window).on('resize', handleScroll);