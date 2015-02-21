Timers = new Mongo.Collection("timers");

Meteor.methods({
    addTimer: function(recipeId, stepNumber, duration) {
        if (!Meteor.userId()) {
            throw new Meteor.Error("Fucking shit! Are you kidding me?");
        }
        var recipeData = {
            recipeId: recipeId,
            stepNumber: duration,
            createdAt: new Date(),
            userId: Meteor.userId(),
            userName: Meteor.user().username
        };
        Timers.insert(recipeData);
    }
});