CategoriesList = [];

CategoriesList.push({
    index: 1,
    name: "desserts",
    title: "Desserts",
    picture: "/category/vanilla.jpg"
});
CategoriesList.push({
    index: 2,
    name: "salads",
    title: "Salads",
    picture: "/category/salads.jpg"
});
CategoriesList.push({
    index: 3,
    name: "soup",
    title: "Soup",
    picture: "/category/soup.jpg"
});
CategoriesList.push({
    index: 4,
    name: "pasta",
    title: "Pasta",
    picture: "/category/pasta.jpg"
});
CategoriesList.push({
    index: 5,
    name: "fish",
    title: "Fish",
    picture: "/category/fish.jpg"
});
CategoriesList.push({
    index: 6,
    name: "meat",
    title: "Meat",
    picture: "/category/meat.jpg"
});

CategoriesList.push({
    index: 7,
    name: "desserts1",
    title: "Desserts1",
    picture: "/category/vanilla.jpg"
});
CategoriesList.push({
    index: 8,
    name: "salads1",
    title: "Salads1",
    picture: "/category/salads.jpg"
});
CategoriesList.push({
    index: 9,
    name: "soup1",
    title: "Soup1",
    picture: "/category/soup.jpg"
});
CategoriesList.push({
    index: 10,
    name: "pasta1",
    title: "Pasta1",
    picture: "/category/pasta.jpg"
});
CategoriesList.push({
    index: 11,
    name: "fish1",
    title: "Fish1",
    picture: "/category/fish.jpg"
});
CategoriesList.push({
    index: 12,
    name: "meat1",
    title: "Meat1",
    picture: "/category/meat.jpg"
});

if (Meteor.isClient) {
    Categories = new Meteor.Collection(null);
    _.each(CategoriesList, function(item) {
        Categories.insert(item);
    });
}