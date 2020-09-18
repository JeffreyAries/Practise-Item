'use strict'
function name(params) {
    var fullName = params.split(' ')
    var theName = fullName.map(x=>x.substring(0,1).toUpperCase()+x.substring(1).toLowerCase())
    var firstName = function () {
        return theName[0]
    }
    console.log('firstName:'+firstName())
}

function add() {   //传任意多的参数
    if(arguments.length === 0) return
    var sum = 0
    for(x of arguments){
        sum += x
    }
    return sum
}

function factorial(num){
    if(num <=1) return 1
    return num*arguments.callee(num-1)   
}

//严格模式下
var factorial2 = function fn(num){
    if(num <=1) return 1
    return num*fn(num-1)   
}

//用对象作参数
function setPerson(obj){
    var person = {}
    person.name = obj.name || 'xm'
    person.age = obj.age || '18'
    person.sex = obj.sex || 'male'
    person.grade = obj.grade || '60'
    console.log(person)
}
