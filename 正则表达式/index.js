var userText = document.getElementById('userText')
var userRegExp = document.getElementById('userRegExp')
var matchingBtn = document.getElementById('matchingBtn')
var matchingResult = document.getElementById('matchingResult')
var userModifier = document.getElementsByName('userModifier')
var pattern
var modifier = ''

for(var i = 0;i<userModifier.length;i++){
    
    userModifier[i].onclick = function(){
        modifier = ''
        for(var j=0;j<userModifier.length;j++){
            if(userModifier[j].checked == true){
                modifier +=  userModifier[j].value
            }
        }
    }
}

matchingBtn.onclick = function(){
    if(!userText.value){
        alert('请输入待匹配的文本')
        userText.focus()
        return
    }
    if(!userRegExp.value){
        alert('请输入正则表达式')
        userRegExp.focus()
        return
    }
    pattern = new RegExp(userRegExp.value)
    matchingResult.value = pattern.exec(userText.value) || '无'   //如果前面匹配到了就不执行后面的语句
}