Template.stepPage.rendered = function() {
    Session.set('headerState', { text: "", back: true, isTransparent: true });
    Session.set('recipeId', this.recipeId);
};
Template.stepPage.events({

});
Template.stepPage.helpers({
    stepsList: function() {
        return this.steps;
    }
});