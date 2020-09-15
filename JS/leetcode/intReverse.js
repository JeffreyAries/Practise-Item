var reverse = function(x){
    var numbers = Math.abs(x).toString().split('').reverse()
    for(var i  = 0;i<numbers.length;i++){
        if(numbers[0] == 0){
            console.log('s')
            numbers = numbers.slice(1)
            i = 0   //slice(1)后原数组还是没变
        }
    }
    var newNums = parseInt(numbers.join(''))
    if(x<0){
        return  newNums<= Math.pow(2,31) ? -newNums:0
    }else{
        return newNums < Math.pow(2,31) ? newNums:0
    }
}

// var reverse = function(x) {
//     let now = Math.abs(x).toString().split("").reverse().join("");
//     if(x < 0){
//         return now <= Math.pow(2,31) ? -now : 0;
//     }else{
//         return now < Math.pow(2,31) ? now : 0;
//     }
// };

