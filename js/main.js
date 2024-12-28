
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
        speed: 1100,
        autoplay: {
            delay: 1000
          },
      });

});