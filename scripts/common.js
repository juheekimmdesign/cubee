// common.js
const topBnr = document.querySelector('.top_bnr_swiper .top_bnr');
const gnb = document.querySelector('#gnb .gnb_depth1'); //gnb
const gnbBg = document.querySelector('#gnb .gnb_bg'); //gnbBg
const gnbDepth1 = document.querySelectorAll('#gnb .gnb_depth1 > li');
const gnbDepth2 = document.querySelectorAll('.depth2_container .depth2_wrap .gnb_depth2 > li');
const gnbDepth3 = document.querySelectorAll('.gnb_depth3 > li > a');
const like = document.querySelectorAll('.item_list .like');


console.log(topBnr, gnbDepth1[0], gnbDepth1[1], gnbDepth1[2], gnbDepth1[3]);
console.log(gnbDepth2, gnbDepth3, like);

for(let i of like){
    i.addEventListener('click', function(e){
        console.log('click확인');
        e.preventDefault();
        i.children[0].src = "./images/product/like_on.svg";
    })
}

// top배너 스와이퍼 슬라이드
const topBnrSwiper = new Swiper(topBnr, {
    effect:'fade',
    loop:true,
    autoplay:{delay:2000,},
});


// gnb_bg 효과 //1. gnb_bg 가리기 
gnbBg.style.display = 'none'
// 2. gnb_depth1에 마우스 올렸을때, gnb_bg 나타나기
for(let i=0; i<2; i++){
    gnbDepth1[i].addEventListener('mouseover', function(){
        gnbBg.style.display ='block'
    })
};
/* (2. for of 사용했을때)
for(let i of gnbDepth1){
    console.log(i);
    i.addEventListener('mouseover', function(){
        gnbBg.style.display ='block'
    })
}; */
//3. gnb_depth1에 마우스 나갔을때, gnb_bg 가리기
gnb.addEventListener('mouseout', function(){
    gnbBg.style.display = 'none'
});


// gnb_depth1에 마우스 올렸을때, 글자색 변경
for(let i=0; i<4; i++){
    gnbDepth1[i].children[0].addEventListener('mouseover', function(){
        console.log('마우스 올린 이벤트 확인');//확인완료
        gnbDepth1[i].children[0].style.color = '#1c4797'
    })
    gnbDepth1[i].children[0].addEventListener('mouseout', function(){
        gnbDepth1[i].children[0].style.color = '#1e1e1e'
    })
};



// gnb_depth2에 마우스 올렸을때, 글자색 변경
for (let i=0; i<9; i++){
    gnbDepth2[i].children[0].addEventListener('mouseover', function(){
        console.log('마우스 올린 이벤트 확인2');
        gnbDepth2[i].children[0].style.color = '#1c4797'
    })
    gnbDepth2[i].children[0].addEventListener('mouseout', function(){
        gnbDepth2[i].children[0].style.color = '#1e1e1e'
    })
}

// gnb_depth3에 마우스 올렸을때, 글자색 변경
for (let i=0; i<10; i++){
    gnbDepth3[i].addEventListener('mouseover', function(){
        console.log('마우스 올린 이벤트 확인3')
        gnbDepth3[i].style.color= '#1c4797'
    })
    gnbDepth3[i].addEventListener('mouseout', function(){
        console.log('마우스 올린 이벤트 확인3')
        gnbDepth3[i].style.color= '#1e1e1e'
    })
}

// 데스크톱 메뉴(gnb) 복제해서 모바일 메뉴 위치(tm_nav에 붙여넣기) 변수생성
const tmNav = document.querySelector('.tm_nav .tm_gnb ');
const tmLnb = document.querySelector('.tm_nav .tm_lnb')
const gnbUl = document.querySelector('#gnb .gnb_depth1')
const lnb = document.querySelector('.header_right .lnb')

console.log(tmNav, tmLnb, gnbUl, lnb);
// 특정 대상 복제 객채.cloneNode() 내장함수 사용
const gnbClone = gnbUl.cloneNode(true);
tmNav.appendChild(gnbClone);//자식 붙여넣기
const lnbClone = lnb.cloneNode(true);
tmLnb.appendChild(lnbClone);//자식 붙여넣기
console.log(gnbClone,lnbClone);



// 모바일 태블릿 nav 효과
const tmNavlist = document.querySelector('.header_right .tm_nav');
const tmMenuBtn = document.querySelector('.header_right .tm_menu');
const tmGnbBg = document.querySelector('.header_right .tm_gnb_bg');
const tmCloseBtn = document.querySelector('.tm_nav .gnb_close_btn');
const tmGnb = document.querySelector('.tm_nav .tm_gnb');

console.log(tmMenuBtn, tmGnbBg, tmCloseBtn);

// 햄버거 버튼 클릭
// ================================ 햄버거 버튼 클릭
tmMenuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    tmNavlist.style.display = 'flex';
    tmGnbBg.style.display = 'block';
});

// ================================ 닫기 버튼
tmCloseBtn.addEventListener('click', function(e) {
    e.preventDefault();
    tmNavClose();
});

// ================================ 배경 클릭시 닫기
tmGnbBg.addEventListener('click', function() {
    tmNavClose();
});

function tmNavClose() {
    console.log(tmNavlist, tmGnbBg);
    tmNavlist.style.display = 'none';
    tmGnbBg.style.display = 'none';
}

// ================================ depth1 클릭시 아코디언
const tmGnbLi = document.querySelectorAll('.tm_nav .tm_gnb .gnb_depth1 > li');
const tmDepth2 = document.querySelectorAll('.tm_nav .tm_gnb .depth2_container');

for(let i of tmDepth2){i.style.transition = 'height 0.3s'}

for (let li of tmGnbLi) {
    li.addEventListener('click', function() {
        const dep2 = li.querySelector('.depth2_container');
        if (!dep2) return;

        if (li.classList.contains('open')) {
            li.classList.remove('open');
            dep2.style.height = '0';
        } else {
            tmDepth2Hide();
            li.classList.add('open');
            dep2.style.height = `${dep2.scrollHeight}px`;
        }  
    })
}

function tmDepth2Hide() {
    for (let li of tmGnbLi) li.classList.remove('open');
    for (let dep2 of tmDepth2) dep2.style.height = '0';
}