$(document).ready(function(){
  $('.responsive').slick({
  		arrows: false,
  		autoplay: false,
  		dots: true,
        dotsClass: "dot",
        focusOnSelect: false,
        mobileFirst: true,
        responsive: [
        {
      breakpoint: 750,
      settings: {
      	autoplay: true      	
      }
    }
    ]
    });

});