Template.recipePage.rendered = function() {
    Session.set('headerState', { text: "", back: true, isTransparent: true });
};
Template.recipePage.events({
    'click .like': function() {
        Meteor.call('addLike', this._id, true);
    },
    'click .btn-start': function() {
        Router.go('stepPage', {_id: this._id});
    },
    'click .btn-add-cart': function() {

    }
});
Template.recipePage.helpers({
    ingredientsList: function() {
        return this.ingredients;
    }
});