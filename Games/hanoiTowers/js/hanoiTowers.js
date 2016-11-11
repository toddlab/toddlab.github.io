var numDiscs = 5;
var discs = [];

function createDiscs (id, width, top, left) {
	this.width = width || "";
	this.peg = "left";
	this.id = id || "";
	this.top = top || "";
	this.left = left || "";
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
	var pegHeight = $("#pegLeft").outerHeight();
	var discWidth = $( "#pegLeft" ).outerWidth(true) * .95;
	var discWidthDif = discWidth / numDiscs;
	var discHeight = ((pegHeight)/numDiscs)*.9;
	var disPosDif = discHeight;
	for (a = 1; a < (numDiscs+1); a++) {
		discs[a] = new createDiscs(a, discWidth, (pegHeight - discPosDif), (discWidth/2-15));
		$( "<div/>", {
  			"class": "disc",
 			"id": "peg"+a,
		}).css({
			"width" : discs[a].width+"px",
			"height" : discHeight+"px",
			"top" : discs[a].top+"px",
			"left" : "-"+discs[a].left+"px",
		}).appendTo( "#pegLeft" );
		discWidth = discWidth - discWidthDif;
		discPosDif = discPosDif + discHeight;
	}
}

function animateCreateDisc(id) {

}


function discSubmit(inp) {
	$( ".disc" ).remove();
	numDiscs = parseInt(inp);
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
