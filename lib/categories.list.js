CategoriesList = [];

CategoriesList.push({
    index: 1,
    name: "desserts",
    title: "Desserts",
    picture: "/category/vanilla.jpg",
});
CategoriesList.push({
    index: 2,
    name: "salads",
    title: "Salads",
    picture: "/category/salads.jpg",
});
CategoriesList.push({
    index: 3,
    name: "soup",
    title: "Soup",
    picture: "/category/soup.jpg",
});
CategoriesList.push({
    index: 4,
    name: "pasta",
    title: "Pasta",
    picture: "/category/pasta.jpg",
});
CategoriesList.push({
    index: 5,
    name: "fish",
    title: "Fish",
    picture: "/category/fish.jpg",
});
CategoriesList.push({
    index: 6,
    name: "meat",
    title: "Meat",
    picture: "/category/meat.jpg",
});

if (Meteor.isClient) {
    Categories = new Meteor.Collection(null);
    _.each(CategoriesList, function(item) {
        Categories.insert(item);
    });
}