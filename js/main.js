
$(document).ready(function () {

    // burger-menu --------------------- //
    $('.burger-btn').on('click', function () {
        $(this).toggleClass('active');
        $('.mobile-menu').toggleClass('active');
    });


    // logotypes carousel --------------------- //
    var swiper = new Swiper(".logotypes__carousel", {
        slidesPerView: "auto",
        spaceBetween: 16,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 0,
        },
    });

    // clients carousel --------------------- //
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

    //   parallax ---- //
    $(window).on("scroll", function () {
        let scrollPos = $(window).scrollTop();
        let scaleIndex = 1 + (scrollPos * 0.0005);

        $(".bg-image img").css("transform", `scaleX(${scaleIndex})`);
        $(".frame").css("transform", `translateY(-${scrollPos * 0.15}px)`);
    });


    //  advantages layout animation
    if ($(".advantages").length) {

        var cards = gsap.utils.toArray(".advantages__block");

        ScrollTrigger.create({
            trigger: cards[0],
            start: "center center"
        });

        var lastCardTrigger = ScrollTrigger.create({
            trigger: cards[cards.length - 1],
            start: "center center"
        });

        cards.forEach(function (card, index) {
            var scaleValue = 1 - 0.02 * (cards.length - index);

            var animation = gsap.to(card, {
                scale: scaleValue,
                "transform-origin": '50% ' + (- lastCardTrigger.start * 0.15)
            });

            ScrollTrigger.create({
                trigger: card,
                start: "center center",
                end: function () {
                    return lastCardTrigger.start + 0;
                },
                pin: true,
                pinSpacing: false,
                ease: "none",
                animation: animation,
                toggleActions: "restart none none reverse"
            });
        });
    }

});