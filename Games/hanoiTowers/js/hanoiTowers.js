var numDiscs = 5;
var numMoves = 0;
var discs = [];
var topPositions = [];
var discHeight = 0;
var clickEventType = detectmob()? 'touchstart':'click';
var discSelected = false;
var selectedDisc = '';
var selectedPeg = '';
var newDiscTopPos = 0;

function initiateGame(){
	topPositions.length = 0;
	var pegHeight = $("#pegLeft").outerHeight();
	var discWidth = $( "#pegLeft" ).outerWidth(true) * .95;
	var discWidthDif = discWidth / numDiscs;
	discHeight = ((pegHeight)/numDiscs)*.9;
	var discPosDif = discHeight;
	for (a = 1; a < (numDiscs+1); a++) {
		topPositions[a] = pegHeight - discPosDif;
		var newDisc = $( "<div/>", {
  			"class": "disc",
 			"id": a,
		}).css({
			"width" : discWidth+"px",
			"height" : discHeight+"px",
			"left" : "-"+(discWidth/2-15)+"px",
			"top" : "-100px",
			//"display" : "none",
		});
		moveDiscCorrectly(newDisc, $("#pegLeft"));
		animateDiscDown(newDisc, topPositions[a]);
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
	var disc = $("#"+peg+" .disc").first();
	if (discSelected){
		if (peg != selectedPeg) {
			preMoveDisc(elm);
		}
		unhighlightDisc(selectedDisc); 
		selectedPeg = '';
		selectedDisc = '';
		discSelected = false;
		$(".peg").removeClass("pegHighlighted");
	} else if (disc.length) {
		if( $(disc).hasClass( "discHighlighted") == false) {
			highlightDisc(disc);
		}
		discSelected = true;
		selectedPeg = peg;
		selectedDisc = disc;
	}
}

function hoverIn(e){
	var elm = $(e.currentTarget).find(".peg");
	var peg = $(elm).attr('id');
	var disc = $('#'+peg+' .disc').first();
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
	var disc = $('#'+peg+' .disc').first();
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

function preMoveDisc(peg) {
	var elm = $(selectedDisc);
	var pegDiscs = $(peg).find(' .disc');
	//Check to see if discs already exist
	if (pegDiscs.length > 0) {
		var firstPegID = pegDiscs.first().attr('id');
		newDiscTopPos = topPositions[pegDiscs.length+1];
		//Check correct size of discs
		if (elm.attr('id') > firstPegID) {
			runAnimatations(elm, peg, newDiscTopPos);
			numMoves++;
		} else {
			illegalMove();
		}
	} else {
		newDiscTopPos = topPositions[1];
		runAnimatations(elm, peg, newDiscTopPos);
		numMoves++;
	}
	// Check to see if won
	setTimeout(function(){
		if (checkWinner()){
			if (confirm('You Won in '+numMoves+' moves!!  Would you like to play again?')) {
    			// Play again
    			discSubmit(numDiscs);
			} else {
			// No more fun
			}
		}
	},1800)
}

function moveDiscCorrectly(elm, peg) {
	elm.detach();
	if ($(peg).find(".disc").length > 0) {
		$(elm).insertBefore($(peg).find(".disc").first());
	} else {
		$(elm).appendTo($(peg));
	}
}

function animateDiscUp(elm) {
	$(elm).animate({"top" : "-60px"},400);
	$(elm).animate({"display" : "none"},100);
}

function animateDiscDown (elm, topPos) {
	$(elm).animate({"display" : "block"},100);	
	$(elm).animate({"top" : topPos+"px"},400);
	unhighlightDisc(elm);
}

function runAnimatations(elm, peg, topPos) {
	animateDiscUp(elm);
	setTimeout(function(){
		moveDiscCorrectly(elm, peg);
		animateDiscDown(elm, topPos);
	},550); 
}

function illegalMove(){
	var leftPos = $(selectedDisc).position().left;
	$(selectedDisc).animate({"left": leftPos-10+"px"},100);
	$(selectedDisc).animate({"left": leftPos+10+"px"},100);
	$(selectedDisc).animate({"left": leftPos-10+"px"},100);
	$(selectedDisc).animate({"left": leftPos+"px"},100);
}

function checkWinner(){
	if ($("#pegRight").find(".disc").length == numDiscs) {
		return true;
	} else {
		return false;
	} 
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
