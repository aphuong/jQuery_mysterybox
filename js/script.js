$(document).ready(function(){

  $(".box_open").hide();
  $(".butterflies").hide();
  $(".step2").hide();
  $(".step3").hide();
  $(".hint").hide();
  $(".step4").hide();
  
  $(".box_close").click(function(){
    $(".box_close").fadeOut(1000, function(){
      $(".box_close").fadeIn(1000);
      $(".step1").hide();
      $(".step2").fadeIn(2000, function(){
        $(".step3").fadeIn(1000);
      });
    });
  });

  $(".box_close").dblclick(function(){
    $(".box_close").slideToggle(function(){
      sway();
      $(".step2").remove();
      $(".step3").remove();
      $(".hint").fadeIn(4000);
    });
  });

  function sway(){
    $(".box_close").animate({
        left: "400px"
      }, 2000, function(){
        $(".box_close").animate({
        left: "0px"
      }, 2000, function() {
        sway();
          $(".box_close").hover(function(){
            $(".step4").fadeIn(4000);
          })
        });
      });
    }

  $(document).keydown(function(event) {
    if (event.which == 88) {
      event.preventDefault();
      $(".box_close").keypress();
      $(".box_close").remove();
      $(".hint").remove();
      $(".box_open").fadeIn();
      $(".step4").replaceWith("<h4>Butterflies!!!</h4>");
      $(".butterflies").show();
    }
  })
 
});





