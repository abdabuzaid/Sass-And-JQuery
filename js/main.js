$(function () {
    "use strict";

    // Local Storage
    let bgNavbar = localStorage.getItem('bg-navbar');

    if (bgNavbar !== null) {

        $(".navbar").css({
            backgroundColor: bgNavbar,
            borderBottom: "1px solid #121212"
        });

    }

    // Start navbar
    $(window).on("scroll", function () {

        if ($(this).scrollTop() >= 10) {

            $(".navbar").css({
                backgroundColor: "#121212",
                borderBottom: "1px solid #121212"
            });

            localStorage.setItem('bg-navbar', '#121212');

        } else {

            $('.navbar').css({
                backgroundColor: "transparent",
                borderBottom: "1px solid #5c5c5c"
            });
        }

        //Sync Links With Sections
        $(".sync").each(function () {

            if ($(window).scrollTop() > $(this).offset().top) {

                let div_id = $(this).attr("id");

                $(".navbar ul li a").removeClass("active");

                $(`.navbar ul li a[data-scroll = ${div_id}]`).addClass("active");
            }

        });

        // Scroll Button To Top
        if ($(this).scrollTop() >= 700) {

            $('.to-top').fadeIn(1000);

        } else {
            $('.to-top').fadeOut(1000);
        }

    });

    //Click Button To Top
    $('.to-top').on('click', function () {

        $("html, body").animate({

            scrollTop: 0

        }, 1000);

    });

    // click on link navbar
    $('.navbar ul li a').on("click", function (e) {

        $(this).addClass("active").parent().siblings("li").find('a').removeClass('active');

    });

    // click on link check my gellary and navbar
    $('header .content-header a, .navbar ul li a, .footer ul li a').on('click', function (e) {

        e.preventDefault();

        $("html, body").animate({

            scrollTop: $("." + $(this).data('link')).offset().top + 1

        }, 1000);

    });

});