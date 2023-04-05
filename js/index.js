
window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    let scrollFirst = (this.scrollY-500) * -0.001/2.5;
    let scrollSecond = (this.scrollY-2000) * -0.001/2.5;
    let scrollThird = (this.scrollY-5500) * -0.001;


    // section1
    let earth = document.querySelector('.earth')
    let scrollSign = document.querySelector('.scrollSign')
    let text = document.querySelector('.text')
    let typing = document.querySelector('.typing a')
    let typing2 = document.querySelector('.typing2 a')
    let makeFriend = document.querySelector('.makeFriend')
    
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
    }

    console.log(scrollY)




    // typing
    if(scrollY > 4500 && scrollY < 5500){
        typing.style.display = 'inline-block'
        typing.style.animation = "typing 2s steps(25), cursor .4s step-end infinite alternate";
    } else {
        typing.style.display = 'none'
    }

      // typing2
      if(scrollY > 5500){
        typing2.style.display = 'inline-block'
        typing2.style.animation = "typing 1.8s steps(18), cursor .4s step-end infinite alternate";
        scrollSign.style.opacity = `${1 + scrollThird}`
    } else {
        typing2.style.display = 'none'
    }

    if(scrollY > 6500){
            makeFriend.style.display = 'block'
          makeFriend.addEventListener('mouseover', function(){
            makeFriend.style.transform='scale( 1.1, 1.1 )'
            makeFriend.style.background='#00FF66'
          })
          makeFriend.addEventListener('mouseout', function(){
            makeFriend.style.transform='scale( 1, 1 )'
            makeFriend.style.background='none'
          })
    } else {
        makeFriend.style.display = 'none'
    }
});

