var numDiscs = 5;
var discs = [];
var discHeight = 0;
var discPos = [];
var pegHeight = 0;

function createDiscs (id, width) {
	this.width = width || "";
	this.peg = "left";
	this.id = id || "";
	this.top = discPos[id] || "";
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
	pegHeight = $("#pegLeft").outerHeight();
	var discWidth = $( "#pegLeft" ).outerWidth(true) * .95;
	var discWidthDif = discWidth / numDiscs;
	var discHeight = ((pegHeight)/numDiscs)*.9;
	determineDefaultDiscPositions(numDiscs, discHeight);
	for (a = 1; a < (numDiscs+1); a++) {
		discs[a] = new createDiscs(a, discWidth);
		$( "<div/>", {
  			"class": "disc",
 			"id": "peg"+a,
		}).css({
			"width" : discs[a].width+"px",
			"height" : discHeight+"px",
			"top" : discs[a].top+"px",
		}).appendTo( "#pegLeft" );
		discWidth = discWidth - discWidthDif;
	}
}

function determineDefaultDiscPositions(num, discHeight) {
	var discPosDif = 0;
	for (a = 1; a < (num+1); a++) {
		discPos[a] = pegHeight - discPosDif + (discHeight/2) + 1;
		discPosDif=discPosDif+discHeight;
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
	initiateGame();
}

function moveDisc() {

}

function checkWinner(){

}
