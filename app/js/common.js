$(function() {

	$('.arrow.down').click(function () {
    $('html, body').animate({scrollTop: $('.world-changed').offset().top}, 500);
    return false;
  });

	$('.arrow.up').click(function () {
    $('html, body').animate({scrollTop: $('.main-head').offset().top}, 500);
    return false;
  });

  function come(elem) {
    var docViewTop = $(window).scrollTop(),
      docViewBottom = docViewTop + $(window).height(),
      elemTop = $(elem).offset().top,
      elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  $(window).scroll(function() {
    if($(this).scrollTop() > $(this).height()) {
      $(".arrow.up").addClass("active")
    } else {
      $(".arrow.up").removeClass("active")
    }
  });

});
