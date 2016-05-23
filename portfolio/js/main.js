// $(document).ready(function(){
// 	new Vivus('#logo', {duration: 400, file: '../img/logo.svg'});
// })
$( "document" ).ready(function() {
  	$("#logo").animate({opacity: 1}, 1000,function(){
  		$(".scrollto1").animate({opacity:1}, 1000, function(){
  			$(".glyphicon-chevron-down").animate({opacity:1}, 300);
  			// $(".scrollto1").animate({top:0}, 2000);
  		})
  	})
});



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
var whiteNav = true;
$(window).scroll(function() {

      var hT = $('#three').offset().top,
         hH = $('#three').outerHeight(),
         wH = $(window).height(),
         wS = $(this).scrollTop();
    
     if (wS > (hT+hH-wH)){
        whiteNav = false;
         $(".navbar-brand").css({'color':'black'});
     } 
  });
$(window).scroll(function() {

      var hT = $('#two').offset().top,
         hH = $('#two').outerHeight(),
         wH = $(window).height(),
         wS = $(this).scrollTop();
    
     if (wS > (hT+hH-wH)){
         $(".navbar-brand").css({'color':'black'});
     } 
  });
// $(window).scroll(function(){
//   if(whiteNav == false){
//     var hT = $('#two').offset().top,
//          hH = $('#two').outerHeight(),
//          wH = $(window).height(),
//          wS = $(this).scrollTop();
    
//      if (wS > (hT+hH-wH)){
//         whiteNav = true;
//          $(".navbar-brand").css({'color':'white'});
//      }
//   }
// });
