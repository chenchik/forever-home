//ending scene logic goes in here
function changeEndingScene(scene, option){
	var endingImage = document.getElementById("endingImageSource");

	//-1 represents dummy value, meaning the user clicked on the scene, but not a particular option
	if(option == -1){
		option = savedOptions[scene];
	}

	//find the node we need from the tree
	var i = 1;
	//first child, first scene
	var neededNode = tree.root.children[0];
	while(i < scene){
		neededNode = neededNode.children[0];
		i += 1;
	}

	//now we can get the scene source and metrics using the option passed into the function.
	endingImage.src = neededNode.metadata.buttonTexts[option].optionImageSource;

}