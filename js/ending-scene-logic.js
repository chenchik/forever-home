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
	//alert("scene " + scene + " option " + option);
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
