const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,

    autoplay: {
        delay: 2000,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});