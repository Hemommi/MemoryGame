/*List that holds all cards*/
let moves = 0;
var scorePanel = document.getElementsByClassName("score-panel");
var star = 0;
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

	if(moves > 6 && moves < 9){
		for (star = 0; star <= 3; star++){
			stars.style.display = "collapse";
		}
	}else if (moves >10){
		for(star = 0; star <= 3; star++){
			stars.style.display = "collapse";
		}
	}
}

function cardClicked(event){
	var card = event.currentTarget;
	var isOpen = $(card).hasClass("open");
	//scorePanelMoves();

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
				moves = 0;
			}
		}

		if(isMatched === false && (openedCards.length - matchedCards.length )> 0){
			$(card).removeClass("open show");
		}
	}
}	

shuffle(icons);

/* Add event listeners to each card. Set up the event listener for a card. If a card is clicked*/
for (i=0; i<cards.length; i++) {
	cards[i].addEventListener("click", cardClicked);
	$(cards[i]).append("<i class = '" + icons[i] + "'></i>");
};

 /*Reset button*/
 document.getElementsByClassName("reload-button")[0].addEventListener("click", function(){
	location.reload();
 });
//document.getElementsByClassName("reload-button").onclick = function (){
//	alert("dupa");
//document.getElementsByClassName("reload-button").reset();
//};
