
var btn = document.getElementById("btn")
var code = ""
function createCode(){
    var checkCode = document.getElementById("code")
    code = ""
    var random = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z'];
    for(var i = 0 ; i < 4 ; i++){
        var index = Math.floor((Math.random()*36))
        code += random[index]
        console.log(code)
        
    }
    checkCode.innerHTML = code
    
}

function check(){
    var input = document.getElementById("text").value.toUpperCase()
    if(input == 0){
        alert("请输入验证码")
    }else if(input != code){
        alert("验证码错误")
        document.getElementById("text").value = ''
        createCode()
        
    } else{
        alert("验证码终于对了")
    }
}
