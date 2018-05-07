/*************** 
Created by Danila Chenchik: UNC Chapel Hill, Project Forever-home
***************/

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

//function to preload all the gifs, so that they don't slowly enter the game
var imageCount = 0;
function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
                imageCount++;
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

var allImages = [ "../images/scene1/LivingRoom-OpeningScene.gif",
				"../images/intro/OpeningScene1And2-merged-no-loop.gif",
				//"../images/intro/OpeningScenePart1-no-loop-try-1.gif",
				//"../images/intro/OpeningScenePart2-no-loop-try-1.gif",
				"../images/intro/Part3AfterBudgetPick-no-loop-try-1.gif",
				"../images/intro/Part3AfterBudgetPick-no-loop.gif",
				"../images/scene1/LivingRoom-OpeningScene-no-loop.gif",
				"../images/scene1/LivingRoom-Option1(Levelled).png",
				"../images/scene1/LivingRoom-CloudTransition.gif",
				"../images/scene1/KitchenTransition-no-loop.gif",
				"../images/scene1/LivingRoom-Option3(Lift).png",
				"../images/scene1/LivingRoom-Option2(Ramp).png",
				"../images/scene1/LivingRoom-Option4(NoCost)-no-loop.gif",
				"../images/scene2/Kitchen1-OpeningSceneMerged-no-loop-try-1.gif",
				"../images/scene2/Kitchen1-CloudTransition-no-loop-try-1.gif",
				"../images/scene2/Kitchen1-TransitiontoKitchen2-new-no-loop.gif",
				"../images/scene2/Kitchen1-Option1_light_lowered.png",
				"../images/scene2/Kitchen1-Option2_Phillips_Hue.png",
				"../images/scene2/Kitchen1-Option3_Alexa.png",
				"../images/scene2/Kitchen1-NoCost_string.png",
				"../images/scene3/KitchenScene2 - OpeningScene-merged-new-new-no-loop.gif",
				"../images/scene3/KitchenScene2-Cloud Transition.gif",
				"../images/scene2/Kitchen1-TransitiontoKitchen2-no-loop-try-1.gif",
				"../images/scene3/KitchenScene2 -  Option1(Change Table).jpg",
				"../images/scene3/KitchenScene2 - Option2(Grabber).jpg",
				"../images/scene3/KitchenScene2 - Option3(Bar)-new-new-no-loop.gif",
				"../images/scene3/KitchenScene2 - Option4(No Cost).jpg",
				"../images/scene4/Stairs-OpeningScene-new-no-loop.gif",
				"../images/scene4/Stairs-CloudTransition.gif",
				"../images/scene4/Stairs-CircleTransition-no-loop-new.gif",
				"../images/scene4/Stairs-Elevator.jpg",
				"../images/scene4/Stairs-Heaters.jpg",
				"../images/scene4/Stairs-Nest.jpg",
				"../images/scene4/Stairs-Blanket.jpg",
				"../images/scene5/FrontDoor-OpeningScene-no-loop.gif",
				"../images/scene5/FrontDoor-CloudTransition.gif",
				"../images/scene5/FrontDoor-CircleTransition-no-loop.gif",
				"../images/scene5/FrontDoor-SlideDoor.png",
				"../images/scene5/FrontDoor-DoorOperator.png",
				"../images/scene5/FrontDoor-Hook.png",
				"../images/scene5/FrontDoor-Hannah.png",
				"../images/scene2/KitchenTransition-no-loop.gif"];
preloadImages(allImages);

var sceneImages = [["../images/scene1/LivingRoom-OpeningScene-no-loop.gif",
					"../images/scene1/LivingRoom-CloudTransition.gif",
					"../images/scene1/KitchenTransition-no-loop.gif",
					"../images/scene1/LivingRoom-Option1(Levelled).png",
					"../images/scene1/LivingRoom-Option3(Lift).png",
					"../images/scene1/LivingRoom-Option2(Ramp).png",
					"../images/scene1/LivingRoom-Option4(NoCost)-no-loop.gif"
					],
					[
					"../images/scene2/Kitchen1-OpeningSceneMerged-no-loop-try-1.gif",
					"../images/scene2/Kitchen1-CloudTransition-no-loop-try-1.gif",
					"../images/scene2/KitchenTransition-no-loop.gif",
					"../images/scene2/Kitchen1-Option1_light_lowered.png",
					"../images/scene2/Kitchen1-Option2_Phillips_Hue.png",
					"../images/scene2/Kitchen1-Option3_Alexa.png",
					"../images/scene2/Kitchen1-NoCost_string.png"
					],
					[
					"../images/scene3/KitchenScene2 - OpeningScene-merged-new-new-no-loop.gif",
					"../images/scene3/KitchenScene2-Cloud Transition.gif",
					"../images/scene2/Kitchen1-TransitiontoKitchen2-no-loop-try-1.gif",
					"../images/scene3/KitchenScene2 -  Option1(Change Table).jpg",
					"../images/scene3/KitchenScene2 - Option2(Grabber).jpg",
					"../images/scene3/KitchenScene2 - Option3(Bar)-new-new-no-loop.gif",
					"../images/scene3/KitchenScene2 - Option4(No Cost).jpg"
					],
					[
					"../images/scene4/Stairs-OpeningScene-new-no-loop.gif",
					"../images/scene4/Stairs-CloudTransition.gif",
					"../images/scene4/Stairs-CircleTransition-no-loop-new.gif",
					"../images/scene4/Stairs-Elevator.jpg",
					"../images/scene4/Stairs-Heaters.jpg",
					"../images/scene4/Stairs-Nest.jpg",
					"../images/scene4/Stairs-Blanket.jpg"
					],
					[
					"../images/scene5/FrontDoor-OpeningScene-no-loop.gif",
					"../images/scene5/FrontDoor-CloudTransition.gif",
					"../images/scene5/FrontDoor-CircleTransition-no-loop.gif",
					"../images/scene5/FrontDoor-SlideDoor.png",
					"../images/scene5/FrontDoor-DoorOperator.png",
					"../images/scene5/FrontDoor-Hook.png",
					"../images/scene5/FrontDoor-Hannah.png"
					]];

function playGame(){
	//play the music at the 8 second start point
	audio.currentTime = 8;
	audio.play();

	//hide the play button
	var playButton = document.getElementById("playButtonContainer");
	playButton.style.display = "none";

	//set the intial first intro scene gif
	var mainImage = document.getElementById("imageSource");
	mainImage.src = "../images/intro/OpeningScene1And2-merged-no-loop.gif";

	//gif are max 28 seconds max on the program we use (moovly), so we need to play one right after the first one
	//setTimeout(function(){
	//	mainImage.src = "../images/intro/OpeningScenePart2-no-loop-try-1.gif";

		//then pop up the budget selection 7 seconds later
	//	setTimeout(function(){
	//		var budgetSelector = document.getElementById("budgetSelectionContainer");
	//		budgetSelector.style.display = "list-item";
	//	}, 7000);
	//}, 25000);
	setTimeout(function(){
		var budgetSelector = document.getElementById("budgetSelectionContainer");
		budgetSelector.style.display = "list-item";
	}, 37000);
}

function applyBudget(){
	//remove the budgetFieldContainer
	var budgetSelectionContainer = document.getElementById("budgetSelectionContainer");
	//budgetSelectionContainer.style.display = "none";

	var budgetField = document.getElementById("budgetNumberField");

	//apply this number to the budget, which is a global variable
	budget = budgetField.value;

	//remove the budget seclection thing after a 1/5th of a second
	setTimeout(function(){
		budgetSelectionContainer.style.display = "none";
	}, 200);
	
	//set main image to the last intro scene
	var mainImage = document.getElementById("imageSource");
	mainImage.src = "../images/intro/Part3AfterBudgetPick-no-loop.gif";
	setTimeout(function(){
		transition('buildingSourceContainer','buildingSource');
		mainImage.src = "../images/scene1/LivingRoom-OpeningScene-no-loop.gif";
		initialize();
	}, 8500); 

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
	}, 26000);
	//change scene 1 timing before buttons pop up here
}

//used for further cache optimization
var nextSceneSelector = 1;
function selectOption(option){

	if(option > 3){
		alert("Not a valid option");
		return;
	}

	buttonClicked = true;

	//display pop up of acquired metrics 
	displayMetricsPopup(option);

	//deploy the transition animation
	transition('buildingSourceContainer','buildingSource');

	//place the new item on the image
	placeItem(option);

	//switch the buttons
	//parameters = old buttons, new buttons
	switchButtons("optionsButtons", "nextSceneButtons", false);

	//refresh the metrics
	refreshMetrics(option);

	//save the selection
	pastSelection = option+1;

	//get the next next set of images for improved cache optimization
	if(nextSceneSelector < sceneImages.length){
		preloadImages(sceneImages[nextSceneSelector]);
		nextSceneSelector++;	
	}
}

function transition(transition, imageId){
	
	var container = document.getElementById(transition);
	var containerImage = document.getElementById(imageId);

	//decides whether to do a cloud transition or a transition made for switching scenes
	if(transition == 'buildingSourceContainer'){
		containerImage.src = currentNode.metadata.cloudTransition;	
	}else if (transition == 'switchingSourceContainer'){
		containerImage.src = currentNode.metadata.sceneTransition;
	}

	container.style.display = "inline";
	
	setTimeout(function(){
		container.style.display = "none";
	}, 1500);	
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

	//save what option we selected for this level, then increment the level
	savedOptions[currentLevel] = pastSelection;
	currentLevel++;
	console.log(savedOptions);

	//we've hit the end
	if(currentNode == null){
		var mainContainer = document.getElementById("mainImage");
		var endingContainer = document.getElementById("endingContainer");
		mainContainer.style.display = "none";
		endingContainer.style.display = "inline-block";

		//populate the button texts
		var tmpNode = tree.root;

		//populate button texts in a 10th of second
		setTimeout(function(){
		
			for(i = 0; i < 5; i++){
				tmpNode = tmpNode.children[0];
				for(var option = 1; option < 5; option++){
					var buttonText = document.getElementById('scene' + (i+1) + 'Option' + option);
					buttonText.innerHTML = tmpNode.metadata.buttonTexts[option-1].buttonText;
					console.debug(tmpNode);

					//set the background color to green if it wad the choice they selected
					if(savedOptions[i+1] == option){
						buttonText.style.backgroundColor = "#87d37c";
						buttonText.style.color = "white";
					}
				}
			}

		}, 100);
		
		return;
	}

	//pull up the transition animation for switching scenes
	//transition('switchingSourceContainer','switchingSource');

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

//execute loading bar functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
	var mainImage = document.getElementById("imageSource");
	mainImage.src = "../images/House.png";
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var frameCount = 0;
    var id = setInterval(frame, 100);
    var numDots = 1;
    function frame() {
        if (imageCount >= allImages.length) {
            clearInterval(id);
            showPlayButton();
        } else {
        	//logic to handle loading bar animation
            var toPercent = (imageCount/allImages.length)*100;
            elem.style.width = toPercent + '%';
            console.log("loaded image" + imageCount + "out of " + allImages.length);

            //logic to handle "dot dot dot" animation on loading text
            if(frameCount%300 == 0){

	            var loadingText = document.getElementById("loadingText");
				var textToAdd = "loading";
				for(var i = 0; i < numDots; i++){
					textToAdd = ". " + textToAdd + " ." ; 
				}
				loadingText.innerHTML = textToAdd;
				numDots+=1;
				numDots = numDots % 4;
			}
			frameCount += 100;
        }
    }
}, false);

function showPlayButton(){
	var playButtonContainer = document.getElementById("playButtonContainer");
	var loadingContainer = document.getElementById("loadingContainer");

	playButtonContainer.style.display = "block";
	loadingContainer.style.display = "none";
}

