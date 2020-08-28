//字符串和数组的相互转化
// textContent 是 Node 对象的属性；
// innerHTML 是 Element 对象的属性；
// innerText 是 HTMLElement 对象的属性；

function createCode() {
    var checkCode = document.getElementById('code')
    var code = ''
    var symbol = ['+', '-', '*']
    var index1 = Math.floor((Math.random()) * 10)
    var index2 = Math.floor((Math.random()) * 3)
    var index3 = Math.floor((Math.random()) * 10)
    var value = [index1, symbol[index2], index3]
    code = value[0] + value[1] + value[2] + '=' + '?'
    checkCode.innerHTML = code
    }
  
function check(){
    var code = document.getElementById('code').innerText.split('')
    var input = document.getElementById("text").value
    var sum =0
    
    switch (code[1]) {
        case ('+'):
            sum = parseInt(code[0]) + parseInt(code[2])
            break
        case ('-'):
            sum = parseInt(code[0]) - parseInt(code[2])
            break
        case ('*'):
            sum = parseInt(code[0]) * parseInt(code[2])
            break
    }
    
    if(input == ''){
        alert("请输入验证码")
    }else if(input != sum.toString()){
        alert("验证码有误")
        createCode()
        document.getElementById("text").value = ''
    }else{
        alert("验证码正确")
        createCode()
        document.getElementById("text").value = ''
    }
}

