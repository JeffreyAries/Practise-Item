window.onload = function(){
    var box = document.getElementById('container')
    var imgs = box.getElementsByTagName('img')
    var imgWidth = imgs[0].offsetWidth
    var fixWidth = 160
    var boxWidth = imgWidth + (imgs.length-1)*fixWidth
    box.style.width = boxWidth + 'px'

    function setImgs() {
        for (var i = 1; i < imgs.length; i++) {
            imgs[i].style.left = imgWidth + fixWidth * (i - 1) + 'px'
        }
    }
    setImgs()
    var translate = imgWidth - fixWidth
    for(var i = 0;i < imgs.length; i++){
        (function(i){
            imgs[i].onmouseover = function(){
                setImgs()
                for(j = 1;j<=i;j++){
                    imgs[j].style.left = parseInt(imgs[j].style.left ,10) - translate + 'px'
                }
            }
        })(i)
    }
}