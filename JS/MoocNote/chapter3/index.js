var inputNum1 = document.getElementById('inputNum1')
var inputNum2 = document.getElementById('inputNum2')
var result = document.getElementById('result')
var symbol = document.getElementById('symbol')
var btn = document.getElementsByClassName('btn')
symbol.innerText = '+'

for(x of btn){
    x.onclick = function(){
        num1 = Number(inputNum1.value)
        num2 = Number(inputNum2.value)
       symbol.innerText = this.innerText
        switch (this.innerText) {
            case '+':
                result.innerText = num1 + num2;
                break;
             case '-':
                result.innerText = num1 - num2;
                break; 
             case '×':
                result.innerText = num1 * num2;
                break;
             case '÷':
                result.innerText = num1 / num2;
                break;
        
            default:
                break;
        }
    //    if(this.innerText === '+'){
    //        result.innerText = num1 + num2
    //    }
    //    if(this.innerText === '-'){
    //     result.innerText = num1 - num2
    //     }
    //     if(this.innerText === '×'){
    //         result.innerText = num1 * num2
    //     }
    //     if(this.innerText === '÷'){
    //         result.innerText = num1 / num2
    //     }
    }
}