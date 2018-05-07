//ending scene logic goes in here

//populate button texts with a self executing function
/*(function populateButtonTexts(){

	var tmpNode = tree.root;

	for(i = 0; i < 5; i++){
		tmpNode = tmpNode.children[0];
		for(var option = 1; option < 5; option++){
			var buttonText = document.getElementById('scene' + (i+1) + 'Option' + option);
			buttonText.innerHTML = tmpNode.metadata.buttonTexts[option-1].buttonText;
			console.debug(tmpNode);
		}
	}

})();*/

$( document ).ready(function() {
	document.getElementById('tab-active').classList.toggle("active");
    	document.getElementById('tab-active').nextElementSibling.classList.toggle("show");
});

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

