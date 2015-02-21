Comments = new Mongo.Collection("comments");

Meteor.methods({
    add: function(recipeId, comment) {
        if (!Meteor.userId()) {
            throw new Meteor.Error("Fucking shit! Are you kidding me?");
        }
        var recipeData = {
            recipeId: recipeId,
            comment: comment,
            createdAt: new Date(),
            userId: Meteor.userId(),
            userName: Meteor.user().username
        };
        Comments.insert(recipeData);
    }
});