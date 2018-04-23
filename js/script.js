document.getElementById("calculate-button"). onclick = function(){

	//Colect numbers inside the input boxes
	let elem1 = document.getElementById('elem-1');
	let elem2=document.getElementById('elem-2');

	let choice = document.querySelector('input[name="operation"]:checked');

	let val1 = parseInt(elem1.value);
	let val2 = parseInt(elem2.value);

	let operation = (choice.value);
	let operationResult = getResult (val1, val2, operation);

	//Display result inside element with id "result"
	if (isNaN(operationResult)) {
			alert('VocÊ precisa digitar um valor :)');
	} else {
	let resultElement = document.getElementById('result');
		resultElement.innerText = operationResult;
	}
}
		

//Return the result of an operation over two numbers.
function getResult (val1, val2, operation) {
		if (operation === '+') {
			return val1 + val2;
		} else if (operation === '-') {
			return val1 - val2;
		} else if (operation === '*') {
			return val1 * val2;
		} else if (operation === '/') {
			return val1 / val2;
		}
}



	//console tests
	console.log(val1);
	console.log(val2);
	console.log(operation);
	console.log(isNaN);
