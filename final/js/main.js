$( "document" ).ready(function() {
	$(".border").animate({ width: '249px', opacity: 1}, 800 );

	$("#name").animate({opacity: 1}, 800, function() {
  		$(".letters").animate({opacity: 1}, 2000);
  		$(".info").animate({opacity:1}, 1000,function(){
  			$(".scrollto1").animate({opacity:1}, 500);
  			$(".glyphicon-chevron-down").animate({opacity:1}, 300);
  			$(".scrollto1").animate({top:0}, 1000);
  		});
  	});

});
$("document").ready(function(){
	$('.front-cover').parallax({imageSrc: '../img/alprobate-reduced.png'});
	$('#rush').parallax({imageSrc:'../img/rush.jpg'});

})
var navbarLocation = $(".navbar").offset().top;
$(".navbar").css("position", "fixed");
$(".navbar").css("display", "none");

var scrolling = false;
$('.scrollto1').click(function() {
	scrolling = true;
	$('#two').ScrollTo({
	    duration: 1000,
	    onlyIfOutside: true
	}, function() {
		fixNavbar();
	});
});

$(window).scroll(function() {
		fixNavbar2();
});
$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
    if ($(".right-image").css("float") == "none" ){
        $("#pic3").insertBefore("#container-3");
    }
}

function fixNavbar() {
	var scrollFromTop = $(window).scrollTop();
	if (scrollFromTop >= navbarLocation) {
		$(".navbar").fadeIn(400);
	} else {
		$(".navbar").fadeOut(100);
	}
	scrolling = false;
}

function fixNavbar2() {
	var scrollFromTop = $(window).scrollTop();
	if (scrollFromTop >= navbarLocation) {
		$(".navbar").fadeIn(400);
	} else {
		$(".navbar").fadeOut(100);
	}
}

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
//Trigger when scroll to
$(window).scroll(function() {
   var hT = $('#page-three').offset().top,
       hH = $('#page-three').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $('#container3').animate({opacity:1},2000);
   }
});
$(window).scroll(function() {
   var hT = $('#page-four').offset().top,
       hH = $('#page-four').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $('#container4').animate({opacity:1},2000);
   }
});
$(window).scroll(function() {
   var hT = $('#page-five').offset().top,
       hH = $('#page-five').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $('#container5').animate({opacity:1},2000);
   }
});
$(window).scroll(function() {
   var hT = $('#page-six').offset().top,
       hH = $('#page-six').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $('#container6').animate({opacity:1},2000);
   }
});