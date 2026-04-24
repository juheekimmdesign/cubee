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

// 데스크톱 메뉴(gnb) 복제해서 모바일 메뉴 위치(m_nav에 붙여넣기)
const mNav = document.querySelector('.lnb_mnav .m_nav .m_gnb');
const gnbUl = document.querySelector('#gnb .gnb_depth1')
console.log(mNav, gnbUl);

// 특정 대상 복제 객채.cloneNode() 내장함수 사용
const gnbClone = gnbUl.cloneNode(true);
console.log(gnbClone);

mNav.appendChild(gnbClone);//자식 붙여넣기

//햄버거 메뉴버튼(.m_nav)를 눌렀을 때 gnb 메뉴 나오기
const mNavBtn = document.querySelector('.m_nav .m_menu');
const mGnbBg = document.querySelector('.m_gnb .gnb_bg');
const mGnbClose = document.querySelector('.m_gnb .gnb_close_btn');
console.log(mNavBtn, mGnbBg, mGnbClose);
mNavBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log('햄버거클릭확인')
    mNav.style.display = 'block';
})
//gnbBG를 눌렀을 때, gnb 메뉴 사라지기
mGnbBg.addEventListener('click', function(e){
    e.preventDefault();
    console.log('mgnbbg를 클릭확인')
    mNav.style.display = 'none';
})
//gnbCloseBtn를 눌렀을 때도 gnb 메뉴 사라지기
mGnbClose.addEventListener('click', function(e){
    e.preventDefault();
    console.log('mgnbbg를 클릭확인')
    mNav.style.display = 'none';
})



// m_nav 메뉴 클릭했을 때,
const mNavDep1 = mNav.querySelectorAll('.gnb_depth1 > li > a');
const mNavDep2 = mNav.querySelectorAll('.depth2_container .depth2_wrap')
console.log(mNavDep1, mNavDep2);
for(let tab of mNavDep1){
    //gnb의 메뉴를 클릭했을 때,
    tab.addEventListener('click', function(e){
        e.preventDefault();
        console.log('m의 tab메뉴를 클릭하다..');
        //2번째 하위메뉴를 모두 숨긴다
        mNavDep2Hide()
        console.log(tab.dataset.index);
        const gnbIndex = tab.dataset.index;
        //gnbdepth1의 인덱스번호와 gnbdepth2의 Nodelist 번호가 같으면 보이기
        mNavDep2[gnbIndex].style.display='flex'
        //탭을 클릭하면 모든 active가 사라지고 클릭한 탭에만 active들어가서 스타일이 활성화
        for(let dep1 of mNavDep1){dep1.classList.remove('active')};
        mNavDep1[gnbIndex].classList.add('active')
    })
}
function mNavDep2Hide(){
    for(let dep2 of mNavDep2)dep2.style.display='none';
}