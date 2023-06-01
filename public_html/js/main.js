
$(document).ready(function () {

    function animation() {
        let windowHeight = $(window).height();
        let scroll = $(window).scrollTop();

        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay'); //ovo je ako imamo kasnjenje animacije

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }

        });
    }

    $(window).scroll(function () {
        animation();
    });

    //poziv funkcije
    animation();

    
    //OWL CAROUSEL
    
    //team slider
    
    if($('.team-members-slider').length > 0){
        $('.team-members-slider').owlCarousel({
            
            loop:true,
            autoplay:true,
            responsive:{
                0:{
                    items:1,
                    margin:0
                },
                992:{
                    items:2,
                    margin:30
                }
            }
            
        });
    }

});

