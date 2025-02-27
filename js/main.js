
$(document).ready(function () {

    // accordion info section 
     if ($(".info .more-btn").length) {
        $('.more-btn').on('click', function () {
            $(this).toggleClass('open');
            $('.hidden-text').slideToggle(700);
        });
    }
    // scroll to video poster
    var lastScrollTop = 0;

    $(".poster").on("click", function () {
        lastScrollTop = $(window).scrollTop();
    });

    $(document).on("click", "#fancybox-close", function () {
        setTimeout(function () {
            $("html, body").scrollTop(lastScrollTop);
        }, 500);
    });
    // burger-menu 
    if ($(".burger-btn").length) {
        $('.burger-btn').on('click', function () {
            $(this).toggleClass('active');
            $('.mobile-menu').toggleClass('active');
            $('body').toggleClass('hidden');
        });

        $('.mobile__button').on('click', function () {
            $('.mobile-menu').removeClass('active');
            $('body').removeClass('hidden');
        });

    }

    // mobile language 
    if ($(".mobile__lang").length) {
        $('.mobile__lang').on('click', function () {
            $('.mobile__lang ul').slideToggle();
        });
    }


    // logotypes carousel 
    if ($(".logotypes__carousel").length) {
        var swiper = new Swiper(".logotypes__carousel", {
            slidesPerView: "auto",
            spaceBetween: 16,
            loop: true,
            speed: 3000,
            autoplay: {
                delay: 0,
            },
        });
    }

    // clients carousel
    if ($(".clients__carousel").length) {
        var swiper = new Swiper(".clients__carousel", {
            slidesPerView: 4,
            loop: true,
            speed: 1500,
            autoplay: {
                delay: 800,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
        });
    }

    //   parallax 
    if ($(".bg-image").length) {
        $(window).on("scroll", function () {
            let scrollPos = $(window).scrollTop();
            let scaleIndex = 1 + (scrollPos * 0.0002);

            $(".bg-image img").css("transform", `scaleX(${scaleIndex})`);
            $(".frame").css("transform", `translateY(-${scrollPos * 0.25}px)`);
        });
    }


    //  advantages layout animation
    // if ($(".advantages").length) {

    //     var cards = gsap.utils.toArray(".advantages__block");

    //     ScrollTrigger.create({
    //         trigger: cards[0],
    //         start: "center center"
    //     });

    //     var lastCardTrigger = ScrollTrigger.create({
    //         trigger: cards[cards.length - 1],
    //         start: "center center"
    //     });

    //     cards.forEach(function (card, index) {
    //         var scaleValue = 1 - 0.02 * (cards.length - index);

    //         var animation = gsap.to(card, {
    //             scale: scaleValue,
    //             "transform-origin": '50% ' + (- lastCardTrigger.start * 0.15)
    //         });

    //         ScrollTrigger.create({
    //             trigger: card,
    //             start: "center center",
    //             end: function () {
    //                 return lastCardTrigger.start + 0;
    //             },
    //             pin: true,
    //             pinSpacing: false,
    //             ease: "none",
    //             animation: animation,
    //             toggleActions: "restart none none reverse"
    //         });
    //     });
    // }


    //  ways layout animation
    if ($(".ways").length) {

        var blocks = gsap.utils.toArray(".ways__block");

        ScrollTrigger.create({
            trigger: blocks[0],
            start: "center center"
        });

        var lastBlockTrigger = ScrollTrigger.create({
            trigger: blocks[blocks.length - 1],
            start: "center center"
        });

        blocks.forEach(function (block, index) {
            var scaleValue = 0.97;

            var animation = gsap.to(block, {
                scale: scaleValue,
                "transform-origin": '50% ' + "0%"
            });

            ScrollTrigger.create({
                trigger: block,
                start: "center center",
                end: function () {
                    return lastBlockTrigger.start + 0;
                },
                pin: true,
                pinSpacing: false,
                ease: "none",
                animation: animation,
                toggleActions: "restart none none reverse"
            });
        });
    }

    // AOS 
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out'
    });

});