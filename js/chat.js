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






  let detailSpace = document.querySelector('.detailSpace')
  let swiperContainer = document.querySelector('.swiper-container')






  function profileFunction(profileData) {
    let profileAdd = ''
    let profileDetailAdd = ''
    profileData.map((data, index) => { //
      profileAdd += ` <div class="swiper-slide" value = "${index + 1}" >
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
      profileDetailAdd += `
    <div class="detail_content" value = "${index + 1}">
        <div class="imgName">
          <div class="imgNameImg"><img src="./img/${data.img}" alt=""></div>
          <div class="imgNameName"><h4>${data.name}<span>&nbsp;&nbsp;${data.age}세</span></h4></div>
        </div>
        <div class="introduce">
          <p>
          거주 행성 : ${data.live}<br><br>
          직업 : ${data.job}<br><br>
          MBTI : ${data.mbti} <br><br>
          매력 : ${data.charm}<br><br>
          취미 : ${data.hobby}<br><br>
          하고싶은 말 : ${data.talk}<br><br>
         </p>
        </div>
        <div class="messageSend">
          <div class="forShadow">
          <button type="button">메세지 보내기</button>
          </div>
        </div>
    </div>
    `
    })
    $('.detail').append(profileDetailAdd)
    $('.swiper-slide:nth-last-child(2)').before(profileAdd)

    let detail = document.querySelector('.detail')
    let detailContent = document.querySelectorAll('.detail_content')
    let cancelChat = document.querySelector('.cancelChat')

    $('.swiper-slide').on('click', function () {
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
      $('.swiper-slide').on('click', function () {
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


    let messageSendBgAdd = ''
    profileData.map((data, index) => { //
      messageSendBgAdd += `<div class="messageSendBg" value = "${index + 1}">
      <div class="sendBox">
        <div class="messageTitle">
          <h2>${data.name}<span>님과 대화중</span></h2>
        </div>
        <div class="message1">
          <div class="message1_msg"></div>
        </div>
        <div class="message2">
          <div class="message2_msg"></div>
        </div>
        <div class="space"></div>
        <div class="notAllow"><p>차단되었습니다.</p></div>
        <div class="sendMessage">
          <form class="formMessage" action="" onsubmit="return false">
            <input class="messageInput" type="text">
            <button class="sendClick">보내기</button>
          </form>
        </div>
        <div class="messageBoxCancel"><i class="fa-solid fa-xmark"></i></div>
      </div>
    </div>`
    })
    $('.wrap').append(messageSendBgAdd)

    let messageSend = document.querySelectorAll('.messageSend button')
    let messageSendBg = document.querySelectorAll('.messageSendBg')
    let messageBoxCancel = document.querySelectorAll('.messageBoxCancel')
    let formMessage = document.querySelectorAll('.formMessage')
    let message1_msg = document.querySelectorAll('.message1_msg')
    let message2_msg = document.querySelectorAll('.message2_msg')
    let message2 = document.querySelectorAll('.message2')
    let messageInput = document.querySelectorAll('.messageInput')
    let notAllow = document.querySelectorAll('.notAllow')
    let sendClick = document.querySelectorAll('.sendClick')
    for (let i = 0; i < messageSend.length; i++) {
      messageSend[i].addEventListener('click', () => {
        messageSendBg[i].classList.add('active')
      })
      messageBoxCancel[i].addEventListener('click', () => {
        messageSendBg[i].classList.remove('active')
      })
      formMessage[i].addEventListener('keyup', () => {
        message1_msg[i].style.display = 'block'
        message1_msg[i].style.animation = 'blinkMsg 1s ease infinite'
        message1_msg[i].innerText = '. . .'
        if (window.event.keyCode == 13) {
          message1_msg[i].style.animation = 'none'
          let messageVal = messageInput[i].value
          message1_msg[i].innerText = `${messageVal}`
          setTimeout(() => {
            message2[i].classList.add('active')
            message2_msg[i].innerText = '. . .'
            message2_msg[i].style.animation = 'blinkMsg 1s ease infinite'
          }, 1000);
          setTimeout(() => {
            if(i == 0){
              message2_msg[i].innerText = '차단이요.'
            }
            if(i == 1){
              message2_msg[i].innerText = '남친있어요~'
            }
            if(i == 2){
              message2_msg[i].innerText = '피닉스 많이 사랑해주세요...'
            }
            if(i == 3){
              message2_msg[i].innerText = '경제 토론 좋아하세요? 아니죠?'
            }
            message2_msg[i].style.animation = 'none'
          }, 3000);
          setTimeout(() => {
            notAllow[i].classList.add('active')
          }, 4500);
        }
      })
      sendClick[i].addEventListener('click', ()=>{
        message1_msg[i].style.animation = 'none'
          let messageVal = messageInput[i].value
          message1_msg[i].innerText = `${messageVal}`
          setTimeout(() => {
            message2[i].classList.add('active')
            message2_msg[i].innerText = '. . .'
            message2_msg[i].style.animation = 'blinkMsg 1s ease infinite'
          }, 1000);
          setTimeout(() => {
            if(i == 0){
              message2_msg[i].innerText = '차단이요.'
            }
            if(i == 1){
              message2_msg[i].innerText = '남친있어요~'
            }
            if(i == 2){
              message2_msg[i].innerText = '피닉스 많이 사랑해주세요...'
            }
            if(i == 3){
              message2_msg[i].innerText = '경제 토론 좋아하세요? 아니죠?'
            }
            message2_msg[i].style.animation = 'none'
          }, 3000);
          setTimeout(() => {
            notAllow[i].classList.add('active')
          }, 4500);
      })
    }
  }

  window.addEventListener('load', () => {
    let loading = document.querySelector('.loading')
    loading.classList.add('hidden')
    loading.addEventListener('transitionend', () => {
      document.querySelector('.wrap').removeChild(loading)
    })
  })


});