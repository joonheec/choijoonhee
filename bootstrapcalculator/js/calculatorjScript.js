function addValues(){
	var firstInput = document.getElementById("input1").value;
	var secondInput = document.getElementById("input2").value;
	if(isNaN(firstInput) == true && isNaN(secondInput) == true){
		var output = firstInput + ' ' + secondInput;
		$("#output").html(output);
		$(".alert-danger").css("display", "none");
		$(".alert-success").css("display", "block");
	}

	else if(isNaN(firstInput) == false && isNaN(secondInput) == false){
		var tempOutput = parseFloat(firstInput)+parseFloat(secondInput);
		var output = tempOutput.toString();
		$("#output").html(output);
		$(".alert-danger").css("display", "none");
		$(".alert-success").css("display", "block");
	} 
	else{
		secondInput = secondInput.toString();
		firstInput = firstInput.toString();
		var output = firstInput + ' ' + secondInput;
		$("#output").html(output);
		$(".alert-danger").css("display", "none");
		$(".alert-success").css("display", "block");
	}
}
function multValues(){
	var firstInput = document.getElementById("input1").value;
	var secondInput = document.getElementById("input2").value;
	if(isNaN(firstInput) == true && isNaN(secondInput) == false){
		secondInput = parseFloat(secondInput);
		var output = firstInput.repeat(secondInput);
		$("#output").html(output);
		$(".alert-danger").css("display", "none");
		$(".alert-success").css("display", "block");
	}
	else if (isNaN(firstInput) == false && isNaN(secondInput) == false){
		var parseFirst = parseFloat(firstInput);
		var parseSecond = parseFloat(secondInput);
		var tempOutput = parseSecond * parseFirst;
		var output = tempOutput.toString();
		$("#output").html(output);
		$(".alert-danger").css("display", "none");
		$(".alert-success").css("display", "block");
	}
	else if(isNaN(firstInput) == false && isNaN(secondInput) == true){
		firstInput = parseFloat(firstInput);
		var output = secondInput.repeat(firstInput);
		$("#output").html(output);
		$(".alert-danger").css("display", "none");
		$(".alert-success").css("display", "block");
	}
	else {
		$(".alert-success").css("display", "none");
		$(".alert-danger").css("display", "block");
			
	}
	
}
function clearValues(){
	var firstInput = document.getElementById("input1").value;
	var secondInput = document.getElementById("input2").value;
	$("#output").html('');
	$(".alert").css("display","none");
}