$(document).ready(function(){

  // global variables left and top finds the position of object 
  // parseInt returns the value as a number, without the px
  var left = parseInt($(".blue_butterfly").css("left"), 10)
  var top = parseInt($(".blue_butterfly").css("top"), 10)
  var new_value

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
      $(".box_open").show();
      $(".step4").replaceWith("<h4>Surprise, they're butterflies!</h4>");
      $(".butterflies").fadeIn("slow");
      $(".blue_butterfly").show();
      $(".step5").show();
    }
  })

  // Down
  $(document).keydown(function(event){
    if (event.which == 40) {
      event.preventDefault();
      
      new_value = top + 40
      top = new_value

      console.log("down arrow");
      $(".blue_butterfly").css("top", new_value + "px")
    }
  });

  // Up
  $(document).keydown(function(event){
    if (event.which == 38) {
      event.preventDefault();

      new_value = top - 40
      top = new_value

      console.log("up arrow");
      $(".blue_butterfly").css("top", new_value + "px")
    }
  });

  // Left
  $(document).keydown(function(event){
    if (event.which == 37) {
      event.preventDefault();

      new_value = left - 40
      left = new_value

      console.log("left arrow");
      $(".blue_butterfly").css("left", new_value + "px")
    }
  });

  // Right
  $(document).keydown(function(event){
    if (event.which == 39) {
      event.preventDefault();

      new_value = left + 40
      left = new_value

      console.log("right arrow");
      $(".blue_butterfly").css("left", new_value + "px")
    }
  });
});


  // function getPosition(){
  //   console.log $(".blue_butterfly").left;
  // }

  // getPosition();
 // keydown functions for each of the arrow keys
    // test that they are working with console log

  // function that moves the butterfly
    // the butterfly starts in position fixed
    // maybe the butterfly starts at top 50% and left 50%
    // if left key is pressed
    // find the current left position
    // subtract 50px
    // set that as the new position left
    // use css transform translate to animate 








