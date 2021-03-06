$(document).ready(function(){
    $('.menu li:has(ul)').click(function(e){
        e.preventDefault();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).children('ul').slideUp();
        } else {
            $('.menu li ul').slideUp();
            $('.menu li').removeClass('active');
            $(this).addClass('active');
            $(this).children('ul').slideDown();
        }
    });

    $('.btn-menu').click(function(){
        $('.container-menu .menu').slideToggle();
    });

    $(window).resize(function(){
        if ($(document).width() > 450){
            $('.container-menu .menu').css({'display' : 'block'});
        }

        if ($(document).width() < 450){
            $('.container-menu .menu').css({'display' : 'none'});
            $('.menu li ul').slideUp();
            $('.menu li').removeClass('active');
        }
    });
});