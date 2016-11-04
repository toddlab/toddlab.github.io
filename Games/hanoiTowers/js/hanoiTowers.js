var numDiscs = 5;
var discs = [];

function createDiscs (id) {
	this.width = "";
	this.peg = "left";
	this.id = id || "";
}

function createCSS(newCss) {
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = newCss;
	document.getElementsByTagName('head')[0].appendChild(style);
	document.getElementById('someElementId').className = 'cssClass';
}

function initiate(){
	$( "#discSubmit" ).click(function() {
 		$( this ).discSubmit($("#numDiscs").val());
	});
	for (a = 0; a < numDiscs; a++) {
		var disc[a] = new createDiscs(a);
	}
}

function discSubmit(inp) {
	numDiscs = inp;
}
