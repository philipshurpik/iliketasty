Meteor.publish("Timers", function() {
	return Timers.find({
        userId: this.userId
	});
});

Meteor.publish("Comments", function() {
    return Comments.find({});
});

Meteor.publish("Likes", function() {
    return Likes.find({});
});