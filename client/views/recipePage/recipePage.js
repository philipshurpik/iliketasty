Template.recipePage.rendered = function() {
    Session.set('headerState', { text: "", back: true, isTransparent: true });
};
Template.recipePage.events({
    'click .like': function() {
        var userLikes = Likes.find({
            recipeId: this.recipeId,
            userId: Meteor.userId()
        }).count();
        if (userLikes === 0) {
            Meteor.call('addLike', this.recipeId);
        }
        else {
            Meteor.call('removeLike', this.recipeId);
        }
    },
    'click .btn-start': function() {
        Router.go('stepPage', {_id: this._id});
    },
    'click .btn-add-cart': function() {

    }
});
Template.recipePage.helpers({
    isLikeActive: function() {
        return Likes.find({
            recipeId: this.recipeId,
            userId: Meteor.userId()
        }).count() > 0 && 'liked';
    },
    likesCount: function() {
        return Likes.find({
            recipeId: this.recipeId
        }).count()
    },
    ingredientsList: function() {
        return this.ingredients;
    }
});