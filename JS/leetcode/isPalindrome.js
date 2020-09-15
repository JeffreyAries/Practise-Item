//判断是否为回文数
var isPalindrome = function(x) {
    return x.toString() == x.toString().split('').reverse().join('')
 };  