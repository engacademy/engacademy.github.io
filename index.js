 function rotate(x) {
    x.classList.toggle("rotate");
    $("#phonenavlinks").slideToggle("fast");
}

 $(window).scroll(function() {
  		if($(window).scrollTop() > 180) {
  			$("#navbar2").slideDown("fast");
  		} else {
  			$("#navbar2").slideUp("fast");
  		}
  });

$(document).ready(function() {
    $("#homenav").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: 0
                }, 800);
        return false;
    });
});

$(document).ready(function() {
    $("#phonelogo").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: 0
                }, 800);
        return false;
    });
});

 $(document).ready(function() {
    $("#aboutnav").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#story").offset().top - 30
                }, 800);
        return false;
    });
});

 $(document).ready(function() {
    $("#aboutnav2").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#story").offset().top - 30
                }, 800);
        return false;
    });
});

 $(document).ready(function() {
    $("#aboutnav3").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#story").offset().top - 30
                }, 800);
        return false;
    });
});

 $(document).ready(function() {
    $("#aboutnav4").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#story").offset().top - 30
                }, 800);
        return false;
    });
});

  $(document).ready(function() {
    $("#aboutnav4").click(function(event) {
         $("#phonenavlinks").slideToggle("fast");
         $(".plus").removeClass("rotate");
    });
});

  $(document).ready(function() {
    $("#teamnav3").click(function(event) {
         $("#phonenavlinks").slideToggle("fast");
         $(".plus").removeClass("rotate");
    });
});

  $(document).ready(function() {
    $("#worknav3").click(function(event) {
         $("#phonenavlinks").slideToggle("fast");
         $(".plus").removeClass("rotate");
    });
});

  $(document).ready(function() {
    $("#contactnav3").click(function(event) {
         $("#phonenavlinks").slideToggle("fast");
         $(".plus").removeClass("rotate");
    });
});

 $(document).ready(function() {
    $("#teamnav").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#team").offset().top - 30
                }, 800);
        return false;
    });
});

 $(document).ready(function() {
    $("#teamnav2").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#team").offset().top - 30
                }, 800);
        return false;
    });
});

 $(document).ready(function() {
    $("#teamnav3").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#team").offset().top - 30
                }, 800);
        return false;
    });
});

 $(document).ready(function() {
    $("#worknav").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#work").offset().top - 30
                }, 800);
        return false;
    });
});

 $(document).ready(function() {
    $("#worknav2").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#work").offset().top - 30
                }, 800);
        return false;
    });
});

 $(document).ready(function() {
    $("#worknav3").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#work").offset().top - 30
                }, 800);
        return false;
    });
});


 $(document).ready(function() {
    $("#contactnav").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#contact").offset().top - 30
                }, 800);
        return false;
    });
});

 $(document).ready(function() {
    $("#contactnav2").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#contact").offset().top - 30
                }, 800);
        return false;
    });
});


 $(document).ready(function() {
    $("#contactnav3").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#contact").offset().top - 30
                }, 800);
        return false;
    });
});


 $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos <= winTop + 600) {
          $(this).addClass("slideup");
        }
    });
  });

 $(window).scroll(function() {
    $(".slideanim2").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos <= winTop + 600) {
          $(this).addClass("slideleft");
        }
    });
  });

 $(window).scroll(function() {
    $(".slideanim3").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos <= winTop + 600) {
          $(this).addClass("slideright");
        }
    });
  });
