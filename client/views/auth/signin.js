Template.signinPage.rendered = function() {
    Session.set('headerState', { text: "", back: true });
};
Template.signinPage.events({
    'submit': function(event) {
        event.preventDefault();
        var form = event.target;
        var email = form.email.value;
        var password = form.password.value;
        var error = "";
        if (!email || !password) {
            error = "Please fill email and password";
            Session.set('signinPageErrors', error);
            return;
        }
        Meteor.loginWithPassword(email, password, function(error) {
            if (error) {
                return Session.set('signinPageErrors', error.reason);
            }
            Router.go('board');
        });
    },
    'click .go-to-join-page': function() {
        Router.go('joinPage');
    }
});