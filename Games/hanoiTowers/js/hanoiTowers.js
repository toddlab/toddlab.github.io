var numDiscs = 5;
var discs = [];

function createDiscs (id, width) {
	this.width = width || "";
	this.peg = "left";
	this.id = id || "";
	this.top = "";
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
	var discWidth = $( "#pegLeft" ).width() * .95;
	var discWidthDif = discWidth / numDiscs;
	for (a = 1; a < (numDiscs+1); a++) {
		discs[a] = new createDiscs(a, discWidth);
		$( "<div/>", {
  			"class": "disc",
 			"id": "peg"+a,
			}).appendTo( "#pegLeft" );
		discWidth = discWidth - discWidthDif;
	}
}

function animateCreateDisc(id) {

}


function discSubmit(inp) {
	numDiscs = inp;
	initiateGame();
}

function loadPage() {
	$( "#discSubmit" ).click(function() {
		discSubmit($( "#numDiscs" ).val());
	});
	initiateGame();
}

function moveDisc() {

}

function checkWinner(){

}
