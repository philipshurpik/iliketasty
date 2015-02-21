RecipesList = [];

RecipesList.push({
    id: 1,
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
    steps: [{
        title: "Make something",
        picture: "",
        description: "",
        time: 6,
        timerTime: 0
    }]
});

RecipesList.push({
    id: 2,
    title: "Pancakes with blackberry",
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
    steps: [{
        title: "Make something",
        picture: "",
        description: "",
        time: 6,
        timerTime: 0
    }]
});

if (Meteor.isClient) {
    Recipes = new Meteor.Collection(null);
    _.each(RecipesList, function(item) {
        Recipes.insert(item);
    });
}