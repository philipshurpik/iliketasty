CategoriesList = [];

CategoriesList.push({
    name: "soup",
    picture: "",
    title: "Soup"
});

CategoriesList.push({
    name: "salads",
    picture: "",
    title: "Salads"
});

CategoriesList.push({
    name: "pasta",
    picture: "",
    title: "Pasta"
});

CategoriesList.push({
    name: "fish",
    picture: "",
    title: "Fish"
});

CategoriesList.push({
    index: 1,
    name: "desserts",
    picture: "",
    title: "Desserts"
});

CategoriesList.push({
    name: "meat",
    picture: "",
    title: "Meat"
});});

CategoriesList.push({
    index: 2,
    name: "d1",
    picture: "",
    title: "Salads"
});

CategoriesList.push({
    index: 3,
    name: "d3",
    picture: "",
    title: "Beer"
});

CategoriesList.push({
    index: 4,
    name: "d4",
    picture: "",
    title: "Meat"
});

if (Meteor.isClient) {
    Categories = new Meteor.Collection(null);
    _.each(CategoriesList, function(item) {
       Categories.insert(item);
    });
}