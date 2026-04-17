// common.js
const topBnr = document.querySelector('.top_bnr_swiper .top_bnr');
const gnb = document.querySelector('#gnb .gnb_depth1'); //gnb
const gnbBg = document.querySelector('#gnb .gnb_bg'); //gnbBg
const gnbDepth1 = document.querySelectorAll('#gnb .gnb_depth1 > li');
console.log(topBnr, gnbDepth1[0], gnbDepth1[1], gnbDepth1[2], gnbDepth1[3]);
const gnbDepth2 = document.querySelectorAll('.depth2_container .depth2_wrap .gnb_depth2 > li');
const gnbDepth3 = document.querySelectorAll('.gnb_depth3 > li > a');
console.log(gnbDepth2, gnbDepth3);


//top배너 스와이퍼 슬라이드
const topBnrSwiper = new Swiper(topBnr, {
    effect:'fade',
    loop:true,
    autoplay:{delay:2000,},
});

//gnb_bg 효과
//1. gnb_bg 가리기 -> 
gnbBg.style.display = 'none'
//2. gnb_depth1에 마우스 올렸을때, gnb_bg 나타나기
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

// 공통tab_menuBtn에 마우스 올렸을때 + 나갔을때 이벤트 설정
