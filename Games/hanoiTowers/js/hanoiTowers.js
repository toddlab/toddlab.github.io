var numDiscs = 5;
var discs = [];
var discHeight = ;
var discPos = [];

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
	var discWidth = $( "#pegLeft" ).outerWidth(true) * .95;
	var discWidthDif = discWidth / numDiscs;
	for (a = 1; a < (numDiscs+1); a++) {
		discs[a] = new createDiscs(a, discWidth);
		$( "<div/>", {
  			"class": "disc",
 			"id": "peg"+a,
		}).css({
			"width" : discs[a].width+"px",
			"height" : discHeight+"px",
		}).appendTo( "#pegLeft" );
		discWidth = discWidth - discWidthDif;
	}
}

function determineDefaultDiscPositions(num) {
	discHeight = (($("#pegLeft").position().top + $("#pegLeft").offset().top + $("#pegLeft").outerHeight(t‌​rue))/numDiscs)*90;
	var discPosDif = 0;
	for (a = 1; a < (num+1); a++) {
		discPos[a] = $("#pegLeft").position().top + $("#pegLeft").offset().top + $("#pegLeft").outerHeight(t‌​rue)-discPosDif;
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
