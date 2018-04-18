//creating root, first scene
var tree = new Tree("intro", {
	id: 0,
	scene: "../images/scene1/LivingRoom-OpeningScene.gif",
	buttonTexts: [{
			buttonText: "Play",
			optionImageSource: "../images/scene1/LivingRoom-Option1(Levelled).png",
			cost: 0,
			functionality: 0,
			aesthetic: 0 
		}
	]

});

tree.add("scene1", {
	id: 1,
	scene: "../images/scene1/LivingRoom-OpeningScene.gif",
	cloudTransition: "../images/scene1/LivingRoom-CloudTransition.gif",
	sceneTransition: "../images/scene1/LivingRoom-CloudTransition.gif",
	introSceneTime: 20000,
	buttonTexts: [{
			buttonText: "Level Floor",
			optionImageSource: "../images/scene1/LivingRoom-Option1(Levelled).png",
			cost: 1000,
			functionality: 5,
			aesthetic: 4 
		},
		{
			buttonText: "Install Lift",
			optionImageSource: "../images/scene1/LivingRoom-Option3(Lift).png",
			cost: 920,
			functionality: 3,
			aesthetic: 1 
		},
		{
			buttonText: "Build Ramp",
			optionImageSource: "../images/scene1/LivingRoom-Option2(Ramp).png",
			cost: 50,
			functionality: 2,
			aesthetic: 2 
			
		},
		{
			buttonText: "Ignore",
			optionImageSource: "../images/scene1/LivingRoom-Option4(NoCost)-no-loop.gif",
			cost: 0,
			functionality: 0,
			aesthetic: 0 
		}
	]

}, 'intro', tree.traverseBF);

tree.add('scene2', {
	id: 2,
	scene: "../images/scene2/Kitchen1-OpeningSceneMerged-no-loop-try-1.gif",
	cloudTransition: "../images/scene2/Kitchen1-CloudTransition-no-loop-try-1.gif",
	sceneTransition: "../images/scene2/Kitchen1-TransitiontoKitchen2-no-loop-try-1.gif",
	introSceneTime: 35000,
	buttonTexts: [{
			buttonText: "Move Light Switch",
			optionImageSource: "../images/scene2/Kitchen1-Option1_light_lowered.png",
			cost: 500,
			functionality: 4,
			aesthetic: 2 
		},
		{
			buttonText: "Install Smart Bulbs",
			optionImageSource: "../images/scene2/Kitchen1-Option2_Phillips_Hue.png",
			cost: 200,
			functionality: 3,
			aesthetic: 2 
		},
		{
			buttonText: "Amazon Alexa",
			optionImageSource: "../images/scene2/Kitchen1-Option3_Alexa.png",
			cost: 50,
			functionality: 1,
			aesthetic: 1
		},
		{
			buttonText: "Use String",
			optionImageSource: "../images/scene2/Kitchen1-NoCost_string.png",
			cost: 0,
			functionality: 0,
			aesthetic: 0 
		}
	]

}, 'scene1', tree.traverseBF);

tree.add('scene3', {
	id: 3,
	scene: "../images/scene2/Kitchen1-OpeningSceneMerged-no-loop-try-1.gif",
	cloudTransition: "../images/scene2/Kitchen1-CloudTransition-no-loop-try-1.gif",
	sceneTransition: "../images/scene2/Kitchen1-TransitiontoKitchen2-no-loop-try-1.gif",
	introSceneTime: 35000,
	buttonTexts: [{
			buttonText: "Move Light Switch",
			optionImageSource: "../images/scene2/Kitchen1-Option1_light_lowered.png",
			cost: 500,
			functionality: 4,
			aesthetic: 2 
		},
		{
			buttonText: "Install Smart Bulbs",
			optionImageSource: "../images/scene2/Kitchen1-Option2_Phillips_Hue.png",
			cost: 200,
			functionality: 3,
			aesthetic: 2 
		},
		{
			buttonText: "Amazon Alexa",
			optionImageSource: "../images/scene2/Kitchen1-Option3_Alexa.png",
			cost: 50,
			functionality: 1,
			aesthetic: 1
		},
		{
			buttonText: "Use String",
			optionImageSource: "../images/scene2/Kitchen1-NoCost_string.png",
			cost: 0,
			functionality: 0,
			aesthetic: 0 
		}
	]

}, 'scene2', tree.traverseBF);