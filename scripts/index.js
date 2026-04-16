// index.js
const heroBnr = document.querySelector('.hero_bnr .hero');
const best = document.querySelector('.best_right .best_swiper');
const coming = document.querySelector ('.coming_wrap .coming_swiper');
const newslide = document.querySelector('.new_wrap .new_swiper');
const mdpick = document.querySelector('.mdpick_right .mdpick_swiper');
const artistSelect = document.querySelectorAll('.artist_right a img');
const artistMoreBtn = document.querySelector('.artist_left .more_btn');
const notiBtn = document.querySelector('.noti_btn .more_btn');
console.log( heroBnr, best , coming, newslide, mdpick, artistSelect[0],artistSelect[1],artistSelect[2], artistMoreBtn, notiBtn);




//artist 더보기Btn에 마우스 올렸을때 + 나갔을때 이벤트 설정 
artistMoreBtn.addEventListener('mouseover', function(){
    console.log('마우스 올린 이벤트 확인');
    artistMoreBtn.children[0].children[0].style.color = '#1c4797';
    artistMoreBtn.children[0].style.borderBottom= '1px solid #1c4797';
    artistMoreBtn.children[0].children[1].src = "./images/product/more_active.svg"
});
artistMoreBtn.addEventListener('mouseout', function(){
    artistMoreBtn.children[0].children[0].style.color = '#1e1e1e';
    artistMoreBtn.children[0].style.borderBottom= '1px solid #1e1e1e';
    artistMoreBtn.children[0].children[1].src = "./images/product/more_btn.svg"
});
/* 
artistMoreBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log('클릭확인');
    artistMoreBtn.children[0].style.color = '#1c4797';
    artistMoreBtn.children[0].children[1].src = "./images/product/more_active.svg"
}) */

//comingsoon 오픈알림받기Btn에 마우스 올렸을때 + 나갔을때 이벤트 설정 
notiBtn.addEventListener('mouseover', function(){
    console.log('마우스 올린 이벤트 확인');
    notiBtn.children[0].children[0].style.color = '#1c4797';
    notiBtn.children[0].style.border= '1px solid #1c4797';
    notiBtn.children[0].children[1].src = "./images/product/more_active.svg"
});
notiBtn.addEventListener('mouseout', function(){
    console.log('마우스 올린 이벤트 확인');
    notiBtn.children[0].children[0].style.color = '#1e1e1e';
    notiBtn.children[0].style.border= '1px solid #ddd';
    notiBtn.children[0].children[1].src = "./images/product/more_btn.svg"
});

//artist_right 아티스트 product_list로가는 btn 마우스 올렸을때, 나갔을 때 이벤트 설정 
artistSelect[0].addEventListener('mouseover',function(){
    artistSelect[0].src = './images/product/artist_04.jpg';
});
artistSelect[0].addEventListener('mouseout',function(){
    artistSelect[0].src = './images/product/artist_01.jpg';
});

artistSelect[1].addEventListener('mouseover',function(){
    artistSelect[1].src = './images/product/artist_05.jpg';
});
artistSelect[1].addEventListener('mouseout',function(){
    artistSelect[1].src = './images/product/artist_02.jpg';
});

artistSelect[2].addEventListener('mouseover',function(){
    artistSelect[2].src = './images/product/artist_06.jpg';
});
artistSelect[2].addEventListener('mouseout',function(){
    artistSelect[2].src = './images/product/artist_03.jpg';
});


const bestSwiper = new Swiper(best, {
    slidesPerView: 4,
    spaceBetween: 20,
})
const heroBnrSwiper = new Swiper(heroBnr, {
    loop: true,
    scrollbar:{
        el:'.hero .scroll',
    },
    pagination:{
        el:'.hero .page',
        type:'fraction',
        renderFraction:function(current, total){
            console.log(current, total);
            let customPage = `<span class=${current}></span>`;
            customPage += `<span></span>`;
            customPage += `<span class=${total}></span>`;
            return customPage;
        },
    },
    navigation:{
        prevEl:'.hero .prev',
        nextEl:'.hero .next',
    },
})
const comingSwiper = new Swiper(coming, {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
        el :'.coming_wrap .page',
        type:'fraction',
        renderFraction:function(current, total){
            console.log(current, total);
            let customPage = `<span class=${current}></span>`;
            customPage += `<span></span>`;
            customPage += `<span class=${total}></span>`;
            return customPage;
        }
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
        renderFraction:function(current, total){
            console.log(current, total);
            let customPage = `<span class=${current}></span>`;
            customPage += `<span></span>`;
            customPage += `<span class=${total}></span>`;
            return customPage;
        }
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