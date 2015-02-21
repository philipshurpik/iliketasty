Template.categoryPage.rendered = function() {
    Session.set('headerState', { text: "Recepies", backPage: "categories" });
    setTimeout(function() {
        //$(this.find('.category-page')).removeClass('page-animate');
    }.bind(this), 500);
};
Template.categoryPage.helpers({
    recipesList: function() {
        return Recipes.find({ categoryName: this.name });
    }
});