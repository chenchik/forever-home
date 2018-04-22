/* 
state protocol
0 = transiton state
1 = start state / first scenario
2 = second scenario
3 = third scenario
4 = fourth scenario
5 = fifth scenario
*/

/*
transition protocol
0 = switching scenes
1 = builing something 
*/
var currentState = 1;
var currentTransition = 1;

var currentNode = tree.root.children[0];

//saved options represents the options that were selcted at each level
//keys are the the level, values are the options slected at that level
//keys are 1 for level 1, 2 for level 2 
//default is option 0
var savedOptions = {1:0, 2:0, 3:0, 4:0, 5:0};

//this represents the current level we are doing;
//1 is the first level
var currentLevel = 1;

// this variable saves which option the user chose
// 0 is just a temporary value
var pastSelection = 0;
var buttonClicked = false;

//budget to represent 
var budget = 1000;
var functionality = 0;
var potentialFunctionality = 0;
var maxFunctionalityPerRound = 5;
var aesthetic = 0;
var potentialAesthetic = 0;
var maxAestheticPerRound = 5;

//audio object, load it to make sure it'll be ready when we need it
var audio = new Audio('../sound/cocktail-party.mp3');
audio.load();

/* 
reference stuff inside of nodes in this way:

console.log(currentNode.data);
console.log(currentNode.metadata);
console.log(currentNode.metadata.id);
console.log(currentNode.metadata.scene);
console.log(currentNode.metadata.buttonTexts[0].buttonText);
console.log(currentNode.metadata.buttonTexts[0].optionImageSource);

*/

function playGame(){
	//play the music at the 8 second start point
	audio.currentTime = 8;
	audio.play();

	//hide the play button
	var playButton = document.getElementById("playButtonContainer");
	playButton.style.display = "none";

	//set the intial first intro scene gif
	var mainImage = document.getElementById("imageSource");
	mainImage.src = "../images/intro/OpeningScenePart1-no-loop-try-1.gif";

	//gif are max 28 seconds max on the program we use (moovly), so we need to play one right after the first one
	setTimeout(function(){
		mainImage.src = "../images/intro/OpeningScenePart2-no-loop-try-1.gif";

		//then pop up the budget selection 7 seconds later
		setTimeout(function(){
			var budgetSelector = document.getElementById("budgetSelectionContainer");
			budgetSelector.style.display = "list-item";
		}, 7000);
	}, 30000);

}

function applyBudget(){
	//remove the budgetFieldContainer
	var budgetSelectionContainer = document.getElementById("budgetSelectionContainer");
	budgetSelectionContainer.style.display = "none";

	var budgetField = document.getElementById("budgetNumberField");

	//apply this number to the budget, which is a global variable
	budget = budgetField.value;
	
	//set main image to the last intro scene
	var mainImage = document.getElementById("imageSource");
	mainImage.src = "../images/intro/Part3AfterBudgetPick-no-loop-try-1.gif";
	setTimeout(function(){
		transition('buildingSourceContainer');
		mainImage.src = "../images/scene1/LivingRoom-OpeningScene-no-loop.gif";
		initialize();
	}, 10000); 

}


//initialize, self executing function
function initialize(){
	setTimeout(function(){
		var buttonDiv = document.getElementById("optionsButtons");
		buttonDiv.style.display = "list-item";

		var metrics = document.getElementById("metricsContainer");
		metrics.style.display = "inline";

		refreshButtons();
		refreshBudget();
		refreshFunctionality();
		refreshAesthetic();

		//initialize buttons so that when you mouseover the option gets displayed, 
		//on mouseout, we hide the option again
		//addButtonListeners(); 
		//create a time attribute for each node
	}, 20000);
}

//need to clear cache whenever we make a new run of the game
/*function clearThatCache()
{
  location.reload(true);
}
window.onbeforeunload = clearThatCache;*/



function selectOption(option){

	if(option > 3){
		alert("Not a valid option");
		return;
	}

	buttonClicked = true;

	//display pop up of acquired metrics 
	displayMetricsPopup(option);

	//deploy the transition animation
	transition('buildingSourceContainer');

	//place the new item on the image
	placeItem(option);

	//switch the buttons
	//parameters = old buttons, new buttons
	switchButtons("optionsButtons", "nextSceneButtons", false);

	//refresh the metrics
	refreshMetrics(option);

	//save the selection
	pastSelection = option;

}

function transition(transition){
	
	var container = document.getElementById(transition);
	container.style.display = "inline";

	//decides whether to do a cloud transition or a transition made for switching scenes
	if(transition == 'buildingSourceContainer'){
		container.src = currentNode.metadata.cloudTransition;	
	}else if (transition == 'switchingSourceContainer'){
		container.src = currentNode.metadata.sceneTransition;
	}
	
	setTimeout(function(){
		container.style.display = "none";
	}, 2000);	
}

function placeItem(option){
	// we can extract what image we need to use for modification for
	// the house with the option parameter
	var itemContainer = document.getElementById("itemContainer");
	var itemPicture = document.getElementById("itemSource");

	//set the source of the item picture 
	itemPicture.src = currentNode.metadata.buttonTexts[option].optionImageSource;

	//make it actually show up
	itemContainer.style.display = "inline";
}

function displayMetricsPopup(option){

	var container = document.getElementById("metricsPopupContainer");
	container.style.display = "block";
	refreshMetricsPopup(option);

	setTimeout(function(){
		container.style.display = "none";
	}, 5000);
}

function removeItem(){
	var itemContainer = document.getElementById("itemContainer");
	itemContainer.style.display = "none";
}

function switchButtons(oldButtons, newButtons, introSceneNext){
	var oldB = document.getElementById(oldButtons);
	var newB = document.getElementById(newButtons);

	oldB.style.display = "none";
	//if we are about to do an intro to the next scene, pause however long 
	// the scene dictates before we place the new buttons
	if(introSceneNext){
		setTimeout(function(){
			newB.style.display = "block";
		}, currentNode.metadata.introSceneTime);
	}else{
		newB.style.display = "block";
	}
	
}

function nextScene(){
	//this will get the child which was associated with the previous selection
	//currentNode = currentNode.children[pastSelection];
	//only one child 
	currentNode = currentNode.children[0];

	//we've hit the end
	if(currentNode == null){
		var mainContainer = document.getElementById("mainImage");
		var endingContainer = document.getElementById("endingContainer");
		mainContainer.style.display = "none";
		endingContainer.style.display = "inline-block";
		return;
	}

	//pull up the transition animation for switching scenes
	transition('switchingSourceContainer');

	//change the scene image
	var sceneImage = document.getElementById('imageSource');
	sceneImage.src = currentNode.metadata.scene;

	//change back to the options buttons
	switchButtons("nextSceneButtons", "optionsButtons", true);

	//assign the new text to all the buttons
	refreshButtons();

	//remove the item from the scene
	var itemContainer = document.getElementById("itemContainer");
	itemContainer.style.display = "none";

	//save what option we selected for this level, then increment the level
	savedOptions[currentLevel] = pastSelection;
	currentLevel++;
	console.log(savedOptions);

	buttonClicked = false;

}

function refreshButtons(){
	var button1 = document.getElementById('button1');
	var button2 = document.getElementById('button2');
	var button3 = document.getElementById('button3');
	var button4 = document.getElementById('button4');
	button1.innerHTML = currentNode.metadata.buttonTexts[0].buttonText 
	+ "<br>Cost: <span style='color: #2ECC71;'>$" + currentNode.metadata.buttonTexts[0].cost + "</span>";

	button2.innerHTML = currentNode.metadata.buttonTexts[1].buttonText
	+ "<br>Cost: <span style='color: #2ECC71;'>$" + currentNode.metadata.buttonTexts[1].cost + "</span>";

	button3.innerHTML = currentNode.metadata.buttonTexts[2].buttonText
	+ "<br>Cost: <span style='color: #2ECC71;'>$" + currentNode.metadata.buttonTexts[2].cost + "</span>";

	button4.innerHTML = currentNode.metadata.buttonTexts[3].buttonText
	+ "<br>Cost: <span style='color: #2ECC71;'>$" + currentNode.metadata.buttonTexts[3].cost + "</span>";
}

function refreshMetrics(option){
	//change the budget
	budget -= currentNode.metadata.buttonTexts[option].cost;
	refreshBudget();

	//update functionality metric
	functionality += currentNode.metadata.buttonTexts[option].functionality;
	potentialFunctionality += maxFunctionalityPerRound;
	refreshFunctionality();

	//update aesthetic metric
	aesthetic += currentNode.metadata.buttonTexts[option].aesthetic;
	potentialAesthetic += maxAestheticPerRound;
	refreshAesthetic();
}

function refreshBudget(){
	var displayBudgetElement = document.getElementById('budgetNumber');
	displayBudgetElement.innerHTML = " $" + budget;
	
	//warning and out of money color indicators
	if(budget < 1){
		displayBudgetElement.style.color = "#EF4836";
	}else if(budget < 100){
		displayBudgetElement.style.color = "#F5AB35";
	}
}

function refreshFunctionality(){
	var displayFunctionalityElement = document.getElementById('functionalityNumber');
	var fullFuncString = " " + functionality + "/" + potentialFunctionality;

	//old logic
	//append as many icons as you need for functionality
	//make it look different dpeneding on the amount 
	/*if(functionality > 4){
		fullFuncString += '<span class="glyphicon glyphicon-cog"></span> ';
		fullFuncString += '* ' + functionality;
	}else{
		for(var i = 0; i < functionality; i++){
			fullFuncString += '<span class="glyphicon glyphicon-cog"></span> ';
		}	
	}*/

	displayFunctionalityElement.innerHTML = fullFuncString;
}

function refreshAesthetic(){
	var displayAestheticElement = document.getElementById('aestheticNumber');
	var fullAesString = " " + aesthetic + "/" + potentialAesthetic;
	
	//old logic
	//append as many icons as you need for aesthetics
	//make it look different depending on the amount
	/*if(aesthetic > 4){
		fullAesString += '<span class="glyphicon glyphicon-star"></span> ';
		fullAesString += '* ' + aesthetic;
	}else{
		for(var i = 0; i < aesthetic; i++){
			fullAesString += '<span class="glyphicon glyphicon-star"></span> ';
		}	
	}*/

	displayAestheticElement.innerHTML = fullAesString;
}

function refreshMetricsPopup(option){
	var popupCostNum = document.getElementById("metricsPopupCostNumber");
	var popupFuncNum = document.getElementById("metricsPopupFunctionalityNumber");
	var popupAesNum = document.getElementById("metricsPopupAestheticNumber");

	popupCostNum.innerHTML = " $" + currentNode.metadata.buttonTexts[option].cost;
	popupFuncNum.innerHTML = " " + currentNode.metadata.buttonTexts[option].functionality + "/" + maxFunctionalityPerRound;
	popupAesNum.innerHTML = " " + currentNode.metadata.buttonTexts[option].aesthetic + "/" + maxAestheticPerRound;
}

function onMouseOverButtonListener(option){
	var itemContainer = document.getElementById("itemContainer");
	itemContainer.style.zIndex = "0";
	placeItem(option);
}
function onMouseOutButtonListener(option){
	//only perform event listening if we we are hovering over
	if(!buttonClicked){
		var itemContainer = document.getElementById("itemContainer");
		itemContainer.style.zIndex = "1";
		removeItem();
	}
}

