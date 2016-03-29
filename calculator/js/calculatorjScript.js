function addValues(){
	var firstInput = document.getElementById("input1").value;
	var secondInput = document.getElementById("input2").value;
	if(typeof firstInput === 'string' && typeof secondInput === 'string'){
		
		document.getElementById("output").innerHTML = firstInput + ' ' + secondInput
	}
	else {
		var output = firstInput+secondInput;
		document.getElementById("output").innerHTML = output;
	} 
}
function multValues(){
	var firstInput = document.getElementById("input1").value;
	var secondInput = document.getElementById("input2").value;
	if(isNaN(firstInput) == true && isNaN(secondInput) == false){
		secondInput = parseFloat(secondInput);
		var output = firstInput.repeat(secondInput);
		document.getElementById("output").innerHTML = output;
	}
	else {
		if(isNaN(firstInput) == false && isNaN(secondInput) == true){
			var output = secondInput.repeat(firstInput);
			document.getElementById("output").innerHTML = output;
			
		}
		else if(isNaN(firstInput) == true && isNaN(secondInput) == true){
			alert("Cannot multiply a string and a string");
			
		}
	}

}
function clearValues(){
	var firstInput = document.getElementById("input1").value;
	var secondInput = document.getElementById("input2").value;
	output.innerHTML = '';
}