


window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    let scrollFirst = this.scrollY * -0.001/2;
    let scrollSecond = this.scrollY * -0.001/2;
    let earth = document.querySelector('.earth')
    let scrollSign = document.querySelector('.scrollSign')
    let textWrap = document.querySelector('.textWrap')
 
    // console.log(scrollFirst);
    console.log(scrollY);
    console.log(scrollSecond);
    
    earth.style.scale = `${1 + scrollFirst}`
    earth.style.opacity = `${1 + scrollFirst}`
    scrollSign.style.opacity = `${1 + scrollFirst}`
    
    if(scrollFirst <= -1) {
        earth.style.scale = '0'
    }

    if(scrollY > 3000){
        textWrap.style.display = 'block'
    } else {
        textWrap.style.display = 'none'
    }

    textWrap.style.scale = '1'
    if(scrollY > 3500){
        textWrap.style.scale = `${1 + scrollSecond}`
    } 
});
