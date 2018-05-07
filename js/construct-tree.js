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
	scene: "../images/scene1/LivingRoom-OpeningScene-no-loop.gif",
	cloudTransition: "../images/scene1/LivingRoom-CloudTransition.gif",
	sceneTransition: "../images/scene1/KitchenTransition-no-loop.gif",
	introSceneTime: 25000,
	buttonTexts: [{
			buttonText: "Level Floor",
			optionImageSource: "../images/scene1/LivingRoom-Option1(Levelled).png",
			cost: 5000,
			functionality: 5,
			aesthetic: 5,
			education: "Excellent choice.  Though expensive, leveling the floor makes accessibility an integral part of your home and could increase its overall value.  To avoid such renovation costs, look for level floors when searching for a new home." 
		},
		{
			buttonText: "Install Lift",
			optionImageSource: "../images/scene1/LivingRoom-Option3(Lift).png",
			cost: 3000,
			functionality: 3,
			aesthetic: 1,
			education: "Probably not the ideal choice. Lifts can be a great solution for navigating multi-stair rises, but is not an economical nor aesthetic choice for a single step."
		},
		{
			buttonText: "Build Ramp",
			optionImageSource: "../images/scene1/LivingRoom-Option2(Ramp).png",
			cost: 300,
			functionality: 4,
			aesthetic: 3,
			education: "Good choice on a budget.  Designed correctly, a ramp can fit in well with the overall aesthetic of the room.  Be careful to make sure that the ramp is sloped low enough for Uncle Jack to be able to get up and down on his own."
			
		},
		{
			buttonText: "Call Hannah",
			optionImageSource: "../images/scene1/LivingRoom-Option4(NoCost)-no-loop.gif",
			cost: 0,
			functionality: 0,
			aesthetic: 5,
			education: "The room remains unchanged and looking good as ever, but both Hannah and Uncle Jack are feeling bad about putting out the other.  It’s a good thing Hannah’s flexible schedule allows her to come home at a moment’s notice." 
		}
	]

}, 'intro', tree.traverseBF);

tree.add('scene2', {
	id: 2,
	scene: "../images/scene2/Kitchen1-OpeningSceneMerged-no-loop-try-1.gif",
	cloudTransition: "../images/scene2/Kitchen1-CloudTransition-no-loop-try-1.gif",
	sceneTransition: "../images/scene2/KitchenTransition-no-loop.gif",
	introSceneTime: 35000,
	buttonTexts: [{
			buttonText: "Move Light Switch",
			optionImageSource: "../images/scene2/Kitchen1-Option1_light_lowered.png",
			cost: 1500,
			functionality: 5,
			aesthetic: 5,
			education: "These changes are hardly noticeable to the eye, leaving the house looking as great as always.  Uncle Jack has no problem reaching the switches now, but perhaps you could have achieved the same results at a lower cost."
		},
		{
			buttonText: "Install Smart Bulbs",
			optionImageSource: "../images/scene2/Kitchen1-Option2_Phillips_Hue.png",
			cost: 300,
			functionality: 4,
			aesthetic: 5,
			education: "Great choice. Smart bulbs are indiscernible form typical light bulbs.  Docked one functionality point since this wouldn’t be effective unless Uncle Jack has his phone on him at all times."
		},
		{
			buttonText: "Amazon Alexa",
			optionImageSource: "../images/scene2/Kitchen1-Option3_Alexa.png",
			cost: 450,
			functionality: 5,
			aesthetic: 5,
			education: "Excellent choice. An option like Alexa or Google Home gives Uncle Jack the ability to turn the lights on or off from anywhere in the home by using his voice.  It also opens the door for other uses, like controlling the TV and other electronics."
		},
		{
			buttonText: "Use String",
			optionImageSource: "../images/scene2/Kitchen1-NoCost_string.png",
			cost: 0,
			functionality: 0,
			aesthetic: 0,
			education: "A string?  You’re leaving Uncle Jack with a string?!"
		}
	]

}, 'scene1', tree.traverseBF);

tree.add('scene3', {
	id: 3,
	scene: "../images/scene3/KitchenScene2 - OpeningScene-merged-new-new-no-loop.gif",
	cloudTransition: "../images/scene3/KitchenScene2-Cloud Transition.gif",
	sceneTransition: "../images/scene2/Kitchen1-TransitiontoKitchen2-no-loop-try-1.gif",
	introSceneTime: 43000,
	buttonTexts: [{
			buttonText: "New table",
			optionImageSource: "../images/scene3/KitchenScene2 -  Option1(Change Table).jpg",
			cost: 500,
			functionality: 5,
			aesthetic: 4,
			education: "It may be a step down aesthetically from the modern design, but isn’t it more important that Uncle Jack can reach his food?! The new table is a fine choice indeed."
		},
		{
			buttonText: "Grabber Tool",
			optionImageSource: "../images/scene3/KitchenScene2 - Option2(Grabber).jpg",
			cost: 30,
			functionality: 2,
			aesthetic: 5,
			education: "You get to keep your modern table with no additional installations necessary.  The grabber tool is great for certain items, but not practical for many others like plates of food, delicate items, and larger objects."
		},
		{
			buttonText: "Install Grab Bar",
			optionImageSource: "../images/scene3/KitchenScene2 - Option3(Bar)-new-new-no-loop.gif",
			cost: 120,
			functionality: 3,
			aesthetic: 3,
			education: "Though grab bars can be a bit of an eyesore, they can be very useful.  The function score here averages out to 3, but can be anywhere from 1-5 based on the individual case.  If Uncle Jack has the upper body strength and  ability to stand up then this is a very functional solution.  If not, then the grab bar is simply a decoration."
		},
		{
			buttonText: "Give Away Sandwich",
			optionImageSource: "../images/scene3/KitchenScene2 - Option4(No Cost).jpg",
			cost: 0,
			functionality: 0,
			aesthetic: 5,
			education: "Hannah made that sandwich just the way Uncle Jack likes it, but hey at least we get to keep the fancy table."
		}
	]

}, 'scene2', tree.traverseBF);

tree.add('scene4', {
	id: 4,
	scene: "../images/scene4/Stairs-OpeningScene-new-no-loop.gif",
	cloudTransition: "../images/scene4/Stairs-CloudTransition.gif",
	sceneTransition: "../images/scene4/Stairs-CircleTransition-no-loop-new.gif",
	introSceneTime: 32000,
	buttonTexts: [{
			buttonText: "Install Elevator",
			optionImageSource: "../images/scene4/Stairs-Elevator.jpg",
			cost: 25000,
			functionality: 5,
			aesthetic: 4,
			education: "If you have the budget, by all means go for the elevator!  An elevator gives Uncle Jack free reign of all the floors in the house and unparalleled freedom. The price tag is steep, however, and maybe we can get Uncle Jack 80% of that freedom at a fraction of the cost."
		},
		{
			buttonText: "Purchase Space Heaters",
			optionImageSource: "../images/scene4/Stairs-Heaters.jpg",
			cost: 200,
			functionality: 3,
			aesthetic: 3,
			education: "Not bad in a pinch and on a budget, but this is more of a band-aid solution."
		},
		{
			buttonText: "Install Smart Thermostat",
			optionImageSource: "../images/scene4/Stairs-Nest.jpg",
			cost: 250,
			functionality: 4,
			aesthetic: 5,
			education: "Great solution!  The Nest thermostat allows Uncle Jack to control the thermostat from anywhere.  While it would be most ideal to enable Uncle Jack to reach all levels of the house, a cost-effective alternative is to provide all necessities on the main floor. The connected home (think Nest, Alexa, programmable security systems) is making this all the more possible."
		},
		{
			buttonText: "Pull Out Blanket",
			optionImageSource: "../images/scene4/Stairs-Blanket.jpg",
			cost: 0,
			functionality: 1,
			aesthetic: 5,
			education: "A blanket works great when it’s too cold, but what do we suppose Uncle Jack do when it’s too hot…"
		}
	]

}, 'scene3', tree.traverseBF);

tree.add('scene5', {
	id: 5,
	scene: "../images/scene5/FrontDoor-OpeningScene-no-loop.gif",
	cloudTransition: "../images/scene5/FrontDoor-CloudTransition.gif",
	sceneTransition: "../images/scene5/FrontDoor-CircleTransition-no-loop.gif",
	introSceneTime: 28000,
	buttonTexts: [{
			buttonText: "Install Sliding Door",
			optionImageSource: "../images/scene5/FrontDoor-SlideDoor.png",
			cost: 1500,
			functionality: 3,
			aesthetic: 5,
			education: "Though a sliding door can look great and be easier to open, it’s not perfect.  It’s important to ensure Uncle Jack can still navigate over the bottom track of the door, and that he has enough strength and leverage to pull the door to the side."
		},
		{
			buttonText: "Install Door Opener",
			optionImageSource: "../images/scene5/FrontDoor-DoorOperator.png",
			cost: 300,
			functionality: 5,
			aesthetic: 4,
			education: "Bingo, this is a great way to add to Uncle Jack’s ability to navigate the house from the palm of his hand.  Though the device sticks out a bit, it eliminates the need for increased doorway clearance."
		},
		{
			buttonText: "Buy Hook Door Opener",
			optionImageSource: "../images/scene5/FrontDoor-Hook.png",
			cost: 25,
			functionality: 4,
			aesthetic: 2,
			education: "For the right situation, this can be a serviceable solution.  Though not the most aesthetically pleasing, it tends to get the job done."
		},
		{
			buttonText: "Call Hannah",
			optionImageSource: "../images/scene5/FrontDoor-Hannah.png",
			cost: 0,
			functionality: 0,
			aesthetic: 5,
			education: "Something tells me Hannah is going to want to buy a new door after this."
		}
	]

}, 'scene4', tree.traverseBF);