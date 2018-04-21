//ending scene logic goes in here

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

	var img = document.getElementById('endingImageSource');
	img.src = currentNode.metadata.buttonTexts[offset].optionImageSource;


	//move this to when container loads, not when button is clicked
	var buttonText = document.getElementById('scene' + scene + 'Option' + option);
	buttonText.innerHTML = currentNode.metadata.buttonTexts[offset].buttonText;

	var edu = document.getElementById("education");
	edu.innerHTML = "scene " + scene + " option " + option;
}
>>>>>>> 442d2f41a16bf38ae70ce3ff1b3cfcccdd2e2882
