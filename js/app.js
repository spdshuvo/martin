$(function (){
    //sticky nav
    $(window).on('scroll',function(){
        if($(window).scrollTop()>0){
            $('#navber').addClass('stickyNav')
        } else{
            $('#navber').removeClass('stickyNav')
        }
    })
    //Back to top button
    $(window).on('scroll',function(){
        if($(window).scrollTop()>600){
            $('.backtoTop').fadeIn('slow')
        }else{
            $('.backtoTop').fadeOut('slow')
        }
    })
    $('.backtoTop').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },1000)
    })
    //smooth scroll
    $('a').on('click',function(e){
        e.preventDefault()
        
        if(this.hash !==''){
            var hash = this.hash

            $('html,body').animate({
                scrollTop: $(hash).offset().top - 71
            },1000)
        }
    })
    //preloader
    $(window).on('load', function(){
        $('#preloader').fadeOut(3000)
    })
    //slick active 
    $(".banner_content").slick({
        autoplay:'true',
        autoplaySpeed:'3000',
        arrows:'false',

    })
    //venobox activtion
    $('.portfolio_img_link').venobox({
        framewidth : '700px',
        frameheight: '700px',
        spinner:'wave',
    })
    
})