/**
 * 预实现的功能
 * 1.检索当列表中不存在搜索项时，显示一段文字“查无此人(￣_￣|||)”
 * 2.如果匹配的话就显示出来
 * 3.添加按钮新增联系人以及删除联系人
 */

function search(){
     // 声明变量
     var input, filter, ul, li, a, i;
     input = document.getElementById('search');
     filter = input.value.toUpperCase();
     ul = document.getElementById("contact");
     li = ul.getElementsByTagName('li');
     
 
     // 循环所有列表，查找匹配项
     for (i = 0; i < li.length; i++) {
         a = li[i].getElementsByTagName("a")[0];
         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
             li[i].style.display = "";
         } else {
             li[i].style.display = "none";
         }
     }
}