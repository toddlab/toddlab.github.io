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

function initiateGame(){
	discs.length = 0;
	for (a = 0; a < numDiscs; a++) {
		discs[a] = new createDiscs(a);
	}
}

function discSubmit(inp) {
	numDiscs = inp;
	initiateGame();
}

function loadPage() {
	$( "#discSubmit" ).click(function() {
		discSubmit($("#numDiscs").val());
	});
	initiateGame();
}
