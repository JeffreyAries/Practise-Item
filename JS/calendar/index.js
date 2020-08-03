/**
 * 需要添加的功能：
 * 1.鼠标移到指定日期，该日期td背景变白，鼠标移到区域外，则变回原背景色
 * 2.跳转到指定日期
 * 待解决的bug：
 * 1,mouseover ,mouseout与 click共存问题

 */


//这个月多少天
var myDate = new Date()
var myYear = myDate.getFullYear()
var myMonth = myDate.getMonth()
var myDay = myDate.getDate()
var myWeek = myDate.getDay()

var monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var weekName = ['Sun','Tue','Wen','Thu','Fri','Sat','Mon',] 

//今天的背景颜色为白色
function thisDay() {
    var today = new Date()
    var td = document.getElementsByTagName('td')
        if (myYear == today.getFullYear()&&myMonth ==today.getMonth()) {
            for (var j = 0; j <td.length; j++) {
               if(td[j].innerText == today.getDate()){
                   td[j].style.backgroundColor ='white'
                   break;
               }
            }
        }
        
    
}
function onblur(event){
    event.target.style.backgroundColor = 'rgb(198, 63, 27)';
}
//鼠标聚焦时一个颜色  离开时返回原色
function changeColor(){
    var mouse = document.querySelector('tbody');
    var td = document.getElementsByTagName('td')
    // mouse.addEventListener('mouseover',function(event){ 
    //     event.target.style.backgroundColor = 'rgb(198, 63, 27)';
    //     addEventListener('mouseout',function(event){ 
    //         event.target.style.backgroundColor = '';
    //      })
        mouse.addEventListener('click', function (event) {
            thisDay()//确保今天的白色背景被点击以后不会
            event.stopPropagation()
            //每次点击前查看一遍，确保每次点击只会有一个颜色块，rgb是td[i].style.backgroundColor默认颜色，换成#则会报错
            for(var i = 0;i<td.length;i++){
                if(td[i].style.backgroundColor === 'rgb(198, 63, 27)'){
                    td[i].style.backgroundColor = ''
                }
            }
            event.target.style.backgroundColor = 'rgb(198, 63, 27)';
          });
   
     
      
}

// //回到今天
function backToday(){
     myDate = new Date()
     myYear = myDate.getFullYear()
     myMonth = myDate.getMonth()
     myDay = myDate.getDate()
     myWeek = myDate.getDay()
     getTitle()
    refreshDate()
    thisDay()
}
//指定日期高亮
function oneDay(){
    var td = document.getElementsByTagName('td')
    for (var i = 0; i < td.length; i++) {
        if (td[i].innerText == myDay) {
            td[i].style.backgroundColor = '#C63F1B'
            break;
        }
    }
}
//跳转指定日期
function toFuture() {
    var newYear = document.getElementById('newYear')
    var newMonth = document.getElementById('newMonth')
    var newDay = document.getElementById('newDay')
    //判断输入框是否为空并且判断输入框是否为数字
    if(newYear.value != ''&&!isNaN(newYear.value)){
        if(newYear.value>0){
            myYear =newYear.value
            
        }
        else{
            alert('请输入正确的年份')
            
        }
    }else{
        alert('请输入年')
    }
    if(newMonth.value != ''&&!isNaN(newMonth.value)){
        if(newMonth.value >= 1 && newMonth.value <= 12){
            myMonth =newMonth.value-1
            
        }
        else{
            alert('请输入正确的月份')
        }
    }else{
        alert('请输入月')
    }
    if(newDay.value != ''&&!isNaN(newDay.value)){
        if(newDay.value >= 1 && newDay.value <= 31){
            myDay =newDay.value
            
        }
        else{
            alert('请输入正确的日期')
            
        }
    }else{
        alert('请输入日期')
    }
    getTitle()
    refreshDate()
    oneDay()
    thisDay()
}
//修改标题
function getTitle(){
    if(myMonth<0){
        myYear -=1
        myMonth =11
    }
    else if(myMonth>11){
        myYear +=1
        myMonth = 0
    }
    document.getElementById('calendar_month').innerHTML = monthName[myMonth]
    document.getElementById('calendar_year').innerHTML = myYear
}

//判断这个月第一天是星期几
function dayStart(year,month){
    var todayDate = new Date(year,month,1)
    return todayDate.getDay()
}
//判断这个月有多少天
function daysTotal(year,month){
    var totalDays = new Date(year,month+1,0)
    return totalDays.getDate()
    
}
//刷新日期
function refreshDate() {
    var dateTable = document.getElementById('days')
    var td = dateTable.childNodes 
    for(var i = td.length-1 ; i >= 0; i--){
        dateTable.removeChild(td[i])
    } //删除之前页面的所
    
    var firstDay = dayStart(myYear, myMonth)
    var totalDays = daysTotal(myYear, myMonth)
    var first = 1
    for (var i = 0; i < 6; i++) {
        var newRow = document.createElement('tr')
        for (var j = 0; j < 7; j++) {
            if (i == 0 && j < firstDay) {
                var tr = dateTable.appendChild(newRow)
                var newDate = document.createElement('td')
                tr.appendChild(newDate)
                newDate.innerText = ''
            } else if(first <= totalDays){
                var tr = dateTable.appendChild(newRow)
                var newDate = document.createElement('td')
                tr.appendChild(newDate)
                newDate.innerText = first++
            }
            else{
                var tr = dateTable.appendChild(newRow)
                var newDate = document.createElement('td')
                tr.appendChild(newDate)
                newDate.innerText = ''
            }
        }
    }
}
function prev(){
    myMonth -= 1
    getTitle()
    refreshDate()
    thisDay()
}
function next(){
    myMonth += 1
    getTitle()
    refreshDate()
    thisDay()
}
//     var holder = document.getElementById('days')
//     var li = document.createElement('li')
//     var totalDays = monthNormal[myMonth]
//     var firstDay = dayStart(myYear,myMonth)
//     var myClass
//     for(var i = 1;i <= firstDay;i++){
//         var node = document.createTextNode('0') //在第一天前面的全部是空的li
//         holder.appendChild(li)
//         li.setAttribute('class','fli')
//         li.appendChild(node)
        
//     }
//     for(var i = 1;i <= totalDays;i++){
//         var node = document.createTextNode('1') //在第一天前面的全部是空的li
//         holder.appendChild(li)
//         li.appendChild(node)
        
//     }
   
// }


// var holder = document.getElementById('days')
// var prev = document.getElementById('prev')
// var next = document.getElementById('next')
// var ctitle = document.getElementById('calendar_month')
// var cyear = document.getElementById('calendar_year')

// var my_date = new Date()
// var my_year = my_date.getFullYear()
// var my_month = my_date.getMonth()
// var my_day = my_date.getDate()

// //判断某月第一天是星期几
// function day_start(month,year){
//     var tdate = new Date(year,month,1)
//     return (tdate.getDay())
// }

// //判断一月多少天
// function days_Month(month,year){
//     if(year%4 && year%100 === 0||year%400 ===0){
//         return (month_Leap[month])
//     }
//     else{
//         return (month_Normal[month])
//     }
// }

// //生成月份显示
// function refresh_date(){
//     var str = '';
//     var total_day = days_Month(my_month,my_year)  //获取这个月多少天
//     var first_day = day_start(my_month,my_year)     //获取第一天是星期几
//     var my_class
//     for(var i = 1;i <= first_day;i++){
//         str += "<li></li>"
//     }
//     for(var i = 1;i <= total_day;i++){
//         if((i<my_day && my_year==my_date.getFullYear() && my_month==my_date.getMonth()) || my_year<my_date.getFullYear() || ( my_year==my_date.getFullYear() && my_month<my_date.getMonth())){ 
// 			myclass = " class='lightgrey'"; //当该日期在今天之前时，以浅灰色字体显示
// 		}else if (i==my_day && my_year==my_date.getFullYear() && my_month==my_date.getMonth()){
// 			myclass = " class='green greenbox'"; //当天日期以绿色背景突出显示
// 		}else{
// 			myclass = " class='darkgrey'"; //当该日期在今天之后时，以深灰字体显示
// 		}
// 		str += "<li"+myclass+">"+i+"</li>"; //创建日期节点
//     }
//     holder.innerHTML = str;
//     ctitle.innerHTML = month_Name(my_month)
//     cyear.innerHTML = my_year
// }
// refresh_date()