//获取元素
var getEle = function(selector){
    return document.querySelector(selector)
}

var getAllEle = function(selector){
    return document.querySelectorAll(selector)
}

//获取元素样式
var getCls = function(e){
    return e.getAttribute('class')
}

//设置元素样式
var setCls = function(e,cls){
    return e.setAttribute('class',cls)  //对节点操作而不是选择器
}
//为元素添加样式
var addCls = function(e,cls){
    var baseCls = getCls(e)
    if(baseCls.indexOf(cls) === -1){
        setCls(e,baseCls+' '+cls)
    }
}
//为元素删除样式
var delCls = function(e,cls){
    var baseCls = getCls(e)
    if(baseCls.indexOf(cls) != -1){
        setCls(e,baseCls.split(cls).join(' ').replace(/\s+/g,' '))   //正则表达式把两个空白符转为一个空格符
    }
}


//第一步  初始化样式 init
var screenAnimateElements = {
    '.screen-1' : [
        '.screen-1_heading',
        '.screen-1_phone',
        '.screen-1_shadow'
    ],

    '.screen-2' : [
        '.screen-2_heading',
        '.screen-2_phone',
        '.screen-2_subheading',
        '.screen-2_point_1',
        '.screen-2_point_2',
        '.screen-2_point_3'
    ],
    '.screen-3' : [
        '.screen-3_heading',
        '.screen-3_phone',
        '.screen-3_subheading',
        '.screen-3_features'
    ],
    '.screen-4' : [
        '.screen-4_heading',
        '.screen-4_subheading',
        '.screen-4_type_item_1',
        '.screen-4_type_item_2',
        '.screen-4_type_item_3',
        '.screen-4_type_item_4'
    ],
    '.screen-5' : [
        '.screen-5_heading',
        '.screen-5_subheading',
        '.screen-5_bg'
    ],
}
//设置屏内元素为初始状态
var setScreenAnimateInit = function(screenCls){
    var screen = document.querySelector(screenCls)   //获取当前屏的元素
    var animateElements = screenAnimateElements[screenCls]  //需要设置的元素
    for(var i = 0;i<animateElements.length;i++){
        var element = document.querySelector(animateElements[i])
        var baseCls = element.getAttribute('class')
        element.setAttribute('class',baseCls + ' ' + animateElements[i].substring(1) + '_animate_init') 
    }
}

//设置播放屏内的元素动画
var playScreenAnimateDone = function(screenCls){
    var screen = document.querySelector(screenCls)   //获取当前屏的元素
    var animateElements = screenAnimateElements[screenCls]  //需要设置的元素
    for(var i = 0;i<animateElements.length;i++){
        var element = document.querySelector(animateElements[i])
        var baseCls = element.getAttribute('class')
        element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'))
    }
}

//页面初始化
window.onload = function () {
    for (k in screenAnimateElements) {
        setScreenAnimateInit(k)
    }
    playScreenAnimateDone('.screen-1')
    //鼠标悬浮大纲栏时显示
    // var header = getEle('.outline')
    // header.onmouseenter = function () {
    //     addCls(getEle('.outline'), 'outline_status_in')
    // }
    // header.onmouseleave = function () {
    //     delCls(getEle('.outline'), 'outline_status_in')
    // }
}

var navItems = getAllEle('.header_nav-item')
var outLineItems = getAllEle('.outline_item')
//导航栏和大纲栏设置到哪个界面对应的选项卡高亮
var switchNavItemsActive = function(index){
    for(var i = 0 ;i < navItems.length;i++){
        delCls(navItems[i],'header_nav-item_status_active')
    }
    addCls(navItems[index],'header_nav-item_status_active')
}
var switchOutlineItemsActive = function(index){
    for(var i = 0 ;i < outLineItems.length;i++){
        delCls(outLineItems[i],'outline_item_status_active')
    }
    addCls(outLineItems[index],'outline_item_status_active')
}

//页面滚动到哪，就播放到哪里
window.onscroll = function(){
    var top = document.documentElement.scrollTop
    // for(let i = 0;i < 5;i++){
    //     if(top > 700*i){
    //         playScreenAnimateDone('.screen-'+(i+1))
    //     }
    // }
    switchNavItemsActive(0)
    switchOutlineItemsActive(0)
    
    if(top>1){
        playScreenAnimateDone('.screen-1')
    }
    if(top>700){
        playScreenAnimateDone('.screen-2')
        switchNavItemsActive(1)
        switchOutlineItemsActive(1)
    }
    if(top>700*2){
        playScreenAnimateDone('.screen-3')
        switchNavItemsActive(2)
        switchOutlineItemsActive(2)
    }
    if(top>700*3){
        playScreenAnimateDone('.screen-4')
        switchNavItemsActive(3)
        switchOutlineItemsActive(3)
    }
    if(top>700*4){
        playScreenAnimateDone('.screen-5')
        switchNavItemsActive(4)
        switchOutlineItemsActive(4)
    }
    
   
//导航栏置顶
    
    if (top>80){
        addCls(getEle('.header'),'header_status_back')
        addCls(getEle('.outline'),'outline_status_in')
    }else{
        delCls(getEle('.header'),'header_status_back')
        delCls(getEle('.outline'),'outline_status_in')
    }
}



//导航栏和大纲双向定位
var setItemsJump = function(i,lib){
    var items = lib[i]
    items.onclick = function(){
        document.documentElement.scrollTop = i * 800
    }
}

for(var i = 0;i < navItems.length;i++){
    setItemsJump(i,navItems)
}
for(var i = 0;i < outLineItems.length;i++){
    setItemsJump(i,outLineItems)
}