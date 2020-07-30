var c = 0;
var t;
var timer_on = 0;
function timedcount(){
    document.getElementById('txt').value = c;
    c = c + 1;
    t = setTimeout(function(){timedcount()},1000)
}
function startCount(){
    if(! timer_on){
        timer_on = 1
        timedcount();
    }
}

function stopCount(){
    clearTimeout(t)
    timer_on = 0
}