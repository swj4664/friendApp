$(function () {

  // 프로필 데이터 가져오기
  $.ajax({
    type: "get",
    url: "profile.json",
    dataType: "json",
    success: function (data) {
      profileFunction(data.records)
    },
    error: function () {
      alert('실패')
    }
  })

  // 스와이퍼 
  new Swiper(".swiper-container", {
    // 방향: vertical 수직, horizontal 수평, default: horizontal
    direction: "vertical",
    // 드래그 기능 true/false
    debugger: true,
    // 무한 반복 기능 true/false
    loop: false,
    // 마지막 슬라이드 -> 첫슬라이드 자연스러운 반복 기능
    loopAdditionalSlides: 1,
    // 슬라이드간 간격
    spaceBetween: 20,
    // 한번에 보여 줄 슬라이드 개수
    slidesPerView: 5,
    // 그룹으로 묶을 슬라이드 수
    slidesPerGroup: 1,
    // 자동 스크롤링
    // autoplay: {
    // 1000: 1초
    // delay: 2500,
    // disableOnInteraction: false,
    // },
    // 페이징
    pagination: {
      // 페이징 클래스명
      el: ".swiper-pagination",
      // 클릭 가능 true/false
      clickable: true,
      // 타입: fraction, bullets, progressbar
      type: "fraction",
    },
    // 네비게이션
    navigation: {
      // 다음 버튼 클래스명
      nextEl: ".swiper-button-next",
      // 이전 버튼 클래스명
      prevEl: ".swiper-button-prev",
    },
  });
});
// 스와이퍼 끝

let detailContent = document.querySelectorAll('.detail_content')
let detail = document.querySelector('.detail')
let detailSpace = document.querySelector('.detailSpace')
let swiperContainer = document.querySelector('.swiper-container')
let cancelChat = document.querySelector('.cancelChat')
let messageSend = document.querySelector('.messageSend button') //임시
$('.swiper-slide').next().on('click', function () {
  let num = $(this).attr("value")
  detailSpace.classList.remove('active')
  detail.classList.add('active')
  if (num != 0) {
    detailContent.forEach(element => {
      element.classList.remove('active')
    });
    detailContent[num - 1].classList.add('active')
  }
  cancelChat.addEventListener('click', function () {
    swiperContainer.style.flex = '1'
    detail.classList.remove('active')
    detailSpace.classList.add('active')
  })
})

if (window.innerWidth <= 1000) {
  $('.swiper-slide').next().on('click', function () {
    let num = $(this).attr("value")
    detailSpace.classList.remove('active')
    swiperContainer.style.flex = '0'
    detail.classList.add('active')
    if (num != 0) {
      detailContent.forEach(element => {
        element.classList.remove('active')
      });
      detailContent[num - 1].classList.add('active')
    }
  })
  cancelChat.addEventListener('click', function () {
    swiperContainer.style.flex = '1'
    detail.classList.remove('active')
  })
}





function profileFunction(profileData) {
  let profileAdd = ''
  profileData.map((data, index) => { //
    profileAdd +=` <div class="swiper-slide" value = "${index}" >
                <div class="picture">
                  <div class="img"><img src="./img/${data.img}" alt="" /></div>
                </div>
                <div class="profile">
                  <h2>${data.name}<span>${data.age}세</span></h2>
                  <h3>거주 행성 : ${data.live}</h3>
                  <h3>직업 : ${data.job}</h3>
                  <i class="fa-solid fa-triangle"></i>
                </div>
                </div>`
  })
  console.log(profileAdd)
  $('.swiper-slide:nth-last-child(2)').before(profileAdd)
}

window.addEventListener('load', () => {
  let loading = document.querySelector('.loading')
  loading.classList.add('hidden')
  loading.addEventListener('transitionend', () => {
    document.querySelector('.wrap').removeChild(loading)
  })

})


