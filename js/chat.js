$(function () {
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

let detail = document.querySelectorAll('.detail')
let detailSpace = document.querySelector('.detailSpace')
$('.swiper-slide').next().on('click', function () {
  let num = $(this).attr("value")
  detailSpace.classList.remove('active')
  if (num != 0) {
    detail.forEach(element => {
      element.classList.remove('active')
    });
    detail[num - 1].classList.add('active')
  }
})