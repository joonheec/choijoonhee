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
	if(typeof Number(firstInput) === 'number' && typeof Number(secondInput) === 'number'){
		var output = secondInput*firstInput;
		document.getElementById("output").innerHTML = output;
	}
	else {
		if(typeof firstInput === 'string' && typeof Number(secondInput) ==='number'){
			var output = secondInput.repeat(firstInput);
			document.getElementById("output").innerHTML = output;
		}
		else if(typeof Number(firstInput) === 'number' && typeof secondInput=== 'string'){
			var output = secondInput.repeat(firstInput);
			document.getElementById("output").innerHTML = output;
		}
	}

}
function clearValues(){
	var firstInput = document.getElementById("input1").value;
	var secondInput = document.getElementById("input2").value;
	output.innerHTML = '';
}