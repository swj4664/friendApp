
window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    let scrollFirst = (this.scrollY-500) * -0.001/2.5;
    let scrollSecond = (this.scrollY-2000) * -0.001/2.5;


    // section1
    let earth = document.querySelector('.earth')
    let scrollSign = document.querySelector('.scrollSign')
    let text = document.querySelector('.text')
    let typing = document.querySelector('.typing')
    
    if(scrollY > 500){
    earth.style.scale = `${1 + scrollFirst}`
    earth.style.opacity = `${1 + scrollFirst}`
}


    
    if(scrollFirst <= -1) {
        earth.style.scale = '0'
    }
    


    // section2
    if(scrollY > 1700 && scrollY < 5000){
        text.style.display = 'block'
    } else {
        text.style.display = 'none'
    }

    if(scrollY > 2000){
        text.style.scale = `${1 + scrollSecond}`
        text.style.opacity = `${1 + scrollSecond}`
        scrollSign.style.opacity = `${1 + scrollSecond}`
    }

    console.log(scrollY)
    // typing
    if(scrollY > 3000){
        typing.classList.add = 'active'
    } 

});

