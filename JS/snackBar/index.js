$(document).ready(function () {
    $('#start').click(function (e) { 
        var div = $('div')
        div.animate({height:"300px",opacity:"0.4"},"slow")
        div.animate({width:"300px",opacity:"0.4"},"slow")
        div.animate({height:"100px",opacity:"0.4"},"slow")
        div.animate({width:"100px",opacity:"0.4"},"slow")
    });
    $('#stop').click(function(){
        $('div').stop()
    })
    $('#stopAll').click(function (e) { 
        $('div').stop(true)
        
    });
});