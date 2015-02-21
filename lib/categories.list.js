CategoriesList = [];

CategoriesList.push({
    index: 1,
    name: "desserts",
    picture: "",
    title: "Desserts"
});
CategoriesList.push({
    index: 2,
    name: "salads",
    picture: "",
    title: "Salads"
});
CategoriesList.push({
    index: 3,
    name: "soup",
    picture: "",
    title: "Soup"
});
CategoriesList.push({
    index: 4,
    name: "pasta",
    picture: "",
    title: "Pasta"
});
CategoriesList.push({
    index: 5,
    name: "fish",
    picture: "",
    title: "Fish"
});
CategoriesList.push({
    index: 6,
    name: "meat",
    picture: "",
    title: "Meat"
});

if (Meteor.isClient) {
    Categories = new Meteor.Collection(null);
    _.each(CategoriesList, function(item) {
       Categories.insert(item);
    });
}