
$("document").ready(function(){
	$('.top-cover').parallax({imageSrc: '../img/rush.jpg'});
  $('#footer-credit').parallax({imageSrc: '../img/rush.jpg'});
})

// HAMBURGLERv2

function togglescroll() {
  $('body').on('touchstart', function(e) {
    if ($('body').hasClass('noscroll')) {
      e.preventDefault();
    }
  });
}

$(document).ready(function() {
  togglescroll()
  $(".icon").click(function() {
    // $(".mobilenav").fadeToggle(500);
    if ($(".mobilenav").hasClass("active")) {
    	$(".mobilenav").removeClass("active");
		$(".mobilenav").animate({height: 0}, 500, function() {
			$(".mobilenav").css("display", "none");
		});
    } else {
    	$(".mobilenav").addClass("active");
    	$(".mobilenav").css("display", "block");
    	$(".mobilenav").animate({height: $(".mobilenav").get(0).scrollHeight}, 500);
    }
    $(".top-menu").toggleClass("top-animate");
    $("body").toggleClass("noscroll");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
  });
});

// PUSH ESC KEY TO EXIT

$(document).keydown(function(e) {
  if (e.keyCode == 27) {
    if ($(".mobilenav").hasClass("active")) {
    	$(".mobilenav").removeClass("active");
		$(".mobilenav").animate({height: 0}, 500, function() {
			$(".mobilenav").css("display", "none");
		});
    }
    $(".top-menu").removeClass("top-animate");
    $("body").removeClass("noscroll");
    $(".mid-menu").removeClass("mid-animate");
    $(".bottom-menu").removeClass("bottom-animate");
  }
});