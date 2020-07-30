
function push(){
    document.getElementById('screen').value = '';
}

function get(value) {
	document.getElementById("screen").value += value; 
} 


function calculate(){
	var result = 0;
	result = document.getElementById("screen").value;
	document.getElementById("screen").value = "";
	document.getElementById("screen").value = eval(result);
};