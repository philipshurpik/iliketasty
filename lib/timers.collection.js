Timers = new Mongo.Collection("timers");

Meteor.methods({
    addTimer: function(recipeId, stepTitle, timerTime) {
        if (!Meteor.userId()) {
            throw new Meteor.Error("Fucking shit! Are you kidding me?");
        }
        var now = new Date().getTime(),
            alarmTime = new Date(now + timerTime * 1000);
        var timerData = {
            recipeId: recipeId,
            stepTitle: stepTitle,
            createdAt: new Date(),
            timerTime: timerTime,
            alarmTime: alarmTime,
            userId: Meteor.userId(),
            userName: Meteor.user().username
        };
        Timers.insert(timerData);
    }
});