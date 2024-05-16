$(document).ready(function () {
  var menu = $(".navbar");
  var origOffsetY = menu.offset().top;

  function scroll() {
    if ($(window).scrollTop() >= origOffsetY) {
      menu.addClass("fixed-top");
    } else {
      menu.removeClass("fixed-top");
    }
  }

  $(document).scroll(scroll);
});
