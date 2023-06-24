window.addEventListener('load', function() {
    var image = document.getElementById('cover');
    image.style.opacity = 1;
  });




  window.addEventListener('load', function() {
    var image = document.getElementById('profile');
    image.style.opacity = 1;
  });





  function isElementPartiallyInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
    var isTopVisible = rect.top < windowHeight && rect.bottom >= 0;
    var isLeftVisible = rect.left < windowWidth && rect.right >= 0;
  
    return isTopVisible && isLeftVisible;
  }
  
  function handleScroll() {
    var fadeIns = document.getElementsByClassName('fade-in');
  
    for (var i = 0; i < fadeIns.length; i++) {
      var div = fadeIns[i];
  
      if (isElementPartiallyInViewport(div)) {
        div.style.opacity = '1';
      } else {
        div.style.opacity = '0';
      }
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);