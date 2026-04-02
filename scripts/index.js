// index.js
const topBnr = document.querySelector('.top_bnr_swiper .top_bnr')
const topBnrSwiper = new Swiper(topBnr, {
    effect:'fade',
    loop:true,
    autoplay:{delay:5000,},
})
console.log(topBnr);