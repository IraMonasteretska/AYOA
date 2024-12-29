
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

});