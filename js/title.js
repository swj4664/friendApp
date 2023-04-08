VanillaTilt.init(document.querySelector(".titleWrap"), {
    max: 15,
    speed: 1000
});

let titleWrap = document.querySelector('.titleWrap')
let adSkip = document.querySelector('.adSkip')
titleWrap.addEventListener('animationend', ()=> {
    setTimeout(()=>adSkip.classList.add('show'), 500)
    
})