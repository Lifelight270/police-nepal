
$(document).ready(function(){
    $(".slideImg").owlCarousel({
      items:1,
      loop:true,
      nav:true,
      autoplay:true,
      autoplayTimeout:10000,

       
    })
    $(".slide-box").owlCarousel({
        
        loop:true,
        autoplay:true,
        margin:20,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }

    });
    $(".card-slide").owlCarousel({
        items:3,
        loop:true,
        autoplay:true,
        margin:60,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            },
            1200:{
                itmes:3
            },
        }
    });
    });
