var mysteryNumber = Math.floor((Math.random() * 100) + 1),
	min = 0,
	max = 101;


var evaluateEntry = function() {

	var n = document.getElementById("numInput").value;

	if ( isNaN(n) || n < 1 || n > 100 || Math.floor(n) != n ) {
		document.getElementById("message").innerHTML = "Entrez un nombre entier entre 1 et 100 !";
		return;
	}

	if ( n == mysteryNumber ) {
		document.getElementById("message").innerHTML = "BRAVO !!!";
		document.getElementById("numInput").value = n;
		document.getElementById("numInput").setAttribute("disabled","disabled");
		document.getElementById("min").innerHTML = "";
		document.getElementById("max").innerHTML = "";
		return;
	} else if ( n < mysteryNumber ) {
		document.getElementById("message").innerHTML = n + " est trop petit.";
		min = Math.max(min,n);
		document.getElementById("min").innerHTML = "Plus grand que " + min;
	} else if ( n > mysteryNumber ) {
		document.getElementById("message").innerHTML = n + " est trop grand.";
		max = Math.min(max,n);
		document.getElementById("max").innerHTML = "Plus petit que " + max;
	}

	document.getElementById("numInput").value = "";
	document.getElementById("numInput").focus();

}

var keyHandler = function(e) {

	var key=e.keyCode || e.which;

	if (key==13) {
		evaluateEntry();
 	}

}

document.getElementById("numInput").addEventListener("keypress",keyHandler);
document.getElementById("numInput").focus();
