/*List that holds all cards*/
	let cards = document.getElementsByClassName("card");
	let card = [...cards];

/* Add event listeners to each card. Set up the event listener for a card. If a card is clicked*/
	
	for (i=0; i<cards.length; i++) {
		cards[i].addEventListener("click", cardClicked);
	};

	function cardClicked(event){
		var card = event.currentTarget;
		var isOpen = $(card).hasClass("open");

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
				}
			}

				if(isMatched === false && (openedCards.length - matchedCards.length )> 0){
					$(card).removeClass("open show");
				}
				
			}

		
		//alert("Clicked isOpen=" +isOpen);

		var isShow = $(card).hasClass("show");
			//alert("Clicked isShow=" +cards);

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

	//var deck = document.querySelector(".deck");
	//function start() {
		//var shuffleAllCards = shuffle(cards);
		//for (var i=0; i < shuffleAllCards; i++){
		//[].forEach.call(shuffleAllCards, function(){
			//deck.appendChild(card);
		//});
	//}

/*Reset button*/
	document.getElementsByClassName("reload-button").onclick = function (){
		document.getElementsByClassName("reload-button").reset();
	};

/*Score panel*/
	var scorePanel = getElementsByClassName("score-panel");
	var i;
	function scorePanel(){
		scorePanel.innerHTML = moves;
		moves++;

		if(moves > 6 && moves < 9){
			for (i = 0; i <= 3; i++){
				stars.style.display = "collapse";
			}
		}else if (moves >10){
			for(i = 0; i <= 3; i++){
				stars.style.display = "collapse";
			}
		}
	}
}
