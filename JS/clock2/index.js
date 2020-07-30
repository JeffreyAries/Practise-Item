function startCount(){
    var today = new Date();
    var txt = document.getElementById('txt');
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = check(m)
    s = check(s)
    txt.innerHTML = h+':'+m+':'+s;
    t = setTimeout(function(){startCount()},500)
}
function check(i){
    if(i<10){
        return '0'+i;
    }
    else{
        return i
    }
}