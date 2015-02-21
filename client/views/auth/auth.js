Template.authPage.rendered = function() {
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
        // some facebook logic


    },
    'click .signin-twitter': function() {
        // some twitter logic


    }
});