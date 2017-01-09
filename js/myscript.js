/**
 * Created by veyrie_f on 09/01/17.
 */

var canScroll = true;

$('nav a').on('click', function() {
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