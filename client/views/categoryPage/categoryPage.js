Template.categoryPage.rendered = function() {
    Session.set('headerState', { text: "Recepies", backPage: "categories" });
};
Template.categoryPage.helpers({
    recipesList: function() {
        return Recipes.find({ categoryName: this.name });
    }
});