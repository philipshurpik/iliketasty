var category = {
	name: "desserts",
	picture: "",
	title: "Desserts"
};


var example = {
	title: "Pancakes with Nutella",
	picture: "",
	categoryName: "desserts",
	time: 150,
	description: "This is tasty pancakes with nutella",
	defaultServings: 2,
	ingredients: [{
		name: "eggs",
		quantity: 2,
		checked: false
	}, {
		name: "milk",
		quantity: 300,
		measure: "ml",
		checked: false
	}],
	steps: {
		title: "Make something",
		picture: "",
		description: "",
		time: 6,
		timerTime: 0
	}
};

var examples = [];
examples.push(example);