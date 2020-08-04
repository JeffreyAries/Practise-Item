

//实现添加close按钮
function closeAdd() {
    var myLi = document.getElementsByTagName('li')
    var i
    for (i = 0; i < myLi.length; i++) {
        var span = document.createElement('span')
        var txt = document.createTextNode('×')
        span.className = 'close'
        span.appendChild(txt)
        myLi[i].appendChild(span)
    }
}
//close按钮的功能实现
function closeItem() {
    var close = document.getElementsByClassName('close')
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement
            div.style.display = 'none'
        }
    }
}
//check效果的实现
function check() {
    var ul = document.getElementById('myUl')
    ul.addEventListener("click", function (event) {   
            event.target.classList.toggle('checked')
    },false)
}

//add功能的实现
function addItem() { 
    var newValue = document.getElementById("myInput").value
    var ul = document.getElementById('myUl')
    var newLi = document.createElement('li')
    var newText = document.createTextNode(newValue)
    newLi.appendChild(newText)
    if(newValue == ''){
        var remind = document.getElementById('snackbar')
        remind.className = "show"
        setTimeout(function(){
            remind.className = remind.className.replace('show','')
        },2000)
    }
    else{
        ul.appendChild(newLi)
        
    }
    document.getElementById("myInput").value = "";
    closeAdd()
    closeItem()
    
}


//按下Enter出发按钮点击事件
function enter() {
    var input = document.getElementById('myInput')
    input.addEventListener('keyup', function (event) {
        event.preventDefault(); //取消默认动作
        if (event.keyCode === 13) {
            document.getElementById('myBtn').click()
        }
    })
}