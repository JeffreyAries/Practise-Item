function message(){
    var txt = '';
    try{
        adddasda("Welcome guest!");
    }
    catch(err){
        txt = "本页有哥错误\n\n"
        txt+= "错误描述:"+err.message+ '\n\n'
        txt+= "点击确定继续,取消则返回 \n\n"
        if(confirm(txt)){
            alert("欢迎你，我的son")
        }
    }
}