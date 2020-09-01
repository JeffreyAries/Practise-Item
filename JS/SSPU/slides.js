var showIndex = 1
var slides = document.getElementsByClassName('mySlides')

// 初始化函数
window.onload = function(){
    createDot()
    showSlides(showIndex)
}

// 自动轮播
setInterval(function(){
    slides[showIndex-1].classList.remove("ani")
    showIndex +=1
    showSlides(showIndex)
},5000)

//按键加减
function plusSlides(n){
    showSlides(showIndex += n);
}

// 展示图片
function showSlides(n){
    var slides = document.getElementsByClassName('mySlides')
    var dots = document.getElementById('dots').children
    if(n > slides.length){showIndex = 1}
    if(n < 1){showIndex = slides.length}
    for(var i = 0;i < slides.length;i++){
        slides[i].style.display='none'
    }
   for(var i=0;i<slides.length;i++){
        dots[i].setAttribute("class","quiet")
   }
    slides[showIndex-1].style.display='block'
    slides[showIndex-1].classList.add("ani")
    dots[showIndex-1].setAttribute("class","active")
    
}


//与序号点有关
function createDot(){
    var dot = document.querySelector('.dot')
    for(let i=0;i<slides.length;i++){
        var dot_li = document.createElement('li')
        dot.appendChild(dot_li)
    }
    
}