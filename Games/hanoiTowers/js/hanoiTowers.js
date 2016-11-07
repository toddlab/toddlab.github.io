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
	var discWidth = $( "#pegLeft" ).outerWidth() * .95;
	var discWidthDif = discWidth / numDiscs;
	for (a = 1; a < (numDiscs+1); a++) {
		discs[a] = new createDiscs(a, discWidth);
		$( "<div/>", {
  			"class": "disc",
 			"id": "peg"+a,
		}).css({
			"width" : discs[a].width+"px",
		}).appendTo( "#pegLeft" );
		discWidth = discWidth - discWidthDif;
	}
}

function animateCreateDisc(id) {

}


function discSubmit(inp) {
	$( ".disc" ).remove();
	numDiscs = inp;
	initiateGame();
}

function loadPage() {
	$( "#discSubmit" ).click(function() {
		discSubmit($( "#numDiscs" ).val());
	});
}

function moveDisc() {

}

function checkWinner(){

}
