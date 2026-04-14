// index.js
const heroBnr = document.querySelector('.hero_bnr .hero');
const best = document.querySelector('.best_right .best_swiper');
const coming = document.querySelector ('.coming_wrap .coming_swiper');
const newslide = document.querySelector('.new_wrap .new_swiper');
const mdpick = document.querySelector('.mdpick_right .mdpick_swiper');
console.log( heroBnr, best , coming, newslide, mdpick);


const bestSwiper = new Swiper(best, {
    slidesPerView: 4,
    spaceBetween: 20,
})
const heroBnrSwiper = new Swiper(heroBnr, {
    loop: true,
    pagination:{
        el:'.hero .page',
        type:'fraction',
        renderFraction:function(current, total){
            console.log(current, total);
            let customPage = `<span class=${current}</span>`;
            customPage += `<span></span>`
            customPage += `<span class=${total}></span>`;
            return customPage;
        },
    },
    navigation:{
        prevEl:'.hero .prev',
        nextEl:'.hero .next',
    },
    scrollbar:{
        el:'.hero .scroll',
    },
})
const comingSwiper = new Swiper(coming, {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
        el :'.coming_wrap .page',
        type:'fraction',
    },
    navigation:{
        prevEl:'.coming_wrap .prev',
        nextEl:'.coming_wrap .next',
    },
    scrollbar:{
        el:'.coming_wrap .scroll'
    },
})
const newSwiper = new Swiper(newslide, {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    pagination:{
        el : '.new_wrap .page',
        type:'fraction',
    },
    scrollbar:{
        el:'.new_wrap .scroll'
    },
})
const mdpickSwiper = new Swiper(mdpick, {
    loop:true,
    slidesPerView: 4,
    spaceBetween: 20,

})