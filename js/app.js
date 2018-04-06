/*
 * Create a list that holds all of your cards
 */
	let card = document.getElementsByClassName("card");
	let cards = [
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

/*
 * Add event listeners to each card. Set up the event listener for a card. If a card is clicked
 */
	for (i=0; i<cards.length; i++) {
		cards[i].addEventListener("click", displayCard);
	};
/*
 * Display the cards on the page
 */
function toggleCard(){
	if (openedCards.length === 0){
		$(this).toggleClass ("open");
		openedCards[];
	}else if(openedCards.length === 1){
		$(this).toggleClass ("hide");
		closesCards[];
	}
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) 
	{var currentIndex = array.length, temporaryValue, randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

/* Deck cards in game*/
var deck = document.querySelector(".deck");
function start() {
	var shuffleAllCards = shuffle(cards);
	for (var i=0; i < shuffleAllCards; i++){
		[].forEach.call(shuffleAllCards, function(){
			deck.appendChild(card);
		});
	}

}
/*
 * :
 *  - display the card's symbol (put this functionality in another function that you call from this one)
/*
 * Add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 * if the list already has another card, check to see if the two cards match
 */
	function cardOpen() {
		openedCard.push(this);
		var cardList = openCards.length;
		if(cardList === 2) {
			moveCounter();
			if(openedCards[0].type ===openedCards[1].type){
				matched();
			} else {
				unmached();
			}
		}
	}; 
/*
 *if the two cards match
 */
function matched (){
	openedCards[0].classList.add("match");
	openedCards[1].classLIst.add("match");
	openedCards[0].classList.remove("show", "open");
	openedCards[1].classLIst.remove("show", "open");
	openedCards = [];
	};
/*
 *If the cards do not match
 */
function unmatched(){
	openedCards[0].classList.add("unmatched");
	openedCards[1].classList.add("unmatched");
	openedCards[0].classList.remove("show", "open", "hide");
	openedCards[1].classList.remove("show", "open", "hide");
	closedCards = [];
};

 *    + 
 *    + 
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
