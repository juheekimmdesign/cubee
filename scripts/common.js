// common.js
const topBnr = document.querySelector('.top_bnr_swiper .top_bnr')
console.log(topBnr);

const topBnrSwiper = new Swiper(topBnr, {
    effect:'fade',
    loop:true,
    autoplay:{delay:2000,},
})
