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

// $(document).ready(function () {
//     $('#start').click(function () { 
//        var a= Number($('#bar').text()[0])
//        var progress = setInterval(start(),100)
//        function start(){
//            if(a>100){
//                clearInterval(progress)
//            }else{
//                a++
//                $('width').animate({
//                    width: '20'+'%'
//                })
//            }
//        }
           
      
//     });
//     $('#stop').click(function () { 
//         $('#bar').stop(true)
        
//     });
// });