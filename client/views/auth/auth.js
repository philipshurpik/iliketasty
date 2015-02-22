Template.authPage.rendered = function() {
    if (Meteor.userId() !== null) {
        Router.go('/');
    }
    Session.set('headerState', { text: "Вход в программу" });
};
Template.authPage.events({
    'click .go-to-signin-page': function() {
        Router.go('signinPage');
    },
    'click .go-to-join-page': function() {
        Router.go('joinPage');
    },
    'click .signin-facebook': function() {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            } else {
                Router.go('/');
            }
        });
    },
    'click .signin-twitter': function() {
        // some twitter logic


    }
});