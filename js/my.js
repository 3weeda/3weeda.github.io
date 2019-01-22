$(document).ready(function () {
    $('.nav .nav__list a').on('click', function () {
        $('.nav .nav__list').find('li.active').removeClass('active');
        $(this).parent('li').addClass('active');
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var objectPosition2 = $(".block0").offset().top - 100;
        var objectPosition3 = $(".block1").offset().top - 100;
        var objectPosition4 = $(".block2").offset().top - 100;
        var objectPosition5 = $(".block3").offset().top - 200;

        if (scroll < 550) {
            $('.nav .nav__list').find('li.active').removeClass('active');
            $('#homeee').addClass("active");
        }
        else if (scroll >= objectPosition2 && scroll < objectPosition3) {
            $('.nav .nav__list').find('li.active').removeClass('active');
            $('#about').addClass("active");
        }
        else if (scroll >= objectPosition3 && scroll < objectPosition4) {
            $('.nav .nav__list').find('li.active').removeClass('active');
            $('#expertise').addClass("active");
        }
        else if (scroll >= objectPosition4 && scroll < objectPosition5) {
            $('.nav .nav__list').find('li.active').removeClass('active');
            $('#projects').addClass("active");
        }
        else if (scroll >= objectPosition5) {
            $('.nav .nav__list').find('li.active').removeClass('active');
            $('#contact').addClass("active");
        }
    });
});

