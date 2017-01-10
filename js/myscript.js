/**
 * Created by veyrie_f on 09/01/17.
 */

var canScroll = true;

$('a[data-scroll]').on('click', function() {
    if (!canScroll)
        return false;

    canScroll = false;
    // console.log($(this).attr('data-scroll'));

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 100;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500, "swing", function () {
        canScroll = true;
    });

    return false;
});

/** navbar update **/
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('nav').addClass('fixed');
        $('.wrapper section').each(function (i) {
            if ($(this).position().top <= windscroll + 100) {
                $('nav.subnav ul li.active').removeClass('active');
                $('nav.subnav ul li').eq(i).addClass('active');
            }
        });

    } else {

        $('nav').removeClass('fixed');
        $('nav.subnav ul li.active').removeClass('active');
        $('nav.subnav ul li:first').addClass('active');
    }
}).scroll();

/** Image pop up **/
$(function() {
    $('.pop').on('click', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');
    });
});

/** fade in anim **/
$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.fade-in').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity': '1'}, 0);
                $(this).css('transform', 'translateX(0px)');
                $(this).css('-webkit-transform', 'translateX(0px)');
            }

        });

    });

});