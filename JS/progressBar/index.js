function move(){
    var bar = document.getElementById('bar')
    var width = 5
    var progress = setInterval(frame,20)
    function frame(){
        if(width >=  100){
            clearInterval(progress)
        }
        else{
            width ++
            bar.style.width = width + "%"
            bar.innerText = width+'%'
        }
    }
}