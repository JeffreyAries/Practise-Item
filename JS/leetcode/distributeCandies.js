var distributeCandies = function(candies) {
    let length  = candies.length/2
    let getLength = 0
    let candiesArr =  new Set([...candies])      //从数组中删除重复的元素
    if(candiesArr.size<length){
        getLength = candiesArr.size
    }else{
        getLength = length
    }
    return getLength
};