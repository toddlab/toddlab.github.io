var numDiscs = 5;
var numMoves = 0;
var discs = [];
var discHeight = 0;
var clickEventType = detectmob()? 'touchstart':'click';
var discSelected = false;
var selectedDisc = '';
var selectedPeg = '';

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
		},1000)
		discWidth = discWidth - discWidthDif;
		discPosDif = discPosDif + discHeight;
	}
	$("#pegLeftWrapper").on(clickEventType,function(e) {pegClickEvent(e);}).hover(hoverIn,hoverOut);
	$("#pegMiddleWrapper").on(clickEventType,function(e) {pegClickEvent(e);}).hover(hoverIn,hoverOut);
	$("#pegRightWrapper").on(clickEventType,function(e) {pegClickEvent(e);}).hover(hoverIn,hoverOut);
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

function pegClickEvent(e) {
	var elm = $(e.currentTarget).find(".peg");
	var peg = $(elm).attr('id');
	var disc = $('#'+peg+' .disc').last();
	if (discSelected){
		if (peg != selectedPeg) {
			moveDisc(elm);
		}
		unhighlightDisc(selectedDisc); 
		selectedPeg = '';
		selectedDisc = '';
		discSelected = false;
		$(".peg").removeClass('pegHighlighted');
	} else if (disc.length) {
		discSelected = true;
		selectedPeg = peg;
		selectedDisc = disc;
	}
}

function hoverIn(e){
	var elm = $(e.currentTarget).find(".peg");
	var peg = $(elm).attr('id');
	var disc = $('#'+peg+' .disc').last();
	if (discSelected) {
		if (peg != selectedPeg){
			$(".peg").removeClass('pegHighlighted');
			highlightPeg(elm);
		}
	} else {
		highlightDisc(disc);
	}
}

function hoverOut(e){
	var elm = $(e.currentTarget).find(".peg");
	var peg = $(elm).attr('id');
	var disc = $('#'+peg+' .disc').last();
	if (discSelected == false) {
		unhighlightDisc(disc);
	}
}

function highlightPeg(e) {
	$(e).addClass('pegHighlighted');
}

function unhighlightPeg(e) {
	$(e).removeClass('pegHighlighted');
}

function highlightDisc(e) {
	$(e).addClass('discHighlighted');
}

function unhighlightDisc(e) {
	$(e).removeClass('discHighlighted');
}

function moveDisc(peg) {
	numMoves++;
	var elm = $(selectedDisc).detach();
	$(peg).append(elm);
	var win = checkWinner();
	if (win){
		alert("You Win!");
	}
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



function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
};
