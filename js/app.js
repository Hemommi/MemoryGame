/*List that holds all cards*/
let moves = 0;
var scorePanel = document.getElementsByClassName("score-panel");
var star = 0;
var star1 = $('#star1');
var star2 = $('#star2');
var star3 = $('#star3');
var moveCount = $('.moves');
var isGameFinished = false;
var secondsFromStart = 1;
let cards = document.getElementsByClassName("card");
let icons = [
	"fas fa-chess-pawn",
	"fas fa-chess-pawn",
	"fas fa-bicycle",
	"fas fa-bicycle",
	"fas fa-anchor",
	"fas fa-anchor",
	"fas fa-camera-retro",
	"fas fa-camera-retro",
	"fas fa-car",
	"fas fa-car",
	"fas fa-binoculars",
	"fas fa-binoculars",
	"fas fa-birthday-cake",
	"fas fa-birthday-cake",
	"fas fa-bomb",
	"fas fa-bomb"];

// Shuffle function from http://stackoverflow.com/a/2450976
function resetStars(){
	moves = 0;
	moveCount.text(moves);
	star1.show();
	star2.show();
	star3.show();
}	

function shuffle(array) 
{
	var currentIndex = array.length, temporaryValue, randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}		

/*Score panel*/
function scorePanelMoves(){
	scorePanel.innerHTML = moves;
	moves++;
	moveCount.text(moves);

	if(moves > 6 && moves < 9){
		star1.show();
		star2.show();
		star3.hide();
	}else if (moves >10){
		star1.show();
		star2.hide();
		star3.hide();
	}
}
function hideCard(myCard){
	//$(myCard).removeClass('pulse animated');
	$(myCard).removeClass("open show");
}
function finishGame(){
	isGameFinished = true;
	swal("Good job!", "You finished in " + secondsFromStart + "s!", "success");
}

function cardClicked(event){
	var card = event.currentTarget;
	var isOpen = $(card).hasClass("open");
	scorePanelMoves();

	if(isOpen){
		//do nothing
	}else {
		var openedCards = $(".open");
		var matchedCards = $(".match");
		//open card
		$(card).addClass("open show");
		
		var clickedChild = $(card).children()[0];
		var clickedChildClass = clickedChild.getAttribute("class");
		var isMatched = false;
	
		for(var i = 0; i < openedCards.length; i++ ){
			var openedCard = openedCards[i];
			var openedCardChild = $(openedCard).children()[0];
			var openedCardChildClass = openedCardChild.getAttribute("class");
			
			if(openedCardChildClass === clickedChildClass){
				isMatched = true;
				$(card).addClass("match");
				$(openedCard).addClass("match");

				//check if game is finished
				if(cards.length == $(".match").length){
					finishGame();
				}else{
					resetStars();
				}
			}
		}

		if(isMatched === false && (openedCards.length - matchedCards.length )> 0){
			$(card).addClass('pulse animated')
			//https://stackoverflow.com/questions/1190642/how-can-i-pass-a-parameter-to-a-settimeout-callback
			window.setTimeout(hideCard.bind(null, card), 500);
		}
	}
}	

shuffle(icons);

/*Add event listeners to each card*/
for (i=0; i<cards.length; i++) {
	cards[i].addEventListener("click", cardClicked);
	$(cards[i]).append("<i class = '" + icons[i] + "'></i>");
};

 /*Reset button*/
 document.getElementsByClassName("reload-button")[0].addEventListener("click", function(){
	location.reload();
 });

 function updateTime(){
	if(isGameFinished === false){
		window.setTimeout(updateTime, 1000);
	}
	$('#total-time').text(secondsFromStart);
	secondsFromStart++;	
 }

 window.setTimeout(updateTime, 1000);

