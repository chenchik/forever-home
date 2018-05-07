/*************** 
Created by Samantha Petrie, Danila Chenchik: UNC Chapel Hill, Project Forever-home
***************/

function assignOptionNames(scene, option){
	var offset = option - 1;
	var currentNode = tree.root

	for(i = 0; i < scene; i++){
		currentNode = currentNode.children[0];
	}

	var buttonText = document.getElementById('scene' + scene + 'Option' + option);
	buttonText.innerHTML = currentNode.metadata.buttonTexts[offset].buttonText;
}

function changeEndingScene(scene, option){

	//-1 represents dummy value, meaning the user clicked on the scene, but not a particular option
	if(option == -1){
		option = savedOptions[scene]+1;
	}

	//find the node we need from the tree
	var offset = option - 1;
	var currentNode = tree.root

	for(i = 0; i < scene; i++){
		currentNode = currentNode.children[0];
	}

	//change the image
	var img = document.getElementById('endingImageSource');
	img.src = currentNode.metadata.buttonTexts[offset].optionImageSource;

	//move this to when container loads, not when button is clicked
	var buttonText = document.getElementById('scene' + scene + 'Option' + option);
	buttonText.innerHTML = currentNode.metadata.buttonTexts[offset].buttonText;

	var edu = document.getElementById("education");
	edu.innerHTML = "Option: " + currentNode.metadata.buttonTexts[offset].buttonText + "<br>" +
					"Cost: $" + currentNode.metadata.buttonTexts[offset].cost + "<br>" +
					"Added Functionality: " + currentNode.metadata.buttonTexts[offset].functionality + "/5<br>" +
					"Added Aesthetic: " + currentNode.metadata.buttonTexts[offset].aesthetic + "/5<br>" +
					"Evaluation: " + currentNode.metadata.buttonTexts[offset].education;

	var endBudget = document.getElementById("endingSceneBudgetNumber");
	var endAesthetic = document.getElementById("EndingSceneAestheticNumber");
	var endFunctionality = document.getElementById("endingSceneFunctionalityNumber");

	endBudget.innerHTML = " $" + currentNode.metadata.buttonTexts[offset].cost;
	endAesthetic.innerHTML = " " + currentNode.metadata.buttonTexts[offset].aesthetic + "/5";
	endFunctionality.innerHTML = " " + currentNode.metadata.buttonTexts[offset].functionality + "/5";

}

