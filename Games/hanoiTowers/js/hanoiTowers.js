var numDiscs = 0;

function disc (id) {
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

function askForNumDiscs() {
	numDiscs = prompt("How many discs do you want?", "0");
}

function initiate(){
	askForNumDiscs();
	for (a = 0; a < numDiscs; a++) {
		disc(a);
	}
}
