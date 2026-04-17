// index.js
const heroBnr = document.querySelector('.hero_bnr .hero');//herobnr siwper생성 전 선택변수
//swiper 생성전 선택변수
const best = document.querySelector('.best_right .best_swiper');
const coming = document.querySelector ('.coming_wrap .coming_swiper');
const newslide = document.querySelector('.new_wrap .new_swiper');
const mdpick = document.querySelector('.mdpick_right .mdpick_swiper');
//tab 선택 변수
const artistSelect = document.querySelectorAll('.artist_right a img');//artist 상품분류탭(아티스트별) 선택변수
const artistMoreBtn = document.querySelector('.artist_left .more_btn');//artist 더보기탭 선택변수
const notiBtn = document.querySelector('.noti_btn .more_btn');//new 오픈알림받기탭 선택변수
const bestTab = document.querySelectorAll('.best_left .contents_wrap .tab_menu li');//best 상품분류탭(아티스트별) 선택변수
const productTab = document.querySelectorAll('.product_left .contents_wrap .tab_menu > li');//product 상품분류탭(아이템종류별) 선택변수
const productMoreTab = document.querySelector('.product_left .more_btn');//product 더보기탭 선택변수
const mdTab = document.querySelectorAll('.mdpick_left .tab_menu li');//mdpick 상품분류탭(아티스트별) 선택변수
const mdMoreTab =document.querySelector('.mdpick_left .more_btn');//mdpick 더보기탭 선택변수
//console확인//
console.log( heroBnr, best , coming, newslide, mdpick, );
console.log('------------------------------------------');
console.log( artistSelect[0],artistSelect[1],artistSelect[2], artistMoreBtn, notiBtn);
console.log('------------------------------------------');
console.log(bestTab, productTab, productMoreTab, mdTab);

//mbpPcik 더보기Tab 버튼 마우스 올렸을때, 나갔을 때 이벤트
mdMoreTab.addEventListener('mouseover', function(){
    console.log('마우스 올린 이벤트 확인');
    mdMoreTab.children[0].children[0].style.color = '#1c4797';
    mdMoreTab.children[0].style.border= '1px solid #1c4797';
    mdMoreTab.children[0].children[1].src = "./images/product/product_more_down.svg"
})
mdMoreTab.addEventListener('mouseout', function(){
    mdMoreTab.children[0].children[0].style.color = '#1E1E1E';
    mdMoreTab.children[0].style.border= '1px solid #DDDDDD';
    mdMoreTab.children[0].children[1].src = "./images/product/product_more.svg"
})

//mdPick Tab 마우스 올렸을때 나갔을때 이벤트
for(let i of mdTab){
    console.log(i);
    i.addEventListener('mouseover', function(){
        console.log('마우스올린확인');
        i.children[0].children[0].style.color = '#1c4797';
        i.children[0].style.borderBottom ='1px solid #1c4797';
        i.children[0].children[1].style.display = 'block';
    })
    i.addEventListener('mouseout', function(){
        i.children[0].children[0].style.color = '#aaa';
        i.children[0].style.borderBottom ='1px solid #f9f9f9';
        i.children[0].children[1].style.display = 'none';
    })
}


//pruduct 더보기Tab 버튼 마우스 올렸을때, 나갔을 때 이벤트
productMoreTab.addEventListener('mouseover', function(){
    console.log('마우스 올린 이벤트 확인');
    productMoreTab.children[0].children[0].style.color = '#1c4797';
    productMoreTab.children[0].style.border= '1px solid #1c4797';
    productMoreTab.children[0].children[1].src = "./images/product/product_more_down.svg"
})
productMoreTab.addEventListener('mouseout', function(){
    productMoreTab.children[0].children[0].style.color = '#1E1E1E';
    productMoreTab.children[0].style.border= '1px solid #DDDDDD';
    productMoreTab.children[0].children[1].src = "./images/product/product_more.svg"
})
// productTab 마우스 올렸을때 나갔을 때 이벤트
for(let i of productTab){
    console.log(i);
    i.addEventListener('mouseover', function(){
        console.log('마우스올린확인');
        i.children[0].children[0].style.color = '#1c4797';
        i.children[0].style.borderBottom ='1px solid #1c4797';
        i.children[0].children[1].style.display = 'block';
    })
    i.addEventListener('mouseout', function(){
        i.children[0].children[0].style.color = '#aaa';
        i.children[0].style.borderBottom ='1px solid #f9f9f9';
        i.children[0].children[1].style.display = 'none';
    })
}

// bestTab 마우스 올렸을때 나갔을 때 이벤트
for(let i of bestTab){
    console.log(i);
    i.addEventListener('mouseover', function(){
        console.log('마우스올린확인');
        i.children[0].children[0].style.color = '#1c4797';
        i.children[0].style.borderBottom ='1px solid #1c4797';
        i.children[0].children[1].style.display = 'block';
    })
    i.addEventListener('mouseout', function(){
        i.children[0].children[0].style.color = '#aaa';
        i.children[0].style.borderBottom ='1px solid #f9f9f9';
        i.children[0].children[1].style.display = 'none';
    })
}

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

//상품 목록 swiper생성
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