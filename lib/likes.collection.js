Likes = new Mongo.Collection("likes");

Meteor.methods({
    addLike: function(recipeId) {
        if (!Meteor.userId()) {
            throw new Meteor.Error("Fucking shit! Are you kidding me?");
        }
        var recipeData = {
            recipeId: recipeId,
            createdAt: new Date(),
            userId: Meteor.userId(),
            userName: Meteor.user().username
        };
        Likes.insert(recipeData);
    },
    removeLike: function(recipeId) {
        if (!Meteor.userId()) {
            throw new Meteor.Error("Fucking shit! Are you kidding me?");
        }
        Likes.remove({
            recipeId: recipeId,
            userId: Meteor.userId()
        });
    }
});