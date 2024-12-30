
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

    //   parallax ---- //
    $(window).on("scroll", function () {
        let scrollPos = $(window).scrollTop();
        let scaleIndex = 1 + (scrollPos * 0.0005);

        $(".bg-image img").css("transform", `scaleX(${scaleIndex})`);
        $(".frame").css("transform", `translateY(-${scrollPos * 0.15}px)`);
    });



    if ($(".advantages").length) {


        var cards = gsap.utils.toArray(".advantages__block");

        // Створення ScrollTrigger для першої картки
        ScrollTrigger.create({
            trigger: cards[0],
            start: "center center"
        });

        // Створення ScrollTrigger для останньої картки
        var lastCardTrigger = ScrollTrigger.create({
            trigger: cards[cards.length - 1],
            start: "center center"
        });

        // Перебір усіх карток для створення анімації
        cards.forEach(function (card, index) {
            // Обчислення масштабу залежно від індексу картки
            var scaleValue = 1 - 0.02 * (cards.length - index);

            // Створення анімації масштабування
            var animation = gsap.to(card, {
                scale: scaleValue,
                "transform-origin": '50% ' + (- lastCardTrigger.start * 0.15)
                });

        // Створення ScrollTrigger для кожної картки
        ScrollTrigger.create({
            trigger: card,
            start: "center center",
            end: function () {
                return lastCardTrigger.start + 0;
            },
            pin: true,
            pinSpacing: false,
            // ease: "none",
            animation: animation,
            toggleActions: "restart none none reverse"
        });
    });
        }

});