var numDiscs = 5;
var discs = [];
var discHeight = 0;

$.wait = function(ms) {
    var defer = $.Deferred();
    setTimeout(function() { defer.resolve(); }, ms);
    return defer;
};

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
	discHeight = ((pegHeight)/numDiscs)*.9;
	var discPosDif = discHeight;
	for (a = 1; a < (numDiscs+1); a++) {
		discs[a] = new createDiscs(a, discWidth, (pegHeight - discPosDif), (discWidth/2-15));
		$( "<div/>", {
  			"class": "disc",
 			"id": "peg"+a,
		}).css({
			"width" : discs[a].width+"px",
			"height" : discHeight+"px",
			"left" : "-"+discs[a].left+"px",
			"top" : "-100px",
		}).appendTo( "#pegLeft" ).animate({
			"top" : discs[a].top+"px",
		},1000);
		discWidth = discWidth - discWidthDif;
		discPosDif = discPosDif + discHeight;
	}
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

function selectDisc () {
	
}

$(".peg").hover(
	function () {
		if($(this).first()) {
			$(this).first().addClass('discHighlighted');
		}
	}, 
	function () {
		if($(this).first()) {
			$(this).first().removeClass('discHighlighted');
		}
	}
);

function moveDisc(elm, peg) {
	animateDiscUp(elm);
	animateDiscDown(elm, peg);
	elm.peg = peg;
}

function animateDiscUp (elm) {
	var topPeg = $('#pegWrapper').position().top - discHeight;
	var discPos = $(elm).position().top;
    $(elm).slideUp(500);
}

function animateDiscDown (elm, peg) {
	var topPeg = -discHeight;
	var discPos = $(elm).top;
	$(elm).css({

	}).appendTo(peg);
    $(elm).slideDown(500);
}

function checkWinner(){

}
